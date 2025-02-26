import { type AppCreationInfo, type AppConfig, type IMAppConfig } from 'jimu-core';
import { type IItemAdd, type ICreateItemResponse } from '@esri/arcgis-rest-portal';
import { type AppInfo, SearchType, type TransfeAppResponse, type TransferAppParams } from '../type';
import { type ArcGISIdentityManager } from '@esri/arcgis-rest-request';
export declare function isPortalApp(appInfo: AppInfo): boolean;
export declare function isAGOLApp(appInfo: AppInfo): boolean;
export declare function isLocalApp(appInfo: AppInfo): boolean;
export declare function getSession(appInfo: AppInfo): ArcGISIdentityManager;
export declare function getSessionBySearchType(searchType: SearchType): ArcGISIdentityManager;
export declare function getNewAppTitleWithIndex(title: string, isCopy?: boolean, type?: string): Promise<string>;
export declare function duplicateRelatedDataInApp(newAppId: any, originalAppInfo: AppInfo, isCreateNew?: boolean, isRemoveFaviconInConfig?: boolean): Promise<boolean>;
export declare function updateTypeKeywords(typeKeywords: string[], appConfigVersion: string): string[];
export declare function toCreateAppByDefaultTemplate(appInfo: AppCreationInfo, folderId?: string): Promise<ICreateItemResponse>;
export declare function updateItemDataInApp(newAppId: any): Promise<boolean>;
export declare function duplicateResourcesInApp(newAppId: any, originalAppInfo: AppInfo, isCreateNew?: boolean, updateAppConfigVersion?: boolean, isRemoveFaviconInConfig?: boolean): Promise<any>;
export declare function duplicateResourcesForCreateNew(newAppId: any, originalAppInfo: AppInfo): Promise<boolean>;
export declare function duplicateResourcesForDuplicate(newAppId: any, originalAppInfo: AppInfo, updateAppConfigVersion?: boolean, isRemoveFaviconInConfig?: boolean): Promise<boolean>;
export declare function duplicatePublishedAppsConfig(newAppId: any, originalAppInfo: AppInfo): Promise<boolean>;
export declare function updateThumbnail(newAppId: any, originalAppInfo: AppInfo, thumbnail: any): Promise<boolean>;
export declare function uploadResource(newAppId: any, originalAppInfo: AppInfo, resourceInfo: any, updateAppConfigVersion?: boolean, isRemoveFaviconInConfig?: boolean): Promise<boolean>;
export declare function initAppConfigPortalUrl(appConfig: any, originalAppInfo: AppInfo): any;
export declare function isUpdateDataSourcesPortalUrl(dataSourcesPortalUrl: string): boolean;
export declare function crateAppByApp(appInfo: AppInfo, isCreateTemplate?: boolean, folderId?: string): Promise<string>;
export declare function initDuplicatedTypeKeywords(typeKeywords?: string[]): string[];
export declare function getMaxIndex(appList: any[], name: string): number;
export declare function getAppName(name: string, appList: any[], index?: number, isCopy?: boolean): string;
export declare function isAppNameRepeat(name: string, appList: any[]): boolean;
export declare function createAppCallBack(defaultAppConfigs: AppConfig, item: ICreateItemResponse, webmapId?: string, websceneId?: string): Promise<AppInfo>;
export declare function createAppForDuplicate(appInfo: AppCreationInfo, folderId?: string): Promise<ICreateItemResponse>;
export declare function getPreviewUrl(appInfo: AppInfo): string;
export declare function getAppConfigInResources(appId: string): Promise<AppConfig>;
export declare function getCreateAppParamsByAppId(templateId: string): Promise<AppInfo>;
export declare function getConfigFromPortalItemResource(appID: string): Promise<AppConfig>;
export declare function getResourceOrigin(originalAppInfo: AppInfo): string;
export declare function createApp(appInfo: IItemAdd, folderId?: string): Promise<ICreateItemResponse>;
export declare function optimizeWidgetsConfig(appConfig: AppConfig, appInfo: AppInfo): AppConfig;
export declare function optimizeTextWidgetConfig(config: {
    text: string;
    placeholder?: string;
}, appInfo: AppInfo): {
    text: string;
    placeholder?: string;
};
/**
 * Update the history labels in draft app config, then return the draft app config
 * @param draftAppConfig
 * @param publishedAppConfig
 */
export declare function updateHistoryLabels(draftAppConfig: AppConfig, publishedAppConfig: AppConfig): AppConfig;
export declare function updateThumbnailForSaveAsApp(originAppInfo: AppInfo, newAppInfo: AppInfo, thumbnailFiles?: any): Promise<any>;
/**
 * Deep clone. But only clone two levels.
 * And param must be Object.
 */
export declare function cloneObj(obj: any): any;
export declare function replaceExbVersionInAppConfig(appConfig: IMAppConfig): IMAppConfig;
export declare function initAppConfigOfNewApp(appConfig: AppConfig): AppConfig;
export declare const updateTypeKeywordsInAppInfoForSaveAs: (appInfo: AppInfo) => AppInfo;
export declare function transferAppDirectly(appInfo: AppInfo): Promise<TransfeAppResponse>;
export declare function transferAppCopy(params: TransferAppParams): Promise<TransfeAppResponse>;
