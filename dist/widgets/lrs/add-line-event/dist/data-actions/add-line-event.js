System.register(["jimu-core","widgets/shared-code/lrs"],(function(e,t){var n={},r={};return{setters:[function(e){n.AbstractDataAction=e.AbstractDataAction,n.DataLevel=e.DataLevel,n.DataSourceStatus=e.DataSourceStatus,n.DataSourceTypes=e.DataSourceTypes,n.MutableStoreManager=e.MutableStoreManager,n.getAppStore=e.getAppStore,n.loadArcGISJSAPIModules=e.loadArcGISJSAPIModules},function(e){r.QueryRouteMeasures=e.QueryRouteMeasures,r.getDateWithTZOffset=e.getDateWithTZOffset,r.getRouteFromEndMeasures=e.getRouteFromEndMeasures,r.isDefined=e.isDefined,r.queryRouteIdOrName=e.queryRouteIdOrName}],execute:function(){e((()=>{"use strict";var e={79244:e=>{e.exports=n},47626:e=>{e.exports=r}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,o),i.exports}o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{o.r(i),o.d(i,{default:()=>q});const e="object"==typeof global&&global&&global.Object===Object&&global;var t="object"==typeof self&&self&&self.Object===Object&&self;const n=e||t||Function("return this")();var r=/\s/;const a=function(e){for(var t=e.length;t--&&r.test(e.charAt(t)););return t};var s=/^\s+/;const u=function(e){return e?e.slice(0,a(e)+1).replace(s,""):e};const l=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)};const d=n.Symbol;var c=Object.prototype,f=c.hasOwnProperty,g=c.toString,m=d?d.toStringTag:void 0;const v=function(e){var t=f.call(e,m),n=e[m];try{e[m]=void 0;var r=!0}catch(e){}var o=g.call(e);return r&&(t?e[m]=n:delete e[m]),o};var D=Object.prototype.toString;const y=function(e){return D.call(e)};var S=d?d.toStringTag:void 0;const h=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":S&&S in Object(e)?v(e):y(e)};const p=function(e){return null!=e&&"object"==typeof e};const b=function(e){return"symbol"==typeof e||p(e)&&"[object Symbol]"==h(e)};var N=/^[-+]0x[0-9a-f]+$/i,O=/^0b[01]+$/i,M=/^0o[0-7]+$/i,I=parseInt;const R=function(e){if("number"==typeof e)return e;if(b(e))return NaN;if(l(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=l(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=u(e);var n=O.test(e);return n||M.test(e)?I(e.slice(2),n?2:8):N.test(e)?NaN:+e};var j=1/0;const P=function(e){return e?(e=R(e))===j||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};const T=function(e){var t=P(e),n=t%1;return t==t?n?t-n:t:0};const F=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o};const A=Array.isArray;var w=d?d.prototype:void 0,L=w?w.toString:void 0;const k=function e(t){if("string"==typeof t)return t;if(A(t))return F(t,e)+"";if(b(t))return L?L.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n};const x=function(e){return null==e?"":k(e)};var J=n.isFinite,E=Math.min;const G=function(e){var t=Math[e];return function(e,n){if(e=R(e),(n=null==n?0:E(T(n),292))&&J(e)){var r=(x(e)+"e").split("e"),o=t(r[0]+"e"+(+r[1]+n));return+((r=(x(o)+"e").split("e"))[0]+"e"+(+r[1]-n))}return t(e)}}("round");var W=o(79244),Z=o(47626),C=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function s(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((r=r.apply(e,t||[])).next())}))};class q extends W.AbstractDataAction{isSupported(e,t){return C(this,void 0,void 0,(function*(){var n;if(e.length>1)return!1;const r=e[0],o=r.records[0];if(!(0,Z.isDefined)(o))return!1;const i=o.getData(),a=JSON.parse(JSON.stringify(i)),{dataSource:s,records:u}=r,l=s.type===W.DataSourceTypes.FeatureLayer||s.type===W.DataSourceTypes.SceneLayer,d=s.isDataSourceSet,c=t!==W.DataLevel.Records,f=r.dataSource,g=(null==f?void 0:f.supportSpatialInfo)&&(null==f?void 0:f.supportSpatialInfo()),m=t===W.DataLevel.Records&&0===(null==u?void 0:u.length),v=!s.isInAppConfig()&&!l;if(d||c||m||v||!g)return!1;let D=s;if((0,Z.isDefined)(D.getLayerDefinition())||(D=s.getOriginDataSources()[0]),!(0,Z.isDefined)(D))return!1;const y=Q(),S=null===(n=null==y?void 0:y.widgets)||void 0===n?void 0:n[this.widgetId];let h,p;if(S.config.lrsLayers.forEach((e=>{e.id===D.id&&(h=e.networkInfo)})),!h)return!1;if(!(0,Z.isDefined)(h.eventLayers)||0===h.eventLayers.length)return!1;const b=h.eventLayers;if(S.config.lrsLayers.forEach((e=>{b.forEach((t=>{String(e.originName)===t&&(p=e.eventInfo)}))})),!p)return!1;const N=Object.keys(a).find((e=>e===h.routeIdFieldSchema.name)),O=Object.keys(a).find((e=>e===h.fromDateFieldSchema.name)),M=Object.keys(a).find((e=>e===h.toDateFieldSchema.name)),I=Object.keys(a).find((e=>{var t;return e===(null===(t=h.lineIdFieldSchema)||void 0===t?void 0:t.name)}));if(!(0,Z.isDefined)(N))return!1;if(r.records.length>2)return!1;let R=null,j=!1;if(yield(0,W.loadArcGISJSAPIModules)(["esri/geometry/Polyline"]).then((e=>{[R]=e})).then((()=>{const e=o.getGeometry();0===new R(e).paths.length&&(j=!0)})),j)return!1;let P=!1;if(s.id.includes("output_line")&&(P=!0),P&&1!==r.records.length)return!1;if(!s||s.getStatus()===W.DataSourceStatus.NotReady)return!1;if(!P&&2===r.records.length&&!(0,Z.isDefined)(I))return!1;if(!P&&2===r.records.length){const e=r.records[0],t=r.records[1],n=e.getData(),o=t.getData(),i=JSON.parse(JSON.stringify(n)),a=JSON.parse(JSON.stringify(o));if(String(i[I])!==String(a[I]))return!1;if(String(i[N])===String(a[N])&&Number(i[O])!==Number(a[O])&&Number(i[M])!==Number(a[M]))return!1}return!0}))}onExecute(e,t){return C(this,void 0,void 0,(function*(){var t;const n=e[0],{records:r,dataSource:o}=n,i=Q(),a=null===(t=null==i?void 0:i.widgets)||void 0===t?void 0:t[this.widgetId],s=a.config.hideMeasures;let u,l=o;(0,Z.isDefined)(l.getLayerDefinition())||(l=o.getOriginDataSources()[0]),a.config.lrsLayers.forEach((e=>{e.id===l.id&&(u=e.networkInfo)}));const d=r[0],c=d.getData();let f=JSON.parse(JSON.stringify(c));const g=Object.keys(f).find((e=>{var t;return e===(null===(t=u.lineOrderFieldSchema)||void 0===t?void 0:t.name)}));let m=null,v=!1;n.records.length>1&&(m=r[1],v=!0);let D=null;if((0,Z.isDefined)(m)){const e=m.getData();D=JSON.parse(JSON.stringify(e));const t=f[g],n=D[g];if((0,Z.isDefined)(t)&&(0,Z.isDefined)(n)&&Number(t)>Number(n)){const e=f;f=D,D=e}}const y={routeId:"",routeName:"",fromMeasure:NaN,toMeasure:NaN,fromDate:void 0,toDate:void 0,selectedMeasure:NaN,selectedFromDate:void 0,selectedToDate:void 0},S=Object.keys(f).find((e=>e===u.routeIdFieldSchema.name)),h=Object.keys(f).find((e=>{var t;return e===(null===(t=u.routeNameFieldSchema)||void 0===t?void 0:t.name)})),p=Object.keys(f).find((e=>e===u.fromDateFieldSchema.name)),b=Object.keys(f).find((e=>e===u.toDateFieldSchema.name)),N=Object.keys(f).find((e=>{var t;return e===(null===(t=u.lineIdFieldSchema)||void 0===t?void 0:t.name)})),O=Object.keys(f).find((e=>{var t;return e===(null===(t=u.lineNameFieldSchema)||void 0===t?void 0:t.name)})),M=(0,Z.isDefined)(f[p])?(0,Z.getDateWithTZOffset)(f[p],l):null,I=(0,Z.isDefined)(D)&&(0,Z.isDefined)(D[p])?(0,Z.getDateWithTZOffset)(D[p],l):null,R=(0,Z.isDefined)(f[b])?(0,Z.getDateWithTZOffset)(f[b],l):null,j=(0,Z.isDefined)(D)&&(0,Z.isDefined)(D[b])?(0,Z.getDateWithTZOffset)(D[b],l):null;y.fromDate=M,y.toRouteFromDate=v?I:M,y.selectedFromDate=M,y.toDate=R,y.toRouteToDate=v?j:R,y.selectedToDate=R,y.routeId=(0,Z.isDefined)(f[S])?String(f[S]):null,y.toRouteId=v?(0,Z.isDefined)(D[S])?String(D[S]):null:(0,Z.isDefined)(f[S])?String(f[S]):null,y.routeName=(0,Z.isDefined)(f[h])?String(f[h]):null,y.toRouteName=v?(0,Z.isDefined)(D[h])?String(D[h]):null:(0,Z.isDefined)(f[h])?String(f[h]):null,y.lineId=(0,Z.isDefined)(f[N])?String(f[N]):null,y.toLineId=(0,Z.isDefined)(f[N])?String(f[N]):null,y.routeLineOrder=(0,Z.isDefined)(f[g])?Number(f[g]):null,y.toRouteLineOrder=v?(0,Z.isDefined)(D[g])?Number(D[g]):null:(0,Z.isDefined)(f[g])?Number(f[g]):null,y.lineName=(0,Z.isDefined)(f[O])?String(f[O]):null,y.toLineName=(0,Z.isDefined)(f[O])?String(f[O]):null;const P=Object.fromEntries(Object.entries(f).map((([e,t])=>[e.toLowerCase(),t])));if(y.fromMeasure=(0,Z.isDefined)(P.measure)?Number(P.measure):NaN,y.toRouteFromMeasure=(0,Z.isDefined)(P.measure)?Number(P.measure):NaN,y.selectedMeasure=(0,Z.isDefined)(P.measure)?Number(P.measure):NaN,y.toMeasure=(0,Z.isDefined)(P.tomeasure)?Number(P.tomeasure):NaN,y.toRouteToMeasure=(0,Z.isDefined)(P.tomeasure)?Number(P.tomeasure):NaN,y.selectedToMeasure=(0,Z.isDefined)(P.tomeasure)?Number(P.tomeasure):NaN,y.validRoute=!0,y.validToRoute=!0,!s&&(0,Z.isDefined)(f.Measure)){let e=null;yield(0,W.loadArcGISJSAPIModules)(["esri/geometry/Polyline"]).then((t=>{[e]=t})).then((()=>{const t=d.getGeometry(),n=new e(t);if(n.paths.length>0){const e=n.getPoint(0,0),t=n.paths[n.paths.length-1].length-1,r=n.getPoint(n.paths.length-1,t);y.selectedPoint=e,y.selectedToPoint=r}}))}let T=null,F=null;if((0,Z.isDefined)(u)){const e=u.useRouteName?y.routeName:y.routeId;if(yield(0,Z.queryRouteIdOrName)(e.trim(),u,l,!1,!0,"",y.fromDate).then((e=>C(this,void 0,void 0,(function*(){if((0,Z.isDefined)(e)&&(yield Promise.all(e.features.map((e=>C(this,void 0,void 0,(function*(){T=e.geometry}))))),(0,Z.isDefined)(T))){const e=(0,Z.getRouteFromEndMeasures)(T);if((0,Z.isDefined)(e)){const t=yield(0,Z.QueryRouteMeasures)(l,u,e,y.fromDate,y.routeId),n=Math.min(...t),r=Math.max(...t);y.fromMeasure=G(n,u.measurePrecision),y.toRouteFromMeasure=G(n,u.measurePrecision),y.toMeasure=G(r,u.measurePrecision),y.toRouteToMeasure=y.toMeasure}if(s&&T.paths.length>0){const e=T.getPoint(0,0),t=T.paths[T.paths.length-1].length-1,n=T.getPoint(T.paths.length-1,t);y.selectedPoint=e,y.selectedToPoint=n,y.selectedMeasure=y.fromMeasure,y.selectedToMeasure=y.toRouteToMeasure}}})))),v){const e=u.useRouteName?y.toRouteName:y.toRouteId;yield(0,Z.queryRouteIdOrName)(e.trim(),u,l,!1,!0,"",y.toRouteFromDate).then((e=>C(this,void 0,void 0,(function*(){if((0,Z.isDefined)(e)&&(yield Promise.all(e.features.map((e=>C(this,void 0,void 0,(function*(){F=e.geometry}))))),(0,Z.isDefined)(F))){const e=(0,Z.getRouteFromEndMeasures)(F);if((0,Z.isDefined)(e)){const t=yield(0,Z.QueryRouteMeasures)(l,u,e,y.toRouteFromDate,y.toRouteId),n=Math.min(...t),r=Math.max(...t);y.toRouteFromMeasure=G(n,u.measurePrecision),y.toRouteToMeasure=G(r,u.measurePrecision)}if(s&&F.paths.length>0){const e=F.paths[F.paths.length-1].length-1,t=F.getPoint(F.paths.length-1,e);y.selectedToPoint=t,y.selectedToMeasure=y.toRouteToMeasure}}}))))}}return y.selectedPolyline=(0,Z.isDefined)(T)?T:null,y.selectedToPolyline=(0,Z.isDefined)(T)?T:null,v&&(y.selectedToPolyline=(0,Z.isDefined)(F)?F:null),W.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"selectedNetworkDataSource",l),W.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"selectedRouteInfo",y),!0}))}}function Q(){var e,t,n;return window.jimuConfig.isBuilder?null===(t=null===(e=(0,W.getAppStore)().getState())||void 0===e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appConfig:null===(n=(0,W.getAppStore)().getState())||void 0===n?void 0:n.appConfig}})(),i})())}}}));