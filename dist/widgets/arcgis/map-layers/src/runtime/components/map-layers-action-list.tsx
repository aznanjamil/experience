import { React } from 'jimu-core'
import { DataActionList, DropdownItem } from 'jimu-ui'
import type Action from '../actions/action'
import { type ReactNode } from 'react'
import { type JimuMapView } from 'jimu-arcgis'
import { styled } from 'jimu-theme'

const Wrapper = styled.div`
  min-width: 120px;
  min-height: 20px;
`

interface ActionListProps {
  widgetId: string
  jimuMapView: JimuMapView
  actionObjects: Action[]
  listItem: any
  children?: ReactNode
  onActionListItemClick: () => void
  shouldHideEmptyList?: boolean
  enableDataAction?: boolean
}

interface ActionListItemProps {
  /**
   * Icon could be an Esri icon class name or a custom Icon component
   */
  icon: string | React.ReactNode
  title: string
  onClick?: () => void
}

function ActionListItem (props: ActionListItemProps) {
  const { icon, title, onClick } = props
  return (
    <DropdownItem onClick={onClick}>
      <div className='d-flex align-items-center'>
        {typeof icon === 'string' ? <div className={`jimu-icon-auto-color ${icon}`} /> : icon}
        <span className='ml-2'>{title}</span>
      </div>
    </DropdownItem>
  )
}

export default function MapLayersActionList (props: ActionListProps) {
  const { widgetId, actionObjects, listItem, onActionListItemClick, jimuMapView, shouldHideEmptyList, enableDataAction = true } = props
  const [dataActionList, setDataActionList] = React.useState(null)
  const listRef = React.useRef(null)
  const FIRST_CHILD_CLASS = 'first-maplayers-action'

  const createListItem = (actionObject: Action, index: any) => {
    // The className is an Esri icon className
    const icon = actionObject.className
    const title = actionObject.title
    const onExecute = () => {
      actionObject.execute(listItem)
      onActionListItemClick()
    }
    return <ActionListItem key={index} icon={icon} title={title} onClick={() => { onExecute() }}></ActionListItem>
  }

  React.useEffect(() => {
    async function getDataActionList () {
      // The map data source might come from a data-source object or from a map widget data-source id
      let dataSets = []
      try {
        const jimuLayerView = jimuMapView.getJimuLayerViewByAPILayer(listItem.layer)
        const featureDS = jimuLayerView ? await jimuLayerView.getOrCreateLayerDataSource() : null
        // Let the data-action-list handle the empty case
        dataSets = featureDS ? [{ dataSource: featureDS, records: [], name: featureDS?.getLabel() }] : []
      } catch (e) {
        console.error('DataSource create error:', e)
      } finally {
        const listStartDOM = listRef.current.querySelector(`.${FIRST_CHILD_CLASS}`)
        // If the DataActionList is reused, the actionElement will flicker for the first time
        const dataActionList = (
          <div className="data-action-list-wrapper">
            <DataActionList key={Math.random()} widgetId={widgetId} dataSets={dataSets} hideGroupTitle shouldHideEmptyList={shouldHideEmptyList} onActionListItemClick={onActionListItemClick} actionPanelRefDOM={listStartDOM as HTMLElement}></DataActionList>
          </div>
        )
        setDataActionList(dataActionList)
      }
    }

    enableDataAction && getDataActionList()
  }, [enableDataAction, listItem.layer, onActionListItemClick, shouldHideEmptyList, widgetId, jimuMapView])

  return (
    <Wrapper ref={listRef}>
      <div className={FIRST_CHILD_CLASS} style={{ height: 0, width: 0 }}/>
      {
        actionObjects.map((actionObject, index) => {
          return createListItem(actionObject, index)
        })
      }
      {enableDataAction && dataActionList}
    </Wrapper>
  )
}
