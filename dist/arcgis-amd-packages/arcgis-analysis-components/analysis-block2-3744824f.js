define(["exports","./index-4ba3e564"],(function(e,s){"use strict";const t=s.proxyCustomElement(class extends s.H{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.label=void 0,this.summaryText=void 0,this.collapsible=!1,this.defaultClosed=!1,this.open=!0}componentWillLoad(){this.defaultClosed&&(this.open=!1)}render(){return s.h(s.Host,{key:"75af103d60d7b3591407975fb413dab496938fe5"},s.h("calcite-block",{key:"b85435ebba10ae26a3da875b468065bbbb471d31",class:"block",heading:this.label??"",description:this.summaryText,collapsible:this.collapsible,open:this.open},s.h("slot",{key:"5493441184d9cc2219973f290296a906d9156571"})))}get hostElement(){return this}static get style(){return":root{--analysis-quarter-spacing:0.25rem;--analysis-half-spacing:0.5rem;--analysis-three-quarter-spacing:0.75rem;--analysis-full-spacing:1rem;--analysis-component-default-width:100%;--analysis-ui-border-input:#d4d4d4;--analysis-label-font-size:var(--calcite-font-size--2);--analysis-popover-content-min-height-s:7.5rem;--analysis-popover-content-min-height-m:8.75rem;--analysis-popover-content-max-height:60vh;--analysis-popover-content-height:45vh}:host{display:flex;width:100%}.block{width:100%}"}},[1,"analysis-block",{label:[513],summaryText:[513,"summary-text"],collapsible:[516],defaultClosed:[516,"default-closed"],open:[32]}]);function a(){"undefined"!=typeof customElements&&["analysis-block"].forEach((e=>{"analysis-block"===e&&(customElements.get(e)||customElements.define(e,t))}))}a(),e.AnalysisBlock=t,e.defineCustomElement=a}));