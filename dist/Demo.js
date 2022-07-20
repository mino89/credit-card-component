/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),i=new WeakMap;class r{constructor(t,i,r){if(this._$cssResult$=!0,r!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let e=this.o;const r=this.t;if(t&&void 0===e){const t=void 0!==r&&1===r.length;t&&(e=i.get(r)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&i.set(r,e))}return e}toString(){return this.cssText}}const s=(t,...i)=>{const s=1===t.length?t[0]:i.reduce(((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1]),t[0]);return new r(s,t,e)},n=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const e of t.cssRules)i+=e.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,e))(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var o;const a=window.trustedTypes,l=a?a.emptyScript:"",c=window.reactiveElementPolyfillSupport,d={toAttribute(t,e){switch(e){case Boolean:t=t?l:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},h=(t,e)=>e!==t&&(e==e||t==t),p={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:h};class u extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;null!==(e=this.h)&&void 0!==e||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const r=this._$Ep(i,e);void 0!==r&&(this._$Ev.set(r,i),t.push(r))})),t}static createProperty(t,e=p){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,i,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(r){const s=this[t];this[e]=r,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||p}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const i=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{t?e.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((t=>{const i=document.createElement("style"),r=window.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=t.cssText,e.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=p){var r,s;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const o=(null!==(s=null===(r=i.converter)||void 0===r?void 0:r.toAttribute)&&void 0!==s?s:d.toAttribute)(e,i.type);this._$El=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,e){var i,r;const s=this.constructor,n=s._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=s.getPropertyOptions(n),o=t.converter,a=null!==(r=null!==(i=null==o?void 0:o.fromAttribute)&&void 0!==i?i:"function"==typeof o?o:null)&&void 0!==r?r:d.fromAttribute;this._$El=n,this[n]=a(e,t.type),this._$El=null}}requestUpdate(t,e,i){let r=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||h)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var v;u.finalized=!0,u.elementProperties=new Map,u.elementStyles=[],u.shadowRootOptions={mode:"open"},null==c||c({ReactiveElement:u}),(null!==(o=globalThis.reactiveElementVersions)&&void 0!==o?o:globalThis.reactiveElementVersions=[]).push("1.3.3");const _=globalThis.trustedTypes,g=_?_.createPolicy("lit-html",{createHTML:t=>t}):void 0,m=`lit$${(Math.random()+"").slice(9)}$`,f="?"+m,$=`<${f}>`,b=document,y=(t="")=>b.createComment(t),w=t=>null===t||"object"!=typeof t&&"function"!=typeof t,A=Array.isArray,x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,E=/-->/g,S=/>/g,C=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,k=/'/g,z=/"/g,U=/^(?:script|style|textarea|title)$/i,j=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),H=Symbol.for("lit-noChange"),P=Symbol.for("lit-nothing"),R=new WeakMap,M=b.createTreeWalker(b,129,null,!1),T=(t,e)=>{const i=t.length-1,r=[];let s,n=2===e?"<svg>":"",o=x;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,d=0;for(;d<i.length&&(o.lastIndex=d,l=o.exec(i),null!==l);)d=o.lastIndex,o===x?"!--"===l[1]?o=E:void 0!==l[1]?o=S:void 0!==l[2]?(U.test(l[2])&&(s=RegExp("</"+l[2],"g")),o=C):void 0!==l[3]&&(o=C):o===C?">"===l[0]?(o=null!=s?s:x,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?C:'"'===l[3]?z:k):o===z||o===k?o=C:o===E||o===S?o=x:(o=C,s=void 0);const h=o===C&&t[e+1].startsWith("/>")?" ":"";n+=o===x?i+$:c>=0?(r.push(a),i.slice(0,c)+"$lit$"+i.slice(c)+m+h):i+m+(-2===c?(r.push(void 0),e):h)}const a=n+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==g?g.createHTML(a):a,r]};class q{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let s=0,n=0;const o=t.length-1,a=this.parts,[l,c]=T(t,e);if(this.el=q.createElement(l,i),M.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=M.nextNode())&&a.length<o;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const e of r.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(m)){const i=c[n++];if(t.push(e),void 0!==i){const t=r.getAttribute(i.toLowerCase()+"$lit$").split(m),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:s,name:e[2],strings:t,ctor:"."===e[1]?D:"?"===e[1]?B:"@"===e[1]?V:I})}else a.push({type:6,index:s})}for(const e of t)r.removeAttribute(e)}if(U.test(r.tagName)){const t=r.textContent.split(m),e=t.length-1;if(e>0){r.textContent=_?_.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],y()),M.nextNode(),a.push({type:2,index:++s});r.append(t[e],y())}}}else if(8===r.nodeType)if(r.data===f)a.push({type:2,index:s});else{let t=-1;for(;-1!==(t=r.data.indexOf(m,t+1));)a.push({type:7,index:s}),t+=m.length-1}s++}}static createElement(t,e){const i=b.createElement("template");return i.innerHTML=t,i}}function O(t,e,i=t,r){var s,n,o,a;if(e===H)return e;let l=void 0!==r?null===(s=i._$Cl)||void 0===s?void 0:s[r]:i._$Cu;const c=w(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,r)),void 0!==r?(null!==(o=(a=i)._$Cl)&&void 0!==o?o:a._$Cl=[])[r]=l:i._$Cu=l),void 0!==l&&(e=O(t,l._$AS(t,e.values),l,r)),e}class N{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:r}=this._$AD,s=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:b).importNode(i,!0);M.currentNode=s;let n=M.nextNode(),o=0,a=0,l=r[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new L(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new W(n,this,t)),this.v.push(e),l=r[++a]}o!==(null==l?void 0:l.index)&&(n=M.nextNode(),o++)}return s}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class L{constructor(t,e,i,r){var s;this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cg=null===(s=null==r?void 0:r.isConnected)||void 0===s||s}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=O(this,t,e),w(t)?t===P||null==t||""===t?(this._$AH!==P&&this._$AR(),this._$AH=P):t!==this._$AH&&t!==H&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var e;return A(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==P&&w(this._$AH)?this._$AA.nextSibling.data=t:this.k(b.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:r}=t,s="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=q.createElement(r.h,this.options)),r);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===s)this._$AH.m(i);else{const t=new N(s,this),e=t.p(this.options);t.m(i),this.k(e),this._$AH=t}}_$AC(t){let e=R.get(t.strings);return void 0===e&&R.set(t.strings,e=new q(t)),e}S(t){A(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const s of t)r===e.length?e.push(i=new L(this.M(y()),this.M(y()),this,this.options)):i=e[r],i._$AI(s),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class I{constructor(t,e,i,r,s){this.type=1,this._$AH=P,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=P}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,r){const s=this.strings;let n=!1;if(void 0===s)t=O(this,t,e,0),n=!w(t)||t!==this._$AH&&t!==H,n&&(this._$AH=t);else{const r=t;let o,a;for(t=s[0],o=0;o<s.length-1;o++)a=O(this,r[i+o],e,o),a===H&&(a=this._$AH[o]),n||(n=!w(a)||a!==this._$AH[o]),a===P?t=P:t!==P&&(t+=(null!=a?a:"")+s[o+1]),this._$AH[o]=a}n&&!r&&this.C(t)}C(t){t===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class D extends I{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===P?void 0:t}}const F=_?_.emptyScript:"";class B extends I{constructor(){super(...arguments),this.type=4}C(t){t&&t!==P?this.element.setAttribute(this.name,F):this.element.removeAttribute(this.name)}}class V extends I{constructor(t,e,i,r,s){super(t,e,i,r,s),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=O(this,t,e,0))&&void 0!==i?i:P)===H)return;const r=this._$AH,s=t===P&&r!==P||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,n=t!==P&&(r===P||s);s&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class W{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){O(this,t)}}const J=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var K,Y;null==J||J(q,L),(null!==(v=globalThis.litHtmlVersions)&&void 0!==v?v:globalThis.litHtmlVersions=[]).push("2.2.6");class Z extends u{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var r,s;const n=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:e;let o=n._$litPart$;if(void 0===o){const t=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:null;n._$litPart$=o=new L(e.insertBefore(y(),t),t,void 0,null!=i?i:{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return H}}Z.finalized=!0,Z._$litElement$=!0,null===(K=globalThis.litElementHydrateSupport)||void 0===K||K.call(globalThis,{LitElement:Z});const G=globalThis.litElementPolyfillSupport;null==G||G({LitElement:Z}),(null!==(Y=globalThis.litElementVersions)&&void 0!==Y?Y:globalThis.litElementVersions=[]).push("3.2.1");const Q={luhnCheck(t){let e=(t+"").split("").reverse().map((t=>parseInt(t))),i=e.splice(0,1)[0],r=e.reduce(((t,e,i)=>i%2!=0?t+e:t+2*e%9||9),0);return r+=i,r%10==0},validateCardLength(t){const e=t.target.value;e&&e.length<=t.target.maxLength&&this.luhnCheck(e.replace(/\s/g,""))?t.target.setCustomValidity(""):t.target.setCustomValidity(!0)},validateData(t){t.preventDefault(),t.stopImmediatePropagation();const e=Array.from(t.target.elements),i=[];return e.forEach((t=>{t.required&&(t.checkValidity()?(t.classList.remove("error"),i.push(!0)):(t.classList.add("error"),i.push(!1)))})),!i.includes(!1)}},X=s`:host {
  --main-color: rgb(138, 138, 138);
  --main-color-lights: rgb(169, 169, 169);
  --main-color-shadows: rgb(114, 113, 113);
  --main-color-text: rgb(221, 221, 221);
}

.card-number {
  width: 100%;
  flex: 1;
}
.card-cvc {
  flex: 1;
}
.card-cvc input {
  width: 100%;
}

input {
  transition: color 0.3s;
}

select {
  appearance: none;
  border: none;
  padding: 0;
  margin: 0;
}

.card-logo {
  height: 2.5rem;
  width: 3.5rem;
  position: absolute;
  right: 10%;
  bottom: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
}
.card-logo img {
  position: absolute;
  width: 80%;
  margin: 0px;
  padding: 0px;
}

.card-preview {
  background-color: transparent;
  width: 320px;
  height: 200px;
  perspective: 1000px;
  margin: 1rem auto;
}
@media screen and (max-width: 460px) {
  .card-preview {
    width: 100%;
  }
  .card-preview .card-chip {
    top: 20% !important;
  }
}

.card-preview-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.card-preview:hover .card-preview-inner,
.flipped .card-preview-inner {
  transform: rotateY(180deg);
}

.card-preview-front,
.card-preview-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 1rem;
  overflow: hidden;
}

.card-preview-front {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Courier New", Courier, monospace;
}
.card-preview-front .card-chip {
  height: 2.5rem;
  width: 2.5rem;
  position: absolute;
  top: 30%;
  left: 10%;
}
.card-preview-front .card-num {
  position: absolute;
  bottom: 35%;
  left: 10%;
  font-size: 1.25rem;
}
.card-preview-front .card-exp {
  position: absolute;
  bottom: 10%;
  left: 10%;
  align-items: center;
  font-size: 1.5rem;
  display: flex;
}
.card-preview-front .card-exp em {
  display: flex;
  flex-direction: column;
  font-size: 10px;
  font-style: normal;
  margin-right: 0.25rem;
}

.card-preview-back {
  transform: rotateY(180deg);
  position: absolute;
}
.card-preview-back .card-band {
  height: 3rem;
  width: 100%;
  position: absolute;
  opacity: 0.8;
  top: 10%;
}
.card-preview-back .card-cvc {
  height: 2rem;
  width: 60%;
  top: 40%;
  left: 10%;
  padding: 0.25rem;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.error {
  border-color: rgb(187, 59, 59);
}`;function tt(t,e,i){return Math.min(Math.max(t,i),e)}class et extends Error{constructor(t){super(`Failed to parse color: "${t}"`)}}var it=et;function rt(t){if("string"!=typeof t)throw new it(t);if("transparent"===t.trim().toLowerCase())return[0,0,0,0];let e=t.trim();e=ht.test(t)?function(t){const e=t.toLowerCase().trim(),i=nt[function(t){let e=5381,i=t.length;for(;i;)e=33*e^t.charCodeAt(--i);return(e>>>0)%2341}(e)];if(!i)throw new it(t);return`#${i}`}(t):t;const i=at.exec(e);if(i){const t=Array.from(i).slice(1);return[...t.slice(0,3).map((t=>parseInt(ot(t,2),16))),parseInt(ot(t[3]||"f",2),16)/255]}const r=lt.exec(e);if(r){const t=Array.from(r).slice(1);return[...t.slice(0,3).map((t=>parseInt(t,16))),parseInt(t[3]||"ff",16)/255]}const s=ct.exec(e);if(s){const t=Array.from(s).slice(1);return[...t.slice(0,3).map((t=>parseInt(t,10))),parseFloat(t[3]||"1")]}const n=dt.exec(e);if(n){const[e,i,r,s]=Array.from(n).slice(1).map(parseFloat);if(tt(0,100,i)!==i)throw new it(t);if(tt(0,100,r)!==r)throw new it(t);return[...ut(e,i,r),s||1]}throw new it(t)}const st=t=>parseInt(t.replace(/_/g,""),36),nt="1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce(((t,e)=>{const i=st(e.substring(0,3)),r=st(e.substring(3)).toString(16);let s="";for(let t=0;t<6-r.length;t++)s+="0";return t[i]=`${s}${r}`,t}),{});const ot=(t,e)=>Array.from(Array(e)).map((()=>t)).join(""),at=new RegExp(`^#${ot("([a-f0-9])",3)}([a-f0-9])?$`,"i"),lt=new RegExp(`^#${ot("([a-f0-9]{2})",3)}([a-f0-9]{2})?$`,"i"),ct=new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${ot(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`,"i"),dt=/^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,ht=/^[a-z]+$/i,pt=t=>Math.round(255*t),ut=(t,e,i)=>{let r=i/100;if(0===e)return[r,r,r].map(pt);const s=(t%360+360)%360/60,n=(1-Math.abs(2*r-1))*(e/100),o=n*(1-Math.abs(s%2-1));let a=0,l=0,c=0;s>=0&&s<1?(a=n,l=o):s>=1&&s<2?(a=o,l=n):s>=2&&s<3?(l=n,c=o):s>=3&&s<4?(l=o,c=n):s>=4&&s<5?(a=o,c=n):s>=5&&s<6&&(a=n,c=o);const d=r-n/2;return[a+d,l+d,c+d].map(pt)};function vt(t,e){const[i,r,s,n]=function(t){const[e,i,r,s]=rt(t).map(((t,e)=>3===e?t:t/255)),n=Math.max(e,i,r),o=Math.min(e,i,r),a=(n+o)/2;if(n===o)return[0,0,a,s];const l=n-o;return[60*(e===n?(i-r)/l+(i<r?6:0):i===n?(r-e)/l+2:(e-i)/l+4),a>.5?l/(2-n-o):l/(n+o),a,s]}(t);return function(t,e,i,r){return`hsla(${(t%360).toFixed()}, ${tt(0,100,100*e).toFixed()}%, ${tt(0,100,100*i).toFixed()}%, ${parseFloat(tt(0,1,r).toFixed(3))})`}(i,r,s-e,n)}function _t(t,e){return vt(t,-e)}function gt(t,e){const[i,r,s,n]=rt(t);return o=r,a=s,l=n-e,`rgba(${tt(0,255,i).toFixed()}, ${tt(0,255,o).toFixed()}, ${tt(0,255,a).toFixed()}, ${parseFloat(tt(0,1,l).toFixed(3))})`;var o,a,l}const mt={composeUrl:t=>({url:`./img/creditcards/${t}.svg`,name:t}),getImg(t){switch(!0){case null!=t.match(new RegExp("^4")):return this.composeUrl("visa");case null!=t.match(new RegExp("^(34|37)")):return this.composeUrl("amex");case null!=t.match(new RegExp("^5[06-8]")):return this.composeUrl("maestro");case null!=t.match(new RegExp("^5[1-5]")):return this.composeUrl("mastercard");case null!=t.match(new RegExp("^6011")):return this.composeUrl("discover");case null!=t.match(new RegExp("^62")):return this.composeUrl("unionpay");case null!=t.match(new RegExp("^9792")):return this.composeUrl("troy");case null!=t.match(new RegExp("^3(?:0([0-5]|9)|[689]\\d?)\\d{0,11}")):return this.composeUrl("dinersclub");case null!=t.match(new RegExp("^35(2[89]|[3-8])")):return this.composeUrl("jcb");default:return"unknown"}}},ft={sanitizeLetters:t=>t.replace(/\s+/g,"").replace(/[^0-9]/gi,""),cardFormat(t){if(t){var e=this.sanitizeLetters(t).match(/\d{4,16}/g),i=e&&e[0]||"",r=[];for(let t=0,e=i.length;t<e;t+=4)r.push(i.substring(t,t+4));return r.length?r.join(" "):this.sanitizeLetters(t)}}};class $t extends Z{static get properties(){return{card:{type:Object,attribute:!1},color:{type:String}}}constructor(){super(),this.card={},this.flipped=!1}static styles=[X,s`.card-preview-front{background:var(--bg-color);color:var(--bg-color-text);text-shadow:1px 1px 1px var(--bg-color-shadow)}.card-preview-back{background:var(--bg-color-dark)}.card-band{background:var(--bg-color-deep-dark)}.card-cvc{background:var(--bg-color-light)}.card-preview-back,.card-preview-front{box-shadow:0 4px 8px 0 var(--bg-color-shadow)}.card-logo{background:var(--bg-color-transparent-light)}`];updated(){console.log(this.flipped),this.style="",this.updateColors()}render(){const t=mt.getImg(this.card?.number);return j`${this.flipped}<div class="card-preview ${this.flipped?"flipped":""}"><div class="card-preview-inner"><div class="card-preview-front"><div class="card-num">${ft.cardFormat(this.card?.number)||"#### #### #### ####"}</div><div class="card-exp"><div><em><b>VALID</b> <b>THRU</b></em></div>${this.card?.month||"##"}/${this.card?.year||"##"}</div><div class="card-logo"><img src="${t.url}" alt="${t.name}"></div></div><div class="card-preview-back"><div class="card-band"></div><div class="card-cvc">${this.card?.cvc||"###"}</div></div></div></div>`}updateColors(){const t={"--bg-color":this.color,"--bg-color-dark":vt(this.color,.1),"--bg-color-light":_t(this.color,.7),"--bg-color-transparent-light":gt(_t(this.color,.7),.7),"--bg-color-deep-dark":vt(this.color,.2),"--bg-color-text":_t(this.color,.6),"--bg-color-shadow":vt(gt(this.color,.6),.5)};Object.entries(t).forEach((t=>this.style.setProperty(t[0],t[1])))}}window.customElements.define("credit-card-preview",$t);window.customElements.define("credit-card",class extends Z{static get styles(){return s`.error:invalid{border:1px solid red}`}static get properties(){return{card:{type:Object},color:{type:String},flipped:{type:Boolean}}}constructor(){super(),this.card={number:"",year:"",month:"",cvc:""},this.flipped=!1}updated(){this.shadowRoot.querySelector("credit-card-preview").requestUpdate()}render(){return j`<credit-card-preview .card="${this.card}" .flipped="${this.flipped}" color="${this.color}"></credit-card-preview><form @submit="${this._submitEventHandler}" novalidate><input name="number" .value="${this.card.number}" minlength="14" maxlength="16" pattern="^[0-9]*$" @input="${this._validateCardHandler}" required> <input name="month" .value="${this.card.month}" minlength="2" maxlength="2" pattern="^[0-9]*$" @input="${this._inputHandler}" required> <input name="year" .value="${this.card.year}" minlength="2" maxlength="2" pattern="^[0-9]*$" @input="${this._inputHandler}" required> <input name="cvc" .value="${this.card.cvc}" minlength="3" maxlength="3" pattern="^[0-9]*$" @input="${this._inputHandler}" @focus="${this.flipCard}" @blur="${this.flipCard}" required> <button type="submit">submit</button></form>`}flipCard(t){this.flipped=!this.flipped}_inputHandler(t){this.card[t.target.name]=t.target.value,this.requestUpdate()}_validateCardHandler(t){Q.validateCardLength(t),this._inputHandler(t)}_submitEventHandler(t){Q.validateData(t)&&this.dispatchEvent(new CustomEvent("card-data",{composed:!0,bubbles:!0,detail:this.card}))}});window.customElements.define("demo-view",class extends Z{static get properties(){return{color:{type:String,attribute:!1}}}constructor(){super(),this.color="#32a4dc"}updated(){this.shadowRoot.querySelector("credit-card").requestUpdate()}render(){return j`${this.color} <input type="color" .value="${this.color}" @input="${this.changeColorHandler}" id="colorPicker"><credit-card id="credit-card" title="title" .color="${this.color}"></credit-card>`}changeColorHandler(t){this.color=t.target.value,this.requestUpdate()}});
