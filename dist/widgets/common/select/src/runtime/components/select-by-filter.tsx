/** @jsx jsx */
import { React, jsx, css, hooks, type ImmutableArray, type DataRecordSet } from 'jimu-core'
import { type JimuMapView } from 'jimu-arcgis'
import { defaultMessages as jimuUIMessages, Button, Label, Popper, DataActionList, DataActionListStyle } from 'jimu-ui'
import DataSourceListItem from './data-source-list-item'
import defaultMessages from '../translations/default'
import { type DataSourceItem } from '../../config'
import {
  type DataSourceItemRuntimeInfoMap, type UpdateDataSourceItemRuntimeInfoForUid, type WidgetDomRef, getRuntimeInfos, getCheckedReadyToDisplayRuntimeInfos
} from '../utils'
import { SelectOptionOutlined } from 'jimu-icons/outlined/editor/select-option'

export interface SelectByFilterProps {
  isRTL: boolean
  widgetId: string
  widgetDomRef: WidgetDomRef
  jimuMapView: JimuMapView
  enableDataAction: boolean
  // generatedImDataSourceItems + configDataSourceItems
  allImDataSourceItems: ImmutableArray<DataSourceItem>
  generatedImDataSourceItems: ImmutableArray<DataSourceItem>
  configDataSourceItems: ImmutableArray<DataSourceItem>
  dataSourceItemRuntimeInfoMap: DataSourceItemRuntimeInfoMap
  updateDataSourceItemRuntimeInfoForUid: UpdateDataSourceItemRuntimeInfoForUid
}

interface DataRecordSetCache {
  [uid: string]: DataRecordSet
}

