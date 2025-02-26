import {
  AbstractMessageAction, MessageType, type Message, type FieldSchema, lodash, getAppStore, AppMode,
  type DataRecordsSelectionChangeMessage, DataSourceManager, type FeatureQueryDataSource,
  type ImmutableObject, dataSourceUtils, MutableStoreManager, type MessageDescription,
  type FeatureLayerDataSource, type SceneLayerDataSource, type BuildingComponentSubLayerDataSource,
  MessageActionConnectionType, type FeatureDataRecord, Immutable, messageActionUtils,
  type JimuFieldType
} from 'jimu-core'
import { type IMConfig } from '../message-actions/filter-action-setting'

const FILTER_ACTION_KEY_PREFIX: string = 'filterActionValue-'
const FILTER_MESSAGE_KEY_PREFIX: string = 'filterMessageValue-'

export default class FilterAction extends AbstractMessageAction {
  private readonly filterActions: {
    [filterActionKey: string]: {
      [filterMessageKey: string]: {
        querySQL: string
        messageWidgetId: string
      }
    }
  } = {}

  filterMessageDescription (messageDescription: MessageDescription): boolean {
    const appMode = getAppStore().getState().appRuntimeInfo.appMode
    if (appMode === AppMode.Express) {
      return false
    } else {
      return messageDescription.messageType === MessageType.DataRecordsSelectionChange
    }
  }

  filterMessage (message: Message): boolean {
    return true
  }

  onRemoveListen (messageType: MessageType, messageWidgetId?: string) {
    Object.keys(this.filterActions || {}).forEach(actionKey => {
      Object.entries(this.filterActions[actionKey] || {}).forEach(entry => {
        const messageKey = entry[0]
        if (entry[1]?.messageWidgetId === messageWidgetId) {
          lodash.setValue(this.filterActions, `${actionKey}.${messageKey}.querySQL`, '')
        }
      })
      const filterActionValue = {
        layerDataSourceId: actionKey.slice(FILTER_ACTION_KEY_PREFIX.length),
        querySQL: this.getUnionAllFilterQuerySQL(actionKey)
      }
      MutableStoreManager.getInstance().updateStateValue(this.widgetId, actionKey, filterActionValue)
    })
  }

