/** @jsx jsx */
import {
  React, css, jsx, type ActionSettingProps, type SerializedStyles, type ImmutableObject,
  type IMThemeVariables, polished, Immutable, type UseDataSource, MessageType, getAppStore, CONSTANTS, AllDataSourceTypes
} from 'jimu-core'
// import { Label, Checkbox } from 'jimu-ui'
import { SettingSection } from 'jimu-ui/advanced/setting-components'
//import { ArcGISDataSourceTypes } from 'jimu-arcgis'
import { DataSourceSelector, DEFAULT_DATA_VIEW_ID } from 'jimu-ui/advanced/data-source-selector'
import defaultMessages from '../setting/translations/default'
import { withTheme } from 'jimu-theme'
import { type ActionConfig, checkOutActionConfigForZoomToAndPanToMessageActions, getUseDataSourceInfoForZoomToAndPanToMessageActions, getDsByWidgetId } from './action-utils'

interface ExtraProps {
  theme?: IMThemeVariables
}

interface States {
  isShowLayerList: boolean
}

interface PanToMessageConfig extends ActionConfig {
  // return to the initial map extent when selection is cleared, default is false
  goToInitialMapExtentWhenSelectionCleared?: boolean
}

export type IMConfig = ImmutableObject<PanToMessageConfig>

const DSSelectorTypes = Immutable([
  AllDataSourceTypes.FeatureLayer,
  AllDataSourceTypes.SceneLayer,
  AllDataSourceTypes.BuildingComponentSubLayer,
  AllDataSourceTypes.ImageryLayer,
  AllDataSourceTypes.OrientedImageryLayer
])

class _PanToActionSetting extends React.PureComponent<ActionSettingProps<IMConfig> & ExtraProps, States> {
  modalStyle: any = {
    position: 'absolute',
    top: '0',
    bottom: '0',
    width: '259px',
    height: 'auto',
    borderRight: '',
    borderBottom: '',
    paddingBottom: '1px'
  }

  constructor (props) {
    super(props)

    this.modalStyle.borderRight = '1px solid black'
    this.modalStyle.borderBottom = '1px solid black'

    this.state = {
      isShowLayerList: false
    }
  }

  static defaultProps = {
    config: Immutable({
      useDataSource: null
    })
  }

  componentDidMount () {
    //const initConfig = this.getInitConfig()
    // Case1: If actionConfig.useDataSource is null, it is the the first time to open the message action setting.
    // Case2: If actionConfig.useDataSource is not null, it is not the the first time to open the message action setting.
    const initConfig = checkOutActionConfigForZoomToAndPanToMessageActions(this.props.config, this.props.messageWidgetId, this.props.messageType)

    let config = this.props.config.set('useDataSource', initConfig.useDataSource)
    config = config.set('useDataSources', initConfig.useDataSources)

    this.props.onSettingChange({
      actionId: this.props.actionId,
      config: config
    })
  }

  getStyle (theme: IMThemeVariables): SerializedStyles {
    return css`
      .setting-header {
        padding: ${polished.rem(10)} ${polished.rem(16)} ${polished.rem(0)} ${polished.rem(16)}
      }

      .deleteIcon {
        cursor: pointer;
        opacity: .8;
      }

      .deleteIcon:hover {
        opacity: 1;
      }
    `
  }

  handleTriggerLayerChange = (useDataSources: UseDataSource[]) => {
    if (useDataSources && useDataSources.length > 0) {
      this.handleTriggerLayerSelected(useDataSources)
    } else {
      this.handleRemoveLayerForTriggerLayer()
    }
  }

  handleTriggerLayerSelected = (currentSelectedDs: UseDataSource[]) => {
    const messageWidgetUseDataSources = getDsByWidgetId(this.props.messageWidgetId, this.props.messageType)
    // supports data view
    let finalSelectedDs
    if (this.checkIsDisableDataView()) {
      finalSelectedDs = currentSelectedDs
    } else {
      finalSelectedDs = messageWidgetUseDataSources.filter(messageWidgetUseDataSource => {
        const dataSource = currentSelectedDs.find(ds => {
          if ((!ds.dataViewId || ds.dataViewId === CONSTANTS.OUTPUT_DATA_VIEW_ID) && !this.props.config.useDataSources?.find(preDs => ds.mainDataSourceId === preDs.mainDataSourceId)) {
            // select ds from ds list
            return ds.mainDataSourceId === messageWidgetUseDataSource.mainDataSourceId
          } else {
            // select ds from data view check box
            return ds.dataSourceId === messageWidgetUseDataSource.dataSourceId
          }
        })
        if (dataSource) {
          return true
        } else {
          return false
        }
      })
    }

    let config = this.props.config.set('useDataSource', finalSelectedDs[0])
    // supports multiple trigger
    config = config.set('useDataSources', finalSelectedDs)
    this.props.onSettingChange({
      actionId: this.props.actionId,
      config: config
    })
  }

