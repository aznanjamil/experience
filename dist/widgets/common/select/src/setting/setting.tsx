/** @jsx jsx */
import { React, jsx, css, type ImmutableObject } from 'jimu-core'
import { type IMConfig, type InteractiveTools, type SpatialSelection } from '../config'
import { type RootSettingProps, getUseDataSourcesByConfig } from './utils'
import SourceSection from './components/source-section'
import SpatialSection from './components/spatial-section'
import InteractiveToolSection from './components/interactive-tool-section'
import { getValidDataSourceItems } from '../utils'

const style = css`
`

export default function Setting (props: RootSettingProps): React.ReactElement {
  const {
    config,
    useMapWidgetIds,
    useDataSources
  } = props

  const onNewConfig = React.useCallback((newConfig: IMConfig) => {
    const useDataSources = getUseDataSourcesByConfig(newConfig)
    props.onSettingChange({
      id: props.id,
      config: newConfig,
      useDataSources
    })
  }, [props])

  const onInteractiveToolSectionUpdate = (newImInteractiveTools: ImmutableObject<InteractiveTools>) => {
    const newConfig = config.set('interactiveTools', newImInteractiveTools)
    onNewConfig(newConfig)
  }

  const onSpatialSelectionUpdate = (newImSpatialSelection: ImmutableObject<SpatialSelection>) => {
    const newConfig = config.set('spatialSelection', newImSpatialSelection)
    onNewConfig(newConfig)
  }

  const useMap = config.useMap
  // originalDataSourceItems maybe null
  const originalDataSourceItems = config?.dataAttributeInfo?.dataSourceItems
  const validDtaSourceItems = React.useMemo(() => {
    return getValidDataSourceItems(originalDataSourceItems, useDataSources)
  }, [originalDataSourceItems, useDataSources])
  const hasDataSourceItem = validDtaSourceItems?.length > 0
  const currMapWidgetId = (useMapWidgetIds && useMapWidgetIds.length > 0) ? useMapWidgetIds[0] : ''

  const showInteractiveToolSection = useMap && currMapWidgetId
  const showSpatialSection = (useMap && currMapWidgetId) || (!useMap && hasDataSourceItem)
  const showPlaceholder = (useMap && !currMapWidgetId) || (!useMap && !hasDataSourceItem)

  return (
    <div className='jimu-widget-setting widget-setting-select' css={style}>
      <SourceSection
        rootSettingProps={props}
        showPlaceholder={showPlaceholder}
        onConfigUpdate={onNewConfig}
      />

      {
        showInteractiveToolSection &&
        <InteractiveToolSection
          rootSettingProps={props}
          imInteractiveTools={config.interactiveTools}
          onInteractiveToolSectionUpdate={onInteractiveToolSectionUpdate}
        />
      }

      {
        showSpatialSection &&
        <SpatialSection
          rootSettingProps={props}
          imSpatialSelection={config.spatialSelection}
          onSpatialSelectionUpdate={onSpatialSelectionUpdate}
        />
      }
    </div>
  )
}