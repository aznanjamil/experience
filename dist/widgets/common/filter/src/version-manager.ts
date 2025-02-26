import { BaseVersionManager, DataSourceManager } from 'jimu-core'
import { FilterArrangeType, FilterTriggerType } from './config'
import { updateSQLExpressionByVersion } from 'jimu-ui/basic/sql-expression-runtime'

const getAllDs = async function (filterItems): Promise<any> {
  const promises = []
  const dsManager = DataSourceManager.getInstance()
  filterItems && filterItems.forEach(item => {
    if (item.sqlExprObj) {
      promises.push(
        dsManager.createDataSourceByUseDataSource(Object.assign({}, item.dataSource, { mainDataSourceId: item.dataSource.dataSourceId }))
      )
    }
  })
  return Promise.all(promises)
}

class VersionManager extends BaseVersionManager {
  versions = [{
    version: '1.1.0',
    description: '',
    upgrader: async (oldConfig) => {
      return await getAllDs(oldConfig.filterItems).then((dsList) => {
        let newConfig = oldConfig
        newConfig = newConfig.set('arrangeType', FilterArrangeType.Block)
        newConfig = newConfig.set('triggerType', FilterTriggerType.Toggle)
        newConfig = newConfig.set('wrap', false)
        newConfig = newConfig.set('omitInternalStyle', false)

        const newFItems = dsList.map((ds, index) => {
          const fItem = newConfig.filterItems[index]
          return Object.assign({}, fItem, {
            sqlExprObj: fItem.sqlExprObj ? updateSQLExpressionByVersion(fItem.sqlExprObj, '1.1.0', ds) : null,
            icon: fItem.icon.setIn(['properties', 'color'], null),
            useDataSource: Object.assign({}, fItem.dataSource, { mainDataSourceId: fItem.dataSource.dataSourceId })
          })
        })
        newConfig = newConfig.set('filterItems', newFItems)

        return newConfig
      })
    }
  }, {
    version: '1.14.0',
    description: '',
    upgrader: (oldConfig) => {
      const newFItems = oldConfig.filterItems.map(fItem => {
        fItem = fItem
          .set('isGroup', false)
          .set('useDataSources', [fItem.useDataSource])
          .without('useDataSource')
        return fItem
      })
      const newConfig = oldConfig.set('filterItems', newFItems)
      return newConfig
    }
  }]
}

export const versionManager = new VersionManager()
