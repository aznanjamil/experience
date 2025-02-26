import { type FeatureLayerDataSource } from 'jimu-core';
import { JimuFeatureLayerSceneLayerViewCommon, type JimuFeatureLayerSceneLayerViewCommonOptions } from './jimu-feature-layer-scene-layer-view-common';
/**
 * `JimuFeatureLayerViewOptions` provides information about the `JimuFeatureLayerView`.
 */
export interface JimuFeatureLayerViewOptions extends JimuFeatureLayerSceneLayerViewCommonOptions {
    /**
     * The `layer` is the [ArcGIS Maps SDK for JavaScript `FeatureLayer`](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html).
     */
    layer: __esri.FeatureLayer;
}
/**
 * The JimuFeatureLayerView extends from the JimuLayerView.
 */
export declare class JimuFeatureLayerView extends JimuFeatureLayerSceneLayerViewCommon {
    /**
     * The `layer` is the [ArcGIS Maps SDK for JavaScript `FeatureLayer`](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html).
     */
    layer: __esri.FeatureLayer;
    /**
     * The `view` is the [ArcGIS Maps SDK for JavaScript `FeatureLayerView`](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-layers-FeatureLayerView.html).
     * If the layer is from mapservice, view = null
     */
    view: __esri.FeatureLayerView;
    getLayerDataSource(): FeatureLayerDataSource;
    createLayerDataSource(): Promise<FeatureLayerDataSource>;
}
