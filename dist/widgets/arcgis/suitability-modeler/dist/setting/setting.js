System.register(["jimu-core","jimu-ui","jimu-ui/advanced/setting-components","jimu-arcgis"],(function(e,t){var s={},i={},r={},n={};return{setters:[function(e){s.React=e.React,s.css=e.css,s.jsx=e.jsx},function(e){i.Button=e.Button,i.Checkbox=e.Checkbox,i.Icon=e.Icon,i.Label=e.Label,i.Radio=e.Radio,i.TextInput=e.TextInput},function(e){r.MapWidgetSelector=e.MapWidgetSelector,r.SettingSection=e.SettingSection},function(e){n.loadArcGISJSAPIModules=e.loadArcGISJSAPIModules}],execute:function(){e((()=>{var e={60748:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});var i=s(31601),r=s.n(i),n=s(76314),o=s.n(n)()(r());o.push([e.id,".widget-setting-wro-section{margin-bottom:1.5rem}.widget-setting-wro-section-b{margin-bottom:1rem}.widget-setting-wro-label{overflow-wrap:anywhere}.widget-setting-wro-checkbox-label,.widget-setting-wro-radio-label{margin:0 6px}.widget-setting-wro-note{overflow-wrap:break-word;font-size:11px;font-style:italic}.widget-setting-wro-note-br{margin-top:10px}.widget-setting-wro-search-items{list-style-type:none;max-height:200px;padding:0;margin:0;overflow-y:auto;background:var(--light-500)}.widget-setting-wro-search-item{width:100%;font-size:12px;text-align:left;overflow-wrap:break-word}.jimu-rtl .widget-setting-wro-search-item{text-align:right}.widget-setting-wro-on{display:block}.widget-setting-wro-off{display:none}",""]);const a=o},76314:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var s="",i=void 0!==t[5];return t[4]&&(s+="@supports (".concat(t[4],") {")),t[2]&&(s+="@media ".concat(t[2]," {")),i&&(s+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),s+=e(t),i&&(s+="}"),t[2]&&(s+="}"),t[4]&&(s+="}"),s})).join("")},t.i=function(e,s,i,r,n){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(i)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(o[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);i&&o[d[0]]||(void 0!==n&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=n),s&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=s):d[2]=s),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},31601:e=>{"use strict";e.exports=function(e){return e[1]}},85072:e=>{"use strict";var t=[];function s(e){for(var s=-1,i=0;i<t.length;i++)if(t[i].identifier===e){s=i;break}return s}function i(e,i){for(var n={},o=[],a=0;a<e.length;a++){var l=e[a],c=i.base?l[0]+i.base:l[0],d=n[c]||0,h="".concat(c," ").concat(d);n[c]=d+1;var g=s(h),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==g)t[g].references++,t[g].updater(p);else{var u=r(p,i);i.byIndex=a,t.splice(a,0,{identifier:h,updater:u,references:1})}o.push(h)}return o}function r(e,t){var s=t.domAPI(t);s.update(e);return function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;s.update(e=t)}else s.remove()}}e.exports=function(e,r){var n=i(e=e||[],r=r||{});return function(e){e=e||[];for(var o=0;o<n.length;o++){var a=s(n[o]);t[a].references--}for(var l=i(e,r),c=0;c<n.length;c++){var d=s(n[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}n=l}}},77659:e=>{"use strict";var t={};e.exports=function(e,s){var i=function(e){if(void 0===t[e]){var s=document.querySelector(e);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch(e){s=null}t[e]=s}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(s)}},10540:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},55056:(e,t,s)=>{"use strict";e.exports=function(e){var t=s.nc;t&&e.setAttribute("nonce",t)}},97825:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(s){!function(e,t,s){var i="";s.supports&&(i+="@supports (".concat(s.supports,") {")),s.media&&(i+="@media ".concat(s.media," {"));var r=void 0!==s.layer;r&&(i+="@layer".concat(s.layer.length>0?" ".concat(s.layer):""," {")),i+=s.css,r&&(i+="}"),s.media&&(i+="}"),s.supports&&(i+="}");var n=s.sourceMap;n&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,s)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},41113:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},43595:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path fill="#000" d="M.304 6.016a1.03 1.03 0 0 1 1.466 0l4.398 4.451 8.062-8.16a1.03 1.03 0 0 1 1.466 0c.405.41.405 1.074 0 1.484l-8.795 8.902c-.405.41-1.062.41-1.466 0L.304 7.5a1.06 1.06 0 0 1 0-1.484"></path><path d="M0 0h16v16H0z"></path></g></svg>'},62686:e=>{"use strict";e.exports=n},79244:e=>{"use strict";e.exports=s},14321:e=>{"use strict";e.exports=i},79298:e=>{"use strict";e.exports=r}},t={};function o(s){var i=t[s];if(void 0!==i)return i.exports;var r=t[s]={id:s,exports:{}};return e[s](r,r.exports,o),r.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="",o.nc=void 0;var a={};return o.p=window.jimuConfig.baseUrl,(()=>{"use strict";o.r(a),o.d(a,{__set_webpack_public_path__:()=>I,default:()=>j});var e=o(79244),t=o(14321),s=o(79298),i=o(62686),r=o(43595),n=o.n(r);const l={wro_setting_description:"Suitability Modeler",wro_setting_selectMap:"Select a map",wro_setting_allowExport:"Allow export",wro_setting_selectImageLayer:"Select a modeling layer",wro_setting_startingState:"Starting state",wro_setting_byUrl:"Blank model",wro_setting_byItem:"Pre-configured model",wro_setting_serviceUrl:"Image service URL",wro_setting_setUrl:"Set URL",wro_setting_model:"Model",wro_setting_searchForAModel:"Search for a model",wro_setting_noneSpecified:"None specified",wro_setting_displayLabel:"Display label",wro_setting_hideRanges:"Hide numeric ranges from data class labels"};var c=o(85072),d=o.n(c),h=o(97825),g=o.n(h),p=o(77659),u=o.n(p),m=o(55056),f=o.n(m),w=o(10540),v=o.n(w),x=o(41113),b=o.n(x),y=o(60748),S={};S.styleTagTransform=b(),S.setAttributes=f(),S.insert=u().bind(null,"head"),S.domAPI=g(),S.insertStyleElement=v();d()(y.A,S);y.A&&y.A.locals&&y.A.locals;var _=function(e,t,s,i){return new(s||(s=Promise))((function(r,n){function o(e){try{l(i.next(e))}catch(e){n(e)}}function a(e){try{l(i.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(o,a)}l((i=i.apply(e,t||[])).next())}))};class j extends e.React.PureComponent{constructor(t){super(t),this.handleAllowExportChange=(e,t)=>{e&&this.props.onSettingChange({id:this.props.id,config:this.props.config.set("allowExport",t)})},this.handleDisplayLabelChange=(e,t)=>{e&&this.props.onSettingChange({id:this.props.id,config:this.props.config.set("displayLabel",t)})},this.handleHideRangesChange=(e,t)=>{e&&this.props.onSettingChange({id:this.props.id,config:this.props.config.set("hideRanges",t)})},this.handleMapWidgetSelected=e=>{this.props.onSettingChange({id:this.props.id,useMapWidgetIds:e})},this.handleSearchBlur=()=>{setTimeout((()=>{this.setState({searchHasFocus:!1})}),10)},this.handleSearchFocus=()=>{this.setState({searchHasFocus:!0})},this.handleSearchItemClick=e=>{const t=e.target.getAttribute("data-itemId"),s=e.target.getAttribute("data-itemTitle");this.setState({clearSearch:!0},(()=>{this.setState({searchHasFocus:!1}),this.search().catch((()=>{})),this.setModelProps(!1,null,t,s)}))},this.nls=e=>this.props.intl?this.props.intl.formatMessage({id:e,defaultMessage:l[e]}):e,this.searchRef=e.React.createRef();let s=!0;this.props.config.serviceUrl?s=!0:this.props.config.itemId&&(s=!1),this.state={serviceUrl:this.props.config.serviceUrl,itemId:this.props.config.itemId,itemTitle:this.props.config.itemTitle,byUrl:s,searchHasFocus:!1,searchResults:null,clearSearch:!1}}componentDidMount(){this.init().catch((()=>{}))}init(){return _(this,void 0,void 0,(function*(){try{const e=yield(0,i.loadArcGISJSAPIModules)(["esri/portal/Portal"]),t=new(0,e[0])({url:this.props.portalUrl});yield t.load(),this.portal=t,this.search().catch((()=>{}))}catch(e){console.error(e)}}))}render(){return(0,e.jsx)(s.SettingSection,null,(0,e.jsx)("div",{className:"widget-setting-wro-section"},(0,e.jsx)(t.Label,{className:"widget-setting-wro-label"},this.nls("wro_setting_selectMap")),(0,e.jsx)("div",null,(0,e.jsx)(s.MapWidgetSelector,{onSelect:this.handleMapWidgetSelected,useMapWidgetIds:this.props.useMapWidgetIds}))),(0,e.jsx)("div",{className:"widget-setting-wro-section-b"},(0,e.jsx)(t.Label,null,(0,e.jsx)(t.Checkbox,{checked:!!this.props.config.displayLabel,onChange:this.handleDisplayLabelChange}),(0,e.jsx)("span",{className:"widget-setting-wro-checkbox-label"},this.nls("wro_setting_displayLabel")))),(0,e.jsx)("div",{className:"widget-setting-wro-section-b"},(0,e.jsx)(t.Label,null,(0,e.jsx)(t.Checkbox,{checked:!!this.props.config.allowExport,onChange:this.handleAllowExportChange}),(0,e.jsx)("span",{className:"widget-setting-wro-checkbox-label"},this.nls("wro_setting_allowExport")))),(0,e.jsx)("div",{className:"widget-setting-wro-section-b"},(0,e.jsx)(t.Label,null,(0,e.jsx)(t.Checkbox,{checked:!!this.props.config.hideRanges,onChange:this.handleHideRangesChange}),(0,e.jsx)("span",{className:"widget-setting-wro-checkbox-label"},this.nls("wro_setting_hideRanges")))),this.renderModelSection())}renderItemSection(){const s=this.state.clearSearch;let i,r=e.css``;this.props.config.serviceUrl?i=this.props.config.serviceUrl:this.props.config.itemId&&(i=this.state.itemTitle||this.props.config.itemTitle||this.props.config.itemId),i?r=e.css`
        background-color: ${this.props.theme.sys.color.primary.main};
        padding: 2px 6px;
        width: 100%;
      `:i=this.nls("wro_setting_model");let n=[];const o=this.state.searchResults;o&&(n=o.map((s=>(0,e.jsx)("li",{key:s.itemId},(0,e.jsx)(t.Button,{className:"widget-setting-wro-search-item",onMouseDown:this.handleSearchItemClick,"data-itemId":s.itemId,"data-itemTitle":s.itemTitle},s.itemTitle)))));let a="widget-setting-wro-search-items";const l=this.searchRef;return document.activeElement&&document.activeElement===l.current?a+=" widget-setting-wro-on":a+=" widget-setting-wro-off",(0,e.jsx)("div",{className:"widget-setting-wro-section"},(0,e.jsx)(t.Label,{className:"widget-setting-wro-label",css:r},i),!s&&(0,e.jsx)("div",null,(0,e.jsx)(t.TextInput,{className:"w-100",type:"text",allowClear:!0,maxLength:1024,ref:this.searchRef,placeholder:this.nls("wro_setting_searchForAModel"),onChange:e=>{const t=e.target.value;this.search(t).catch((()=>{}))},onFocus:this.handleSearchFocus,onBlur:this.handleSearchBlur}),(0,e.jsx)("ul",{className:a},n)))}renderModelSection(){const s=this.state.byUrl,i=!s;return(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)("div",{className:"widget-setting-wro-section-b"},(0,e.jsx)(t.Label,{className:"widget-setting-wro-label"},this.nls("wro_setting_startingState")),(0,e.jsx)("div",null,(0,e.jsx)(t.Label,null,(0,e.jsx)(t.Radio,{name:"startingState",checked:s,onChange:()=>{this.state.byUrl||this.setModelProps(!0,null,null,null),this.setState({byUrl:!0})}}),(0,e.jsx)("span",{className:"widget-setting-wro-radio-label"},this.nls("wro_setting_byUrl")))),(0,e.jsx)("div",null,(0,e.jsx)(t.Label,null,(0,e.jsx)(t.Radio,{name:"startingState",checked:i,onChange:()=>{this.state.byUrl&&this.setModelProps(!1,null,null,null),this.setState({byUrl:!1})}}),(0,e.jsx)("span",{className:"widget-setting-wro-radio-label"},this.nls("wro_setting_byItem"))))),s&&this.renderUrlSection(),i&&this.renderItemSection())}renderUrlSection(){return(0,e.jsx)("div",{className:"widget-setting-wro-section"},(0,e.jsx)("div",null,(0,e.jsx)(t.Label,{className:"widget-setting-wro-label"},this.nls("wro_setting_serviceUrl")),(0,e.jsx)("div",{style:{display:"flex"}},(0,e.jsx)(t.TextInput,{className:"w-100",type:"text",maxLength:1024,defaultValue:this.state.serviceUrl,onChange:e=>{this.setState({serviceUrl:e.target.value})}}),(0,e.jsx)(t.Button,{icon:!0,title:this.nls("wro_setting_setUrl"),onClick:()=>{this.setModelProps(!0,this.state.serviceUrl,null,null)}},(0,e.jsx)(t.Icon,{icon:n()})))),(0,e.jsx)("div",{className:"widget-setting-wro-note",style:{width:"100%"}},(0,e.jsx)("div",{className:"widget-setting-wro-note-br"},"https://example.com/arcgis/rest/services/Example/ImageServer"),(0,e.jsx)("div",{className:"widget-setting-wro-note-br"},"https://utility.arcgis.com/usrsvcs/servers/24b7c7752170431a95719323a9e71a5e/rest/services/WRO_World_Ecophysiographic_Data/ImageServer"),(0,e.jsx)("div",{className:"widget-setting-wro-note-br"},"https://greeninfrastructuremapsdev.arcgis.com/arcgis/rest/services/GreenInfrastructure/WeightedOverlay_Geoplanner/ImageServer")))}search(e){return _(this,void 0,void 0,(function*(){try{if(!this.portal)return void console.error("WRO search, Portal wasn't loaded");const t=this.searchingId=Date.now();let s=[],i='(type:"Image Service" AND typekeywords:geodesignModelerLayer)';if("string"==typeof e&&e.length>0){i=i+" AND ("+e+")";let r={query:i,num:100,sortField:"title"};for(let e=1;e<=10;e++){const e=yield this.portal.queryItems(r);if(!(e.results&&e.results.length>0))break;if(s=s.concat(e.results),r=e.nextQueryParams,-1===r.start)break;if(t!==this.searchingId)break}}const r=s.map((e=>({itemId:e.id,itemTitle:e.title})));if(t!==this.searchingId)return;this.setState({searchResults:r})}catch(e){console.error("Search error",e)}}))}setModelProps(e,t,s,i){const r=e=>("string"!=typeof e&&(e=""),0===(e=e.trim()).length&&(e=null),e);e?t=r(t):(s=r(s),i=r(i));const n=this.props.config.set("serviceUrl",t).set("itemId",s).set("itemTitle",i);this.props.onSettingChange({id:this.props.id,config:n}),setTimeout((()=>{this.setState({serviceUrl:t,itemId:s,itemTitle:i,clearSearch:!1})}),100)}}function I(e){o.p=e}})(),a})())}}}));