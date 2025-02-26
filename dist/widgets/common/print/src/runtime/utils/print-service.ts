import { type UseUtility, Immutable, type ImmutableArray, getAppStore, AllDataSourceTypes } from 'jimu-core'
import { loadArcGISJSAPIModules, type JimuMapView } from 'jimu-arcgis'
import { type MapView, type PrintTemplateProperties } from '../../config'
import { getUrlOfUseUtility, reportUtilityState } from '../../utils/utils'
import { getSessionByUtility } from '../../utils/service-util'
import { removeReportLayers } from './utils'
interface PrintOption {
  useUtility?: UseUtility
  mapView: MapView
  printTemplateProperties: PrintTemplateProperties
  isSupportReport?: boolean
  widgetId?: string
  useMapWidgetIds?: ImmutableArray<string>
  jimuMapView?: JimuMapView
  reportOptions?: any
  toggleUtilityErrorRemind: (isShow?: boolean) => void
}

export const print = async (option: PrintOption) => {
  const { printTemplateProperties, useUtility, isSupportReport, widgetId, useMapWidgetIds, jimuMapView, reportOptions, toggleUtilityErrorRemind } = option
  const preTimeExtentOfMapView = { timeExtent: option.mapView?.timeExtent }.timeExtent
  const mapView = initMapViewWithTimeExtent(option.mapView, jimuMapView)
  const session = await getSessionByUtility(Immutable(useUtility))
  return getUrlOfUseUtility(useUtility).then(printServiceUrl => {
    return loadArcGISJSAPIModules(['esri/rest/support/PrintParameters', 'esri/rest/support/PrintTemplate', 'esri/rest/print', 'esri/geometry/SpatialReference']).then(modules => {
      const [PrintParameters, PrintTemplate, print, SpatialReference] = modules
      const template = new PrintTemplate(printTemplateProperties)
      const newMapView = initHasZOfGrpahicInMap(mapView)
      const printParameter = {
        view: newMapView,
        template: template
      } as any
      if (printTemplateProperties.wkid !== mapView?.spatialReference?.wkid) {
        printParameter.outSpatialReference = new SpatialReference({ wkid: printTemplateProperties.wkid })
      }
      const params = new PrintParameters(printParameter)
      const queryOption = { timeout: 120000, token: session?.token }
      session?.token && (queryOption.token = session.token)

      return print.execute(printServiceUrl, params, queryOption).then((printResult) => {
        reportUtilityState(useUtility?.utilityId, toggleUtilityErrorRemind)
        isSupportReport && removeReportLayers(jimuMapView, reportOptions, widgetId, useMapWidgetIds)
        resetTimeExtentOfMapView(option.mapView, preTimeExtentOfMapView)
        return Promise.resolve(printResult)
      }, err => {
        isSupportReport && removeReportLayers(jimuMapView, reportOptions, widgetId, useMapWidgetIds)
        reportUtilityState(useUtility?.utilityId, toggleUtilityErrorRemind, err)
        resetTimeExtentOfMapView(option.mapView, preTimeExtentOfMapView)
        return Promise.reject(err)
      }).catch((printError) => {
        isSupportReport && removeReportLayers(jimuMapView, reportOptions, widgetId, useMapWidgetIds)
        reportUtilityState(useUtility?.utilityId, toggleUtilityErrorRemind, printError)
        resetTimeExtentOfMapView(option.mapView, preTimeExtentOfMapView)
        return Promise.reject(printError)
      })
    })
  })
}

function resetTimeExtentOfMapView (mapView: MapView, preTimeExtentOFMapView) {
  //Map does not have a default time filter.
  mapView.timeExtent = preTimeExtentOFMapView
}

/**
 * Timeline widgets can connect to both maps and layers, but the Print Service and Print API only supports mapView's timeExtent and does not support layer's timeExtent.
 * Per discussion, we can currently add support for timeline connections to maps. And for timelines connecting to layers,
 * we can leave it as a known limitation until the server supports it (maybe in 2-3 releases).
 *
 * So here is a temporary solution for the time filter does not take effect problem.
 * We need to remove this part of the special processing after the Print Service and Print API support layer timeExtent.
 * https://devtopia.esri.com/Beijing-R-D-Center/ExperienceBuilder-Web-Extensions/issues/16545#issuecomment-4787104
*/
function initMapViewWithTimeExtent (mapView: MapView, jimuMapView: JimuMapView): MapView {
  const mapDsId = jimuMapView?.dataSourceId
  if (!mapView || !mapDsId) return mapView

  let allTimeLineWidgetUseWebMap = true

  const widgets = getAppStore().getState().appConfig.widgets
  Object.keys(widgets).forEach(widgetId => {
    const widgetJson = widgets[widgetId]
    if (widgetJson.uri === 'widgets/common/timeline/') {
      const useDataSources = widgetJson?.useDataSources || []
      const useDsInCurrentMap = useDataSources.filter(useDs => { return useDs.rootDataSourceId === mapDsId || useDs.mainDataSourceId === mapDsId })

      if (useDsInCurrentMap?.length > 0) {
        if (widgetJson.config?.dataSourceType !== AllDataSourceTypes.Map && widgetJson.config?.dataSourceType !== AllDataSourceTypes.WebMap) {
          allTimeLineWidgetUseWebMap = false
        }
      }
    }
  })

  if (!allTimeLineWidgetUseWebMap) {
    return mapView
  } else {
    const timeExtentOfLayers = (mapView.layerViews as any)?.items?.[0]?.timeExtent
    if (timeExtentOfLayers) {
      mapView.timeExtent = timeExtentOfLayers
    }
    return mapView
  }
}

/**
 * Set the 'hasZ' of the layer and graphic generated by the Draw widget to 'false'
*/
function initHasZOfGrpahicInMap (mapView) {
  mapView.layerViews.items = mapView?.layerViews?.items?.map(views => {
    if (views?.layer?.id?.includes('jimu-draw-layer-') || views?.layer?.id?.includes('bookmark-layer-')) {
      views.graphicsView.graphics.items = views?.graphicsView?.graphics?.items?.map(graphic => {
        if (graphic?.attributes?.jimuDrawId) {
          graphic.geometry.hasZ = false
          return graphic
        } else {
          return graphic
        }
      })
      return views
    } else {
      return views
    }
  })
  return mapView
}

export async function getPrintTemplateInfo (useUtility?: UseUtility) {
  return getUrlOfUseUtility(useUtility).then(printServiceUrl => {

  })
}