export default function SelectByFilter (props: SelectByFilterProps): React.ReactElement {
  const {
    isRTL,
    widgetId,
    widgetDomRef,
    jimuMapView,
    enableDataAction,
    allImDataSourceItems,
    generatedImDataSourceItems,
    configDataSourceItems,
    dataSourceItemRuntimeInfoMap,
    updateDataSourceItemRuntimeInfoForUid
  } = props

  const translate = hooks.useTranslation(jimuUIMessages, defaultMessages)

  const [isPoperVisible, setPoperVisible] = React.useState<boolean>(false)
  const [dataRecordSetCache, setDataRecordSetCache] = React.useState<DataRecordSetCache>({})
  const layersBtnRef = React.useRef(null)

  const allRuntimeInfos = React.useMemo(() => {
    return getRuntimeInfos(allImDataSourceItems, dataSourceItemRuntimeInfoMap)
  }, [dataSourceItemRuntimeInfoMap, allImDataSourceItems])

  const onLayersBtnClicked = React.useCallback(() => {
    setPoperVisible((visible) => !visible)
  }, [setPoperVisible])

  const onPoperToggle = React.useCallback(() => {
    setPoperVisible(false)
  }, [setPoperVisible])

  const onSelectAllLayersBtnClicked = React.useCallback(() => {
    setPoperVisible(false)

    allRuntimeInfos.forEach(runtimeInfo => {
      if (!runtimeInfo.checked) {
        updateDataSourceItemRuntimeInfoForUid(runtimeInfo.uid, {
          checked: true
        })
      }
    })
  }, [allRuntimeInfos, updateDataSourceItemRuntimeInfoForUid])

  const onUnselectAllLayersBtnClicked = React.useCallback(() => {
    setPoperVisible(false)

    allRuntimeInfos.forEach(runtimeInfo => {
      if (runtimeInfo.checked) {
        updateDataSourceItemRuntimeInfoForUid(runtimeInfo.uid, {
          checked: false
        })
      }
    })
  }, [allRuntimeInfos, updateDataSourceItemRuntimeInfoForUid])

  const onToggleAllLayersBtnClicked = React.useCallback(() => {
    setPoperVisible(false)

    allRuntimeInfos.forEach(runtimeInfo => {
      updateDataSourceItemRuntimeInfoForUid(runtimeInfo.uid, {
        checked: !runtimeInfo.checked
      })
    })
  }, [allRuntimeInfos, updateDataSourceItemRuntimeInfoForUid])

  // data source selection changing leads to dataRecordSet changing
  const onDataRecordSetChange = React.useCallback((uid: string, dataRecordSet: DataRecordSet) => {
    setDataRecordSetCache(currRecordSetCache => {
      const newRecordSetCache: DataRecordSetCache = Object.assign({}, currRecordSetCache, {
        [uid]: dataRecordSet
      })

      return newRecordSetCache
    })
  }, [setDataRecordSetCache])

  const getImDataSourceItemsWithRuntimeInfo = React.useCallback((inputImDataSourceItems: ImmutableArray<DataSourceItem>) => {
    const filterResult = inputImDataSourceItems.filter(imDataSourceItem => {
      const uid = imDataSourceItem.uid
      const itemRuntimeInfo = dataSourceItemRuntimeInfoMap[uid]
      return !!itemRuntimeInfo
    })

    return filterResult
  }, [dataSourceItemRuntimeInfoMap])

  const generatedImDataSourceItemsWithRuntimeInfo = React.useMemo(() => {
    return getImDataSourceItemsWithRuntimeInfo(generatedImDataSourceItems)
  }, [generatedImDataSourceItems, getImDataSourceItemsWithRuntimeInfo])

  const configDataSourceItemsWithRuntimeInfo = React.useMemo(() => {
    return getImDataSourceItemsWithRuntimeInfo(configDataSourceItems)
  }, [configDataSourceItems, getImDataSourceItemsWithRuntimeInfo])

  const dataRecordSets = React.useMemo(() => {
    const checkedRedadyToDisplayRuntimeInfos = getCheckedReadyToDisplayRuntimeInfos(allImDataSourceItems, dataSourceItemRuntimeInfoMap)
    const checkedUidMap: { [uid: string]: boolean } = {}
    checkedRedadyToDisplayRuntimeInfos.forEach(runtimeInfo => {
      const uid = runtimeInfo?.uid

      if (uid) {
        checkedUidMap[uid] = true
      }
    })

    const newDataRecordSets: DataRecordSet[] = []

    Object.keys(dataRecordSetCache).forEach((uid) => {
      if (checkedUidMap[uid]) {
        const dataRecordSet = dataRecordSetCache[uid]

        if (dataRecordSet) {
          newDataRecordSets.push(dataRecordSet)
        }
      }
    })

    return newDataRecordSets
  }, [allImDataSourceItems, dataSourceItemRuntimeInfoMap, dataRecordSetCache])

  const style = React.useMemo(() => {
    return css`
      .layers-header-tip {
        font-size: 0.875rem;
        color: var(--ref-palette-neutral-1100);
        font-weight: 600;
      }
    `
  }, [])

  return (
    <div className='data-attribute-select p-4' css={style}>
      <div className='w-100 d-flex align-items-center'>
        <Button
          className='pl-0 pr-2'
          type='tertiary'
          size='sm'
          icon
          ref={layersBtnRef}
          onClick={onLayersBtnClicked}
        >
          <SelectOptionOutlined width={16} height={16} />
        </Button>

        <Label className='layers-header-tip mb-0 w-100'> { translate('layers') } </Label>

        {
          enableDataAction &&
          <DataActionList
            widgetId={widgetId}
            dataSets={dataRecordSets}
            disableDataSourceLevelActions={true}
            buttonType='tertiary'
            listStyle={DataActionListStyle.Dropdown}
            hideGroupTitle={true}
            alwaysShowBatchIcon={true}
          />
          }
      </div>

      <div className='ds-list-items'>
        {generatedImDataSourceItemsWithRuntimeInfo.map(imDataSourceItem => {
          const uid = imDataSourceItem.uid
          const itemRuntimeInfo = dataSourceItemRuntimeInfoMap[uid]

          return (
            <DataSourceListItem
              key={uid}
              isRTL={isRTL}
              widgetId={widgetId}
              widgetDomRef={widgetDomRef}
              jimuMapView={jimuMapView}
              enableDataAction={enableDataAction}
              imDataSourceItem={imDataSourceItem}
              itemRuntimeInfo={itemRuntimeInfo}
              updateDataSourceItemRuntimeInfoForUid={updateDataSourceItemRuntimeInfoForUid}
              onDataRecordSetChange={onDataRecordSetChange}
            />
          )
        })}
      </div>

      <div className='ds-list-items'>
        {configDataSourceItemsWithRuntimeInfo.map(imDataSourceItem => {
          const uid = imDataSourceItem.uid
          const itemRuntimeInfo = dataSourceItemRuntimeInfoMap[uid]

          return (
            <DataSourceListItem
              key={uid}
              isRTL={isRTL}
              widgetId={widgetId}
              widgetDomRef={widgetDomRef}
              jimuMapView={jimuMapView}
              enableDataAction={enableDataAction}
              imDataSourceItem={imDataSourceItem}
              itemRuntimeInfo={itemRuntimeInfo}
              updateDataSourceItemRuntimeInfoForUid={updateDataSourceItemRuntimeInfoForUid}
              onDataRecordSetChange={onDataRecordSetChange}
            />
          )
        })}
      </div>

      <Popper
        reference={layersBtnRef}
        floating={false}
        open={isPoperVisible}
        showArrow={false}
        toggle={onPoperToggle}
      >
        <div className='d-flex flex-column'>
          <Button
            type='tertiary'
            className='text-left'
            onClick={onSelectAllLayersBtnClicked}
          >
            { translate('allSelectable') }
          </Button>
          <Button
            type='tertiary'
            className='text-left'
            onClick={onUnselectAllLayersBtnClicked}
          >
            { translate('noneSelectable') }
           </Button>
          <Button
            type='tertiary'
            className='text-left'
            onClick={onToggleAllLayersBtnClicked}
          >
            { translate('toggleAll') }
          </Button>
        </div>
      </Popper>
    </div>
  )
}