  async onExecute (message: Message, actionConfig?: IMConfig): Promise<boolean> {
    switch (message.type) {
      case MessageType.DataRecordsSelectionChange:
        const selectionChangeMesage = message as DataRecordsSelectionChangeMessage
        const records = selectionChangeMesage.records

        let filterActionValue: { layerDataSourceId: string, querySQL: string } = null
        let messageDataSource, actionDataSource

        if (actionConfig) {
          // actionConfig.messageUseDataSource is the data source that publishes the message
          // actionConfig.actionUseDataSource is the data source that receives the message and takes action
          if (actionConfig.messageUseDataSource && actionConfig.actionUseDataSource) {
            if (records.length > 0) {
              const validRecordDsIds: string[] = []
              const recordMainDs = records[0].dataSource.getMainDataSource() as (SceneLayerDataSource | FeatureLayerDataSource | BuildingComponentSubLayerDataSource)

              if (recordMainDs) {
                validRecordDsIds.push(recordMainDs.id)

                const recordAssociatedDs = recordMainDs.getAssociatedDataSource && recordMainDs.getAssociatedDataSource()

                if (recordAssociatedDs) {
                  validRecordDsIds.push(recordAssociatedDs.id)
                }
              }

              // When clicking/selecting the 3D features on the SceneLayer/BuildingComponentSublayer, recordMainDs is FeatureLayerDataSource, recordAssociatedDs is SceneLayerDataSource,
              // but actionConfig.messageUseDataSource.mainDataSourceId is the id of SceneLayerDataSource,
              // so we should not use the following code to just check records[0].dataSource.getMainDataSource().id, we also need to check recordAssociatedDs.id.
              // records[0].dataSource.getMainDataSource().id !== actionConfig.messageUseDataSource.mainDataSourceId
              if (!validRecordDsIds.includes(actionConfig.messageUseDataSource.mainDataSourceId)) {
                MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'filterActionValue', null)
                break
              }
            }

            // Framework makes sure the following data sources are available before call onExecute() method.
            // messageDataSource is the data source that publishes the message
            // actionDataSource is the data source that receives the message and takes action
            messageDataSource = DataSourceManager.getInstance().getDataSource(actionConfig.messageUseDataSource.mainDataSourceId)
            actionDataSource = DataSourceManager.getInstance().getDataSource(actionConfig.actionUseDataSource.mainDataSourceId)

            if (messageDataSource && actionDataSource) {
              if (records.length <= 0) {
                // clear filter
                filterActionValue = {
                  layerDataSourceId: actionDataSource && actionDataSource.id,
                  querySQL: ''
                }
              } else if (actionConfig.enabledDataRelationShip) {
                // when ds instances exist
                // The "Trigger / action connection" option is checked.
                let messageField: ImmutableObject<FieldSchema> = null
                let actionField: ImmutableObject<FieldSchema> = null

                if (actionConfig.messageUseDataSource.mainDataSourceId === actionConfig.actionUseDataSource.mainDataSourceId &&
                  actionConfig.messageUseDataSource.rootDataSourceId === actionConfig.actionUseDataSource.rootDataSourceId) {
                  // if trigger ds is same to action ds, the "Auto bound" case
                  const messageDsSchema = messageDataSource.getSchema()
                  const objectIdJimuFieldName = messageDsSchema && messageDsSchema.fields &&
                    Object.keys(messageDsSchema.fields).find(jimuFieldName => messageDsSchema.fields[jimuFieldName].esriType === 'esriFieldTypeOID')
                  messageField = messageDsSchema && messageDsSchema.fields && messageDsSchema.fields[objectIdJimuFieldName]
                  actionField = messageField
                } else {
                  // if trigger ds isn't same to action ds, not the "Auto bound" case
                  let messageJimuFieldName, actionJimuFieldName

                  if (actionConfig.connectionType === MessageActionConnectionType.UseLayersRelationship) {
                    // "Use layer's relationship" radio checked
                    // get key fields in relationships and whether it has a relationship table
                    const relationshipInfo = dataSourceUtils.getJimuDataSourceRelationship(messageDataSource as FeatureLayerDataSource, actionDataSource as FeatureLayerDataSource)

                    // In fact, relationshipInfo should not be null unless it is deleted from service.
                    if (relationshipInfo) {
                      messageJimuFieldName = relationshipInfo.keyField
                      actionJimuFieldName = relationshipInfo.relatedKeyField
                    }
                  } else {
                    // "Set custom connection fields" radio checked
                    messageJimuFieldName = actionConfig.messageUseDataSource.fields[0]
                    actionJimuFieldName = actionConfig.actionUseDataSource.fields[0]
                  }

                  if (messageJimuFieldName) {
                    messageField = messageDataSource.getSchema().fields[messageJimuFieldName]
                  }

                  if (actionJimuFieldName) {
                    actionField = actionDataSource.getSchema().fields[actionJimuFieldName]
                  }
                }

                let whereSql = ''

                // make sure both messageField and actionField not empty
                if (messageField && actionField) {
                  const messageFieldName = messageField.name
                  const messageFieldType = messageField.type

                  const tempMessage: DataRecordsSelectionChangeMessage = message as DataRecordsSelectionChangeMessage
                  let uniqueFormatedMessageFieldValues: any[] = [] // unique formated values

                  if (actionConfig.connectionType === MessageActionConnectionType.UseLayersRelationship) {
                    // "Use layer's relationship" radio checked
                    const originalFieldValues = await (messageDataSource as FeatureLayerDataSource)?.queryRelatedFieldValues(
                      (tempMessage.records || []) as FeatureDataRecord[],
                      actionDataSource as FeatureLayerDataSource,
                      actionField.name) || []

                    uniqueFormatedMessageFieldValues = this.getUniqueFormatedMessageFieldValues(originalFieldValues, messageFieldType)

                    if (uniqueFormatedMessageFieldValues.length === 0) {
                      uniqueFormatedMessageFieldValues = ['-1']
                      actionField = actionDataSource.getSchema().fields[actionDataSource.getIdField()]
                    }
                  } else {
                    // "Set custom connection fields" radio checked
                    const originalFieldValues = tempMessage.records.map(record => {
                      const originalFieldValue = record.getData()[messageFieldName]
                      return originalFieldValue
                    })

                    uniqueFormatedMessageFieldValues = this.getUniqueFormatedMessageFieldValues(originalFieldValues, messageFieldType)
                  }

                  whereSql = ''

                  if (uniqueFormatedMessageFieldValues.length > 0) {
                    const useCaseSensitive = true
                    const sqlExpressionByMessageFieldValues = messageActionUtils.getSqlExpressionWidthMessageFieldValues(uniqueFormatedMessageFieldValues, actionField, actionDataSource, useCaseSensitive)

                    if (sqlExpressionByMessageFieldValues) {
                      const imSqlExpressionByMessageFieldValues = Immutable(sqlExpressionByMessageFieldValues)
                      const sqlResult = dataSourceUtils.getArcGISSQL(imSqlExpressionByMessageFieldValues, actionDataSource)

                      if (sqlResult?.sql) {
                        whereSql = sqlResult?.sql
                      }
                    }
                  }

                  if (!whereSql) {
                    whereSql = ''
                  }
                }

                if ((message as DataRecordsSelectionChangeMessage).records.length > 0) {
                  // If user sets "More conditions", then actionConfig.sqlExprObj is not empty.
                  // actionConfig.sqlExprObj is the SQL info for actionUseDataSource.
                  const moreAditionSQL = actionConfig.sqlExprObj ? dataSourceUtils.getArcGISSQL(actionConfig.sqlExprObj, actionDataSource).sql : null

                  if (moreAditionSQL) {
                    if (whereSql) {
                      whereSql = whereSql + ' AND ' + moreAditionSQL
                    } else {
                      whereSql = moreAditionSQL
                    }
                  }
                } else {
                  whereSql = ''
                }

                filterActionValue = {
                  layerDataSourceId: actionDataSource && actionDataSource.id,
                  querySQL: whereSql
                }
              } else {
                // The "Trigger / action connection" option is unchecked.
                let whereSql = ''

                if ((message as DataRecordsSelectionChangeMessage).records.length > 0) {
                  // If user sets "More conditions", then actionConfig.sqlExprObj is not empty.
                  // actionConfig.sqlExprObj is the SQL info for actionUseDataSource.
                  const moreAditionSQL = actionConfig.sqlExprObj ? dataSourceUtils.getArcGISSQL(actionConfig.sqlExprObj, actionDataSource).sql : null

                  if (moreAditionSQL) {
                    whereSql = moreAditionSQL
                  }
                } else {
                  whereSql = ''
                }

                filterActionValue = {
                  layerDataSourceId: actionDataSource && actionDataSource.id,
                  querySQL: whereSql
                }
              }
            } else {
              // when ds instances don't exist
              filterActionValue = null
            }
          } else {
            filterActionValue = null
          }
        }

        const messageKey = this.getFilterMessageKey(message.widgetId, messageDataSource?.id)
        const actionKey = this.getFilterActionKey(filterActionValue?.layerDataSourceId)

        if (filterActionValue) {
          lodash.setValue(this.filterActions, `${actionKey}.${messageKey}`, {
            querySQL: filterActionValue?.querySQL,
            messageWidgetId: message.widgetId
          })
          filterActionValue.querySQL = this.getUnionAllFilterQuerySQL(actionKey)
        }
        MutableStoreManager.getInstance().updateStateValue(this.widgetId, actionKey, filterActionValue)
        break
    }