  handleRemoveLayerForTriggerLayer = () => {
    let config = this.props.config.set('useDataSource', null)
    // supports multiple trigger
    config = config.set('useDataSources', [])
    this.props.onSettingChange({
      actionId: this.props.actionId,
      config: config
    })
  }

  checkIsSupportMultipleTriggerDataSources = (widgetId: string): boolean => {
    const appConfig = getAppStore().getState()?.appStateInBuilder?.appConfig
    const widgetJson = appConfig?.widgets?.[widgetId]
    const messageWidgetUseDataSources = getDsByWidgetId(this.props.messageWidgetId, this.props.messageType)
    const widgetLabel = widgetJson?.manifest?.label
    if (widgetLabel === 'Map') {
      return true
    } else {
      if (messageWidgetUseDataSources.length > 1) {
        return this.props.messageType === MessageType.DataSourceFilterChange || this.props.messageType === MessageType.DataRecordsSelectionChange
      } else {
        return false
      }
    }
  }

  checkIsDisableDataView = (): boolean => {
    if (this.props.messageType === MessageType.DataRecordsSelectionChange) {
      return true
    } else {
      return false
    }
  }

  // only available for selection change message
  onGoToInitialMapExtentWhenSelectionClearedCheckboxChanged = (evt, checked: boolean) => {
    checked = !!checked
    const newConfig = this.props.config.set('goToInitialMapExtentWhenSelectionCleared', checked)
    this.props.onSettingChange({
      actionId: this.props.actionId,
      config: newConfig
    })
  }

  render () {
    //const triggerRootIds = this.getDsRootIdsByWidgetId(this.props.messageWidgetId)
    const triggerDsSelectorSourceData = getUseDataSourceInfoForZoomToAndPanToMessageActions(this.props.messageWidgetId, this.props.config.useDataSource, this.props.config.useDataSources, this.props.messageType)
    let useDataSources
    if (this.checkIsSupportMultipleTriggerDataSources(this.props.messageWidgetId) || triggerDsSelectorSourceData.useDataSources) {
      useDataSources = Immutable(triggerDsSelectorSourceData.useDataSources)
    } else {
      useDataSources = triggerDsSelectorSourceData.useDataSource ? Immutable([triggerDsSelectorSourceData.useDataSource]) : Immutable([])
    }

    // const isSelectionChangeMessage = this.props.messageType === MessageType.DataRecordsSelectionChange
    // const goToInitialMapExtentWhenSelectionCleared = this.props.config.goToInitialMapExtentWhenSelectionCleared || false

    return (
      <div css={this.getStyle(this.props.theme)}>
        {/* Trigger data */}
        <SettingSection title={this.props.intl.formatMessage({ id: 'mapAction_TriggerLayer', defaultMessage: defaultMessages.mapAction_TriggerLayer })}>
          <DataSourceSelector
            types={DSSelectorTypes}
            useDataSources={useDataSources}
            fromRootDsIds={triggerDsSelectorSourceData.fromRootDsIds}
            fromDsIds={triggerDsSelectorSourceData.fromDsIds}
            hideAddDataButton
            hideTypeDropdown
            mustUseDataSource
            onChange={this.handleTriggerLayerChange}
            widgetId={this.props.messageWidgetId}
            disableDataView={false}
            //hideDataView={this.checkIsDisableDataView()}
            hideDataView={((dataViewJson, mainDataSourceId) => {
              const messageWidgetUseDataSources = getDsByWidgetId(this.props.messageWidgetId, this.props.messageType)
              return !messageWidgetUseDataSources.filter(messageWidgetUseDataSource => {
                return messageWidgetUseDataSource.mainDataSourceId === mainDataSourceId
              }).find(messageWidgetUseDataSource => {
                let messageWidgetUseDataSourceDataViewId
                if (messageWidgetUseDataSource.dataViewId) {
                  messageWidgetUseDataSourceDataViewId = messageWidgetUseDataSource.dataViewId
                } else {
                  messageWidgetUseDataSourceDataViewId = DEFAULT_DATA_VIEW_ID
                }
                return messageWidgetUseDataSourceDataViewId === dataViewJson.id
              })
            })}
            isMultiple={this.checkIsSupportMultipleTriggerDataSources(this.props.messageWidgetId)}
            isMultipleDataView={true}
            hideCreateViewButton
            enableToSelectOutputDsFromSelf={true}
          // onSelect={this.handleTriggerLayerSelected}
          // onRemove={this.handleRemoveLayerForTriggerLayer}
          />
        </SettingSection>

        {/* {
          isSelectionChangeMessage &&
          <SettingSection>
            <Label className='d-flex align-items-center'>
              <Checkbox
                checked={goToInitialMapExtentWhenSelectionCleared}
                className="mr-2"
                onChange={this.onGoToInitialMapExtentWhenSelectionClearedCheckboxChanged}
              />
              {this.props.intl.formatMessage({ id: 'mapAction_ReturnToInitialMapExtent', defaultMessage: defaultMessages.mapAction_ReturnToInitialMapExtent })}
            </Label>
          </SettingSection>
        } */}
      </div>
    )
  }
}

export default withTheme(_PanToActionSetting)