    return true
  }

  getUnionAllFilterQuerySQL (actionKey) {
    let unionQuerySQL = ''
    Object.entries(this.filterActions[actionKey] || {}).forEach(entry => {
      //const filterMessageKey = entry[0]
      const querySQL = entry[1]?.querySQL
      if (unionQuerySQL && querySQL) {
        unionQuerySQL = ` ${unionQuerySQL} AND ${querySQL} `
      } else {
        unionQuerySQL = querySQL || unionQuerySQL
      }
    })
    return unionQuerySQL
  }

  getFilterActionKey (actionLayerDataSourceId) {
    const actionKey = `${FILTER_ACTION_KEY_PREFIX}${actionLayerDataSourceId}`
    return actionKey
  }

  getFilterMessageKey (messageWidgetId, messageLayerDataSourceId) {
    const messageKey = `${FILTER_MESSAGE_KEY_PREFIX}${messageWidgetId}-${messageLayerDataSourceId}`
    return messageKey
  }

  getLayerIdFromLayerDs (ds: FeatureLayerDataSource | FeatureQueryDataSource) {
    if ((ds as any).layerId) {
      return (ds as FeatureQueryDataSource).layerId
    } else if ((ds as any).layer) {
      return (ds as FeatureLayerDataSource).layer.id
    } else {
      return null
    }
  }

  getUniqueFormatedMessageFieldValues (originalFieldValues: any[], messageFieldType: JimuFieldType): any[] {
    const uniqueFormatedValues = []

    for (let i = 0; i < originalFieldValues.length; i++) {
      const originalFieldValue = originalFieldValues[i] // not formated value
      const formatedFieldValue = messageActionUtils.formatValue(originalFieldValue, messageFieldType) // formated value, maybe number, string or null

      if (uniqueFormatedValues.includes(formatedFieldValue)) {
        continue
      } else {
        uniqueFormatedValues.push(formatedFieldValue)
      }
    }

    return uniqueFormatedValues
  }
}
