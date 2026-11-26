function t(t,e,i,s){var o,r=arguments.length,a=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,s);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(a=(r<3?o(a):r>3?o(e,i,a):o(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=window,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;let r=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}};const a=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new r(i,t,s)},n=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,s))(e)})(t):t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l;const c=window,d=c.trustedTypes,p=d?d.emptyScript:"",u=c.reactiveElementPolyfillSupport,h={toAttribute(t,e){switch(e){case Boolean:t=t?p:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>e!==t&&(e==e||t==t),_={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:v},m="finalized";let f=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=_){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||_}static finalize(){if(this.hasOwnProperty(m))return!1;this[m]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{i?t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):s.forEach(i=>{const s=document.createElement("style"),o=e.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=i.cssText,t.appendChild(s)})})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=_){var s;const o=this.constructor._$Ep(t,i);if(void 0!==o&&!0===i.reflect){const r=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:h).toAttribute(e,i.type);this._$El=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=s.getPropertyOptions(o),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:h;this._$El=o,this[o]=r.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,e)=>this[e]=t),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var y;f[m]=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:f}),(null!==(l=c.reactiveElementVersions)&&void 0!==l?l:c.reactiveElementVersions=[]).push("1.6.3");const g=window,b=g.trustedTypes,x=b?b.createPolicy("lit-html",{createHTML:t=>t}):void 0,w="$lit$",$=`lit$${(Math.random()+"").slice(9)}$`,k="?"+$,S=`<${k}>`,A=document,C=()=>A.createComment(""),L=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,q="[ \t\n\f\r]",P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,E=/>/g,T=RegExp(`>|${q}(?:([^\\s"'>=/]+)(${q}*=${q}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,R=/"/g,O=/^(?:script|style|textarea|title)$/i,H=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),V=H(1),F=H(2),N=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),U=new WeakMap,B=A.createTreeWalker(A,129,null,!1);function Q(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(e):e}const W=(t,e)=>{const i=t.length-1,s=[];let o,r=2===e?"<svg>":"",a=P;for(let e=0;e<i;e++){const i=t[e];let n,l,c=-1,d=0;for(;d<i.length&&(a.lastIndex=d,l=a.exec(i),null!==l);)d=a.lastIndex,a===P?"!--"===l[1]?a=z:void 0!==l[1]?a=E:void 0!==l[2]?(O.test(l[2])&&(o=RegExp("</"+l[2],"g")),a=T):void 0!==l[3]&&(a=T):a===T?">"===l[0]?(a=null!=o?o:P,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,n=l[1],a=void 0===l[3]?T:'"'===l[3]?R:I):a===R||a===I?a=T:a===z||a===E?a=P:(a=T,o=void 0);const p=a===T&&t[e+1].startsWith("/>")?" ":"";r+=a===P?i+S:c>=0?(s.push(n),i.slice(0,c)+w+i.slice(c)+$+p):i+$+(-2===c?(s.push(void 0),e):p)}return[Q(t,r+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class Y{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const a=t.length-1,n=this.parts,[l,c]=W(t,e);if(this.el=Y.createElement(l,i),B.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=B.nextNode())&&n.length<a;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith(w)||e.startsWith($)){const i=c[r++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+w).split($),e=/([.?@])?(.*)/.exec(i);n.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?X:"?"===e[1]?tt:"@"===e[1]?et:K})}else n.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(O.test(s.tagName)){const t=s.textContent.split($),e=t.length-1;if(e>0){s.textContent=b?b.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],C()),B.nextNode(),n.push({type:2,index:++o});s.append(t[e],C())}}}else if(8===s.nodeType)if(s.data===k)n.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf($,t+1));)n.push({type:7,index:o}),t+=$.length-1}o++}}static createElement(t,e){const i=A.createElement("template");return i.innerHTML=t,i}}function D(t,e,i=t,s){var o,r,a,n;if(e===N)return e;let l=void 0!==s?null===(o=i._$Co)||void 0===o?void 0:o[s]:i._$Cl;const c=L(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,s)),void 0!==s?(null!==(a=(n=i)._$Co)&&void 0!==a?a:n._$Co=[])[s]=l:i._$Cl=l),void 0!==l&&(e=D(t,l._$AS(t,e.values),l,s)),e}class G{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:A).importNode(i,!0);B.currentNode=o;let r=B.nextNode(),a=0,n=0,l=s[0];for(;void 0!==l;){if(a===l.index){let e;2===l.type?e=new Z(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new it(r,this,t)),this._$AV.push(e),l=s[++n]}a!==(null==l?void 0:l.index)&&(r=B.nextNode(),a++)}return B.currentNode=A,o}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Z{constructor(t,e,i,s){var o;this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=D(this,t,e),L(t)?t===j||null==t||""===t?(this._$AH!==j&&this._$AR(),this._$AH=j):t!==this._$AH&&t!==N&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>M(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==j&&L(this._$AH)?this._$AA.nextSibling.data=t:this.$(A.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=Y.createElement(Q(s.h,s.h[0]),this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.v(i);else{const t=new G(o,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=U.get(t.strings);return void 0===e&&U.set(t.strings,e=new Y(t)),e}T(t){M(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new Z(this.k(C()),this.k(C()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class K{constructor(t,e,i,s,o){this.type=1,this._$AH=j,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=j}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(void 0===o)t=D(this,t,e,0),r=!L(t)||t!==this._$AH&&t!==N,r&&(this._$AH=t);else{const s=t;let a,n;for(t=o[0],a=0;a<o.length-1;a++)n=D(this,s[i+a],e,a),n===N&&(n=this._$AH[a]),r||(r=!L(n)||n!==this._$AH[a]),n===j?t=j:t!==j&&(t+=(null!=n?n:"")+o[a+1]),this._$AH[a]=n}r&&!s&&this.j(t)}j(t){t===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class X extends K{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===j?void 0:t}}const J=b?b.emptyScript:"";class tt extends K{constructor(){super(...arguments),this.type=4}j(t){t&&t!==j?this.element.setAttribute(this.name,J):this.element.removeAttribute(this.name)}}class et extends K{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=D(this,t,e,0))&&void 0!==i?i:j)===N)return;const s=this._$AH,o=t===j&&s!==j||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==j&&(s===j||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){D(this,t)}}const st=g.litHtmlPolyfillSupport;null==st||st(Y,Z),(null!==(y=g.litHtmlVersions)&&void 0!==y?y:g.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var ot,rt;class at extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,o;const r=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let a=r._$litPart$;if(void 0===a){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;r._$litPart$=a=new Z(e.insertBefore(C(),t),t,void 0,null!=i?i:{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return N}}at.finalized=!0,at._$litElement$=!0,null===(ot=globalThis.litElementHydrateSupport)||void 0===ot||ot.call(globalThis,{LitElement:at});const nt=globalThis.litElementPolyfillSupport;null==nt||nt({LitElement:at}),(null!==(rt=globalThis.litElementVersions)&&void 0!==rt?rt:globalThis.litElementVersions=[]).push("3.3.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const lt=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e),ct=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function dt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):ct(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pt(t){return dt({...t,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function ut(t,e){return(({finisher:t,descriptor:e})=>(i,s)=>{var o;if(void 0===s){const s=null!==(o=i.originalKey)&&void 0!==o?o:i.key,r=null!=e?{kind:"method",placement:"prototype",key:s,descriptor:e(i.key)}:{...i,key:s};return null!=t&&(r.finisher=function(e){t(e,s)}),r}{const o=i.constructor;void 0!==e&&Object.defineProperty(i,s,e(s)),null==t||t(o,s)}})({descriptor:e=>{const i={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};return i}})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ht;null===(ht=window.HTMLSlotElement)||void 0===ht||ht.prototype.assignedElements;const vt=V`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>arrow-left</title>
        <path
            d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
    </svg>
`;V`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
            d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z" />
    </svg>
`;const _t=V`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
            d="M2 11V13C7 13 11 17 11 22H13C13 15.9 8.1 11 2 11M20 2H10C8.9 2 8 2.9 8 4V10.5C9 11 9.9 11.7 10.7 12.4C11.6 11 13.2 10 15 10C17.8 10 20 12.2 20 15S17.8 20 15 20H14.8C14.9 20.7 15 21.3 15 22H20C21.1 22 22 21.1 22 20V4C22 2.9 21.1 2 20 2M15 8C13.9 8 13 7.1 13 6C13 4.9 13.9 4 15 4C16.1 4 17 4.9 17 6S16.1 8 15 8M15 18C14.8 18 14.5 18 14.3 17.9C13.8 16.4 13.1 15.1 12.2 13.9C12.6 12.8 13.7 11.9 15 11.9C16.7 11.9 18 13.2 18 14.9S16.7 18 15 18M2 15V17C4.8 17 7 19.2 7 22H9C9 18.1 5.9 15 2 15M2 19V22H5C5 20.3 3.7 19 2 19" />
    </svg>
`,mt=V`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
            d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
    </svg>
`;V`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>forwardburger</title>
        <path
            d="M19,13H3V11H19L15,7L16.4,5.6L22.8,12L16.4,18.4L15,17L19,13M3,6H13V8H3V6M13,16V18H3V16H13Z" />
    </svg>
`;const ft=V`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
            d="M12,10A2,2 0 0,1 14,12C14,12.5 13.82,12.94 13.53,13.29L16.7,22H14.57L12,14.93L9.43,22H7.3L10.47,13.29C10.18,12.94 10,12.5 10,12A2,2 0 0,1 12,10M12,8A4,4 0 0,0 8,12C8,12.5 8.1,13 8.28,13.46L7.4,15.86C6.53,14.81 6,13.47 6,12A6,6 0 0,1 12,6A6,6 0 0,1 18,12C18,13.47 17.47,14.81 16.6,15.86L15.72,13.46C15.9,13 16,12.5 16,12A4,4 0 0,0 12,8M12,4A8,8 0 0,0 4,12C4,14.36 5,16.5 6.64,17.94L5.92,19.94C3.54,18.11 2,15.23 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12C22,15.23 20.46,18.11 18.08,19.94L17.36,17.94C19,16.5 20,14.36 20,12A8,8 0 0,0 12,4Z" />
    </svg>
`,yt=V`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>repeat</title>
        <path
            d="M17,17H7V14L3,18L7,22V19H19V13H17M7,7H17V10L21,6L17,2V5H5V11H7V7Z" />
    </svg>
`,gt=V`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>shuffle-variant</title>
        <path
            d="M17,3L22.25,7.5L17,12L22.25,16.5L17,21V18H14.26L11.44,15.18L13.56,13.06L15.5,15H17V12L17,9H15.5L6.5,18H2V15H5.26L14.26,6H17V3M2,6H6.5L9.32,8.82L7.2,10.94L5.26,9H2V6Z" />
    </svg>
`,bt=V`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>skip-next</title>
        <path d="M16,18H18V6H16M6,18L14.5,12L6,6V18Z" />
    </svg>
`,xt=V`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>skip-previous</title>
        <path d="M6,18V6H8V18H6M9.5,12L18,6V18L9.5,12Z" />
    </svg>
`,wt=V`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>pause</title>
        <path d="M14,19H18V5H14M6,19H10V5H6V19Z" />
    </svg>
`,$t=V`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>play</title>
        <path d="M8,5.14V19.14L19,12.14L8,5.14Z" />
    </svg>
`;V`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>thumb-up</title>
        <path
            d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z" />
    </svg>
`,V`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>thumb-up-outline</title>
        <path
            d="M5,9V21H1V9H5M9,21A2,2 0 0,1 7,19V9C7,8.45 7.22,7.95 7.59,7.59L14.17,1L15.23,2.06C15.5,2.33 15.67,2.7 15.67,3.11L15.64,3.43L14.69,8H21C22.11,8 23,8.9 23,10V12C23,12.26 22.95,12.5 22.86,12.73L19.84,19.78C19.54,20.5 18.83,21 18,21H9M9,19H18.03L21,12V10H12.21L13.34,4.68L9,9.03V19Z" />
    </svg>
`;const kt=V`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>volume-high</title>
        <path
            d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" />
    </svg>
`,St=V` <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <title>volume-off</title>
    <path
        d="M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z" />
</svg>`;class At{}function Ct(t){if(null==t||isNaN(t))return"0:00";const e=new Date(1e3*t).toISOString();return t>=36e3?e.substring(11,19):t>=3600?e.substring(12,19):e.substring(14,19)}function Lt(t,e,i){if(t===e)return!0;if(Array.isArray(t)&&Array.isArray(e))return t.length===e.length&&t.every((t,s)=>Lt(t,e[s],i));if("object"==typeof t&&"object"==typeof e&&null!==t&&null!==e){if(Array.isArray(t)||Array.isArray(e))return!1;const s=Object.keys(t),o=Object.keys(e);if(s.length!==o.length||!s.every(t=>o.includes(t)))return!1;for(let s in t){if(i.includes(s))continue;if(!Lt(t[s],e[s],i))return!1}return!0}return!1}const Mt=V`
    <svg viewBox="0 0 24 24" class="yt-icon" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FF0000" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
    </svg>
`;class qt extends at{constructor(){super(...arguments),this._config={},this._menuOpen=!1,this._searchQuery="",this._searchFilter="songs",this._volSig=""}static getConfigElement(){}static getStubConfig(){return{entity_id:"media_player.ytube_music_player"}}setConfig(t){if(!t.entity_id)throw new Error("entity_id must be specified");this._config=structuredClone(t),"header"in this._config||(this._config.header="YouTube Music Search"),this._initialAction=new At,this._initialAction.title="Home",this._initialAction.media_content_type=null,this._initialAction.media_content_id=null}set hass(t){var e,i;this._hass=t;const s=this._hass.states[this._config.entity_id];Lt(this._entity,s,[])||(this._entity=structuredClone(s));const o=this._volTarget(),r=o?`${o.entity_id}|${null===(e=o.attributes)||void 0===e?void 0:e.volume_level}|${null===(i=o.attributes)||void 0===i?void 0:i.is_volume_muted}`:"";r!==this._volSig&&(this._volSig=r,this.requestUpdate())}_volTarget(){var t,e,i;const s=(null===(t=this._hass)||void 0===t?void 0:t.states)||{},o=s[this._config.entity_id];if(void 0===(null===(e=null==o?void 0:o.attributes)||void 0===e?void 0:e.mass_player_type)||(t=>t&&["playing","paused","buffering"].includes(t.state))(o))return o;const r=(null===(i=this._hass)||void 0===i?void 0:i.entities)||{},a=Object.entries(s).filter(([t,e])=>{var i,s;return t.startsWith("media_player.")&&"playing"===e.state&&(void 0!==(null===(i=e.attributes)||void 0===i?void 0:i.mass_player_type)||"music_assistant"===(null===(s=r[t])||void 0===s?void 0:s.platform))});return 1===a.length?a[0][1]:o}render(){var t,e;const i=this._volTarget(),s=null===(t=null==i?void 0:i.attributes)||void 0===t?void 0:t.volume_level,o=null!=s?Math.round(100*s):50,r=null===(e=null==i?void 0:i.attributes)||void 0===e?void 0:e.is_volume_muted;return V`
            <ha-card>
                <div class="yt-header">
                    <div class="yt-logo">
                        ${Mt}
                        <span class="yt-title">Music</span>
                    </div>
                    <div class="header-actions">
                        <button class="icon-btn" @click=${this._toggleMute}>
                            <ha-icon icon="${r?"mdi:volume-off":"mdi:volume-high"}"></ha-icon>
                        </button>
                        <input
                            type="range"
                            class="vol-slider"
                            min="0" max="100" step="1"
                            .value=${String(o)}
                            @change=${this._onVolumeChange}
                        />
                        ${this._renderSourceSelector()}
                    </div>
                </div>
                <div class="card-search">
                    <div class="search-input-wrap">
                        <ha-icon icon="mdi:magnify" class="search-icon"></ha-icon>
                        <input
                            type="search"
                            placeholder="Search..."
                            .value=${this._searchQuery}
                            @input=${t=>{this._searchQuery=t.target.value}}
                            @keyup=${t=>{"Enter"===t.key&&this._runSearch()}}
                        />
                    </div>
                    <select
                        .value=${this._searchFilter}
                        @change=${t=>{this._searchFilter=t.target.value,this._runSearch()}}
                    >
                        <option value="all">All</option>
                        <option value="artists">Artists</option>
                        <option value="songs">Songs</option>
                        <option value="albums">Albums</option>
                        <option value="playlists">Playlists</option>
                    </select>
                </div>
                <div class="search-wrap">
                    <ytmusic-browser
                        .hass=${this._hass}
                        .entity=${this._entity}
                        .initialAction=${this._initialAction}
                        .coverNavigation=${!0}
                        .hideSearch=${!0}
                    ></ytmusic-browser>
                </div>
            </ha-card>
        `}_renderSourceSelector(){var t;if(!this._hass)return V``;let e=[];for(const[i,s]of Object.entries(this._hass.states))if(i.startsWith("media_player")){if(null===(t=null==s?void 0:s.attributes)||void 0===t?void 0:t.remote_player_id)continue;if("speakers"in this._config&&!this._config.speakers.includes(i))continue;e.push([i,s.attributes.friendly_name])}return e.sort((t,e)=>t[1]<e[1]?-1:1),V`
            <div class="source-wrap">
                <button class="icon-btn cast-btn" @click=${this._toggleMenu}>
                    ${_t}
                </button>
                ${this._menuOpen?V`
                    <div
                        class="source-menu"
                        @click=${t=>t.stopPropagation()}
                        @wheel=${this._onSourceMenuWheel}
                    >
                        ${e.map(t=>{var e,i;return V`
                            <div
                                class="menu-item ${t[0]===(null===(i=null===(e=this._entity)||void 0===e?void 0:e.attributes)||void 0===i?void 0:i.remote_player_id)?"selected":""}"
                                @click=${()=>this._selectSource(t[0])}
                            >${t[1]}</div>
                        `})}
                    </div>
                `:j}
            </div>
        `}_toggleMenu(t){t.stopPropagation(),this._menuOpen=!this._menuOpen,this._menuOpen&&document.addEventListener("click",()=>{this._menuOpen=!1},{once:!0})}_onSourceMenuWheel(t){t.stopPropagation(),t.preventDefault(),t.currentTarget.scrollTop+=t.deltaY}async _selectSource(t){var e,i;this._menuOpen=!1;const s=null===(i=null===(e=this._entity)||void 0===e?void 0:e.attributes)||void 0===i?void 0:i.remote_player_id;""!==t&&t!==s&&this._hass.callService("media_player","select_source",{entity_id:this._config.entity_id,source:t})}_onVolumeChange(t){const e=Number(t.target.value),i=this._volTarget();this._hass.callService("media_player","volume_set",{entity_id:(null==i?void 0:i.entity_id)||this._config.entity_id,volume_level:e/100})}async _toggleMute(){var t;const e=this._volTarget();this._hass.callService("media_player","volume_mute",{entity_id:(null==e?void 0:e.entity_id)||this._config.entity_id,is_volume_muted:!(null===(t=null==e?void 0:e.attributes)||void 0===t?void 0:t.is_volume_muted)})}async _runSearch(){var t;const e=this._searchQuery.trim();e&&await(null===(t=this._browser)||void 0===t?void 0:t.searchExternal(e,this._searchFilter))}static get styles(){return[a`
            :host {
                display: block;
                --yt-bg: #0f0f0f;
                --yt-surface: #1e1e1e;
                --yt-surface2: #282828;
                --yt-red: #ff0000;
                --yt-text: #ffffff;
                --yt-text2: rgba(255,255,255,0.6);
                --yt-text3: rgba(255,255,255,0.38);
            }

            ha-card {
                background: var(--yt-bg) !important;
                height: 700px;
                display: flex;
                flex-direction: column;
                overflow: hidden;
                z-index: 0;
                isolation: isolate;
                border-radius: 12px;
                color: var(--yt-text);
            }

            /* ── HEADER ── */
            .yt-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 10px 16px 8px;
                flex-shrink: 0;
                gap: 8px;
            }

            .yt-logo {
                display: flex;
                align-items: center;
                gap: 6px;
                flex-shrink: 0;
            }

            .yt-icon { width: 26px; height: 26px; }

            .yt-title {
                font-size: 17px;
                font-weight: 600;
                color: var(--yt-text);
                letter-spacing: 0.3px;
            }

            .header-actions {
                display: flex;
                align-items: center;
                gap: 6px;
            }

            /* ── VOLUME ── */
            .vol-slider {
                width: 80px;
                -webkit-appearance: none;
                appearance: none;
                height: 3px;
                border-radius: 2px;
                background: rgba(255,255,255,0.25);
                outline: none;
                cursor: pointer;
                flex-shrink: 0;
            }

            .vol-slider::-webkit-slider-thumb {
                -webkit-appearance: none;
                width: 12px;
                height: 12px;
                border-radius: 50%;
                background: var(--yt-text);
                cursor: pointer;
            }

            .vol-slider::-moz-range-thumb {
                width: 12px;
                height: 12px;
                border-radius: 50%;
                background: var(--yt-text);
                cursor: pointer;
                border: none;
            }

            /* ── SEARCH WRAPPER ── */
            .search-wrap {
                flex: 1;
                min-height: 0;
                overflow: hidden;
                display: flex;
                flex-direction: column;
                padding: 0 8px 8px;
            }

            .card-search {
                display: grid;
                grid-template-columns: minmax(0, 1fr) auto;
                gap: 8px;
                padding: 4px 12px 8px;
            }

            .search-input-wrap {
                height: 40px;
                display: flex;
                align-items: center;
                gap: 8px;
                box-sizing: border-box;
                padding: 0 14px;
                border: 1px solid rgba(255,255,255,0.12);
                border-radius: 24px;
                background: var(--yt-surface2);
            }

            .search-input-wrap .search-icon {
                --mdc-icon-size: 18px;
                opacity: 0.6;
            }

            .search-input-wrap input {
                flex: 1;
                min-width: 0;
                height: 100%;
                border: none;
                outline: none;
                background: none;
                color: var(--yt-text);
                font-size: 14px;
            }

            .search-input-wrap input::placeholder {
                color: var(--yt-text3);
            }

            .card-search select {
                height: 40px;
                min-width: 112px;
                border: 1px solid rgba(255,255,255,0.12);
                border-radius: 20px;
                background: var(--yt-surface2);
                color: var(--yt-text);
                font-size: 13px;
                font-weight: 500;
                padding: 0 12px;
                outline: none;
            }

            ytmusic-browser {
                flex: 1;
                min-height: 0;
                overflow: hidden;
                display: flex;
                flex-direction: column;
                --primary-text-color: #ffffff;
                --rgb-primary-text-color: 255, 255, 255;
                --primary-color: #ff0000;
                --rgb-primary-color: 255, 0, 0;
                --card-background-color: #1e1e1e;
                color: #ffffff;
            }

            /* ── ICON BUTTONS ── */
            .icon-btn {
                background: none;
                border: none;
                cursor: pointer;
                padding: 6px;
                border-radius: 50%;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                color: var(--yt-text);
                --mdc-icon-size: 20px;
                flex-shrink: 0;
            }

            .icon-btn:hover { background: rgba(255,255,255,0.08); }

            .icon-btn svg {
                width: 20px;
                height: 20px;
                fill: currentColor;
            }

            .cast-btn svg { width: 18px; height: 18px; }

            /* ── SOURCE DROPDOWN ── */
            .source-wrap { position: relative; }

            .source-menu {
                position: absolute;
                top: 100%;
                right: 0;
                z-index: 999;
                background: #2a2a2a;
                border-radius: 8px;
                box-shadow: 0 8px 24px rgba(0,0,0,0.5);
                min-width: 200px;
                max-height: 280px;
                overflow-y: auto;
                overscroll-behavior: contain;
                border: 1px solid rgba(255,255,255,0.1);
            }

            .menu-item {
                padding: 11px 16px;
                cursor: pointer;
                font-size: 14px;
                color: var(--yt-text);
            }

            .menu-item:hover { background: rgba(255,255,255,0.08); }
            .menu-item.selected { color: var(--yt-red); font-weight: 600; }
        `]}}t([dt()],qt.prototype,"_config",void 0),t([pt()],qt.prototype,"_entity",void 0),t([pt()],qt.prototype,"_menuOpen",void 0),t([pt()],qt.prototype,"_searchQuery",void 0),t([pt()],qt.prototype,"_searchFilter",void 0),t([ut("ytmusic-browser")],qt.prototype,"_browser",void 0),customElements.define("ytmusic-search-card",qt),window.customCards=window.customCards||[],window.customCards.push({type:"ytmusic-search-card",name:"YTMusic Search",description:"Requires the ytube_media_player integration"});let Pt=class extends at{constructor(){super(...arguments),this.value=0,this.min=0,this.max=100,this.step=1}render(){return V`<ha-slider
            min=${this.min}
            max=${this.max}
            step=${this.step}
            .value=${this.value}
            @change=${t=>{this.value=t.target.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}}
        ></ha-slider>`}};Pt.styles=a`
        :host {
            display: contents;
        }
        ha-slider {
            width: 100%;
        }
    `,t([dt({type:Number})],Pt.prototype,"value",void 0),t([dt({type:Number})],Pt.prototype,"min",void 0),t([dt({type:Number})],Pt.prototype,"max",void 0),t([dt({type:Number})],Pt.prototype,"step",void 0),Pt=t([lt("ytmusic-slider")],Pt);let zt=class extends at{constructor(){super(...arguments),this._repeatActive=void 0,this._shuffleActive=void 0,this._pct=0,this._volLocal=void 0}async connectedCallback(){super.connectedCallback(),this._trackProgress()}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.tracker),this.tracker=null}_wavePath(t=800){let e="M0 12 Q10 6 20 12";for(let i=40;i<=t;i+=20)e+=` T${i} 12`;return e}_wave(t){return F`<svg class="wave" width="800" height="24" viewBox="0 0 800 24"
            preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="${this._wavePath(800)}" fill="none" stroke="${t}"
                stroke-width="3" stroke-linecap="round"></path>
        </svg>`}render(){var t,e,i,s,o,r,a,n,l,c,d,p,u,h,v,_,m,f;const y="playing"===(null===(t=this.entity)||void 0===t?void 0:t.state),g=Ct(null===(i=null===(e=this.entity)||void 0===e?void 0:e.attributes)||void 0===i?void 0:i.media_duration),b=Math.max(0,Math.min(100,this._pct)),x=null!==(s=this._volLocal)&&void 0!==s?s:Math.round(100*(null!==(a=null===(r=null===(o=this.entity)||void 0===o?void 0:o.attributes)||void 0===r?void 0:r.volume_level)&&void 0!==a?a:0)),w=!!(null===(l=null===(n=this.entity)||void 0===n?void 0:n.attributes)||void 0===l?void 0:l.is_volume_muted),$="music_assistant"===(null===(d=null===(c=this.entity)||void 0===c?void 0:c.attributes)||void 0===d?void 0:d.app_id),k=void 0!==this._shuffleActive?this._shuffleActive:!!(null===(u=null===(p=this.entity)||void 0===p?void 0:p.attributes)||void 0===u?void 0:u.shuffle),S=void 0!==this._repeatActive?this._repeatActive:!(!(null===(v=null===(h=this.entity)||void 0===h?void 0:h.attributes)||void 0===v?void 0:v.repeat)||"off"===(null===(m=null===(_=this.entity)||void 0===_?void 0:_.attributes)||void 0===m?void 0:m.repeat));return V`
            <!-- wavy progress -->
            <div class="wavebar">
                <span class="t">${null!==(f=this.progressTime)&&void 0!==f?f:"0:00"}</span>
                <div class="wave-wrap ${y?"playing":""}" @click=${this._seekClick}>
                    <div class="wlayer grey">${this._wave("#3a3a3a")}</div>
                    <div class="wlayer red" style="width:${b}%">${this._wave("var(--yt-red, #ff0000)")}</div>
                    <div class="whandle" style="left:${b}%"></div>
                </div>
                <span class="t">${g}</span>
            </div>

            <!-- transport: prev square / play big / next square -->
            <div class="controls">
                <button class="sq" @click=${this._skipPrevious}>${xt}</button>
                <button class="playbtn" @click=${this._togglePlayPause}>
                    ${y?wt:$t}
                </button>
                <button class="sq" @click=${this._skipNext}>${bt}</button>
            </div>

            <!-- labeled pills -->
            <div class="pills">
                <button class="pill ${k?"on":""}" @click=${this._shuffleList}>
                    ${gt}<span>Shuffle</span>
                </button>
                <button class="pill ${S?"on":""}" @click=${this._changeRepeat}>
                    ${yt}<span>Repeat</span>
                </button>
                <button class="pill pill-icon" title="Opzioni" @click=${this._openQueueOptions}>
                    <ha-icon icon="mdi:dots-vertical"></ha-icon>
                </button>
            </div>

            <!-- volume pill + speaker on the right -->
            <div class="volume">
                ${$?j:V`<button class="radio-btn" @click=${this._startRadio} title="Radio">
                    ${ft}
                </button>`}
                <div class="volwrap">
                    <div class="volfill" style="width:${w?0:x}%"></div>
                    <div class="volthumb" style="left:${w?0:x}%"></div>
                    <input class="vol" type="range" min="0" max="100" step="1"
                        .value=${String(w?0:x)} @input=${this._changeVolumeInput} />
                </div>
                <button class="spk" @click=${this._toggleMute}>
                    ${w?St:kt}
                </button>
            </div>
        `}_seekClick(t){var e,i,s;const o=t.currentTarget.getBoundingClientRect(),r=Math.max(0,Math.min(1,(t.clientX-o.left)/o.width)),a=null!==(s=null===(i=null===(e=this.entity)||void 0===e?void 0:e.attributes)||void 0===i?void 0:i.media_duration)&&void 0!==s?s:0;a&&(this._pct=100*r,this.hass.callService("media_player","media_seek",{entity_id:this.entity.entity_id,seek_position:Math.round(r*a)}))}_changeVolumeInput(t){const e=Number(t.target.value);this._volLocal=e,clearTimeout(this._volClearTimer),this._volClearTimer=window.setTimeout(()=>{this._volLocal=void 0,this.requestUpdate()},1500),this._volPending=e,void 0===this._volSendTimer&&(this._volSendTimer=window.setTimeout(()=>{this._volSendTimer=void 0,this.hass.callService("media_player","volume_set",{entity_id:this.entity.entity_id,volume_level:this._volPending/100})},150))}async _changeRepeat(){var t,e;let i;switch(null===(e=null===(t=this.entity)||void 0===t?void 0:t.attributes)||void 0===e?void 0:e.repeat){case"off":i="one";break;case"one":i="all";break;case"all":i="off"}this._repeatActive="off"!==i,this.hass.callService("media_player","repeat_set",{entity_id:this.entity.entity_id,repeat:i}),this.requestUpdate()}async _likeSong(){var t;await this.hass.callService("ytube_music_player","rate_track",{entity_id:null===(t=this.entity)||void 0===t?void 0:t.entity_id,rating:"thumb_toggle_up_middle"}),this.requestUpdate()}_openQueueOptions(){this.dispatchEvent(new CustomEvent("ytmusic-queue-options",{bubbles:!0,composed:!0}))}async _shuffleList(){var t,e;const i=null===(e=null===(t=this.entity)||void 0===t?void 0:t.attributes)||void 0===e?void 0:e.shuffle;this._shuffleActive=!i,this.hass.callService("media_player","shuffle_set",{entity_id:this.entity.entity_id,shuffle:!i}),this.requestUpdate()}async _skipNext(){this.hass.callService("media_player","media_next_track",{entity_id:this.entity.entity_id})}async _startRadio(){var t,e;await this.hass.callService("media_player","shuffle_set",{entity_id:this.entity.entity_id,shuffle:!1}),this.hass.callService("media_player","play_media",{entity_id:this.entity.entity_id,media_content_id:null===(e=null===(t=this.entity)||void 0===t?void 0:t.attributes)||void 0===e?void 0:e.videoId,media_content_type:"vid_channel"})}async _toggleMute(){var t,e;this.hass.callService("media_player","volume_mute",{entity_id:this.entity.entity_id,is_volume_muted:!(null===(e=null===(t=this.entity)||void 0===t?void 0:t.attributes)||void 0===e?void 0:e.is_volume_muted)})}async _trackProgress(){var t,e,i,s,o,r,a;const n=Date.now(),l=Date.parse(null===(e=null===(t=this.entity)||void 0===t?void 0:t.attributes)||void 0===e?void 0:e.media_position_updated_at),c=null===(s=null===(i=this.entity)||void 0===i?void 0:i.attributes)||void 0===s?void 0:s.media_duration,d=null===(r=null===(o=this.entity)||void 0===o?void 0:o.attributes)||void 0===r?void 0:r.media_position;if(null!=d){const t="playing"===(null===(a=this.entity)||void 0===a?void 0:a.state)?d+(n-l)/1e3:d;this.progressTime=Ct(t),c&&(this._pct=Math.min(t/c*100,100))}this.tracker||(this.tracker=setInterval(()=>this._trackProgress(),1e3))}async _skipPrevious(){this.hass.callService("media_player","media_previous_track",{entity_id:this.entity.entity_id})}async _togglePlayPause(){this.hass.callService("media_player","media_play_pause",{entity_id:this.entity.entity_id})}static get styles(){return[a`
                :host {
                    display: grid;
                    gap: 14px;
                    padding-bottom: 16px;
                    --yt-red: var(--yt-red, #ff0000);
                }

                /* ---- wavy progress ---- */
                .wavebar {
                    display: grid;
                    grid-template-columns: min-content 1fr min-content;
                    align-items: center;
                    gap: 8px;
                }
                .wavebar .t {
                    font-size: 11px;
                    color: var(--secondary-text-color, #9a9a9a);
                    white-space: nowrap;
                }
                .wave-wrap {
                    position: relative;
                    height: 24px;
                    cursor: pointer;
                }
                .wlayer {
                    position: absolute;
                    left: 0;
                    top: 0;
                    height: 100%;
                    overflow: hidden;
                }
                .wlayer.grey { right: 0; }
                .wlayer svg.wave {
                    height: 100%;
                    width: 800px;
                    display: block;
                }
                .wave-wrap.playing svg.wave {
                    animation: wave-flow 1s linear infinite;
                }
                @keyframes wave-flow {
                    from { transform: translateX(0); }
                    to { transform: translateX(-40px); }
                }
                .whandle {
                    position: absolute;
                    top: 50%;
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    background: var(--yt-red, #ff0000);
                    transform: translate(-50%, -50%);
                    box-shadow: 0 0 8px rgba(255, 0, 0, 0.6);
                    pointer-events: none;
                }

                /* ---- transport ---- */
                .controls {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 16px;
                }
                .sq, .playbtn {
                    border: none;
                    cursor: pointer;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    color: #fff;
                }
                .sq {
                    width: 52px;
                    height: 44px;
                    border-radius: 14px;
                    background: #2c2c2e;
                }
                .sq:hover { background: #3a3a3c; }
                .playbtn {
                    width: 96px;
                    height: 52px;
                    border-radius: 16px;
                    background: var(--yt-red, #ff0000);
                    box-shadow: 0 6px 18px rgba(255, 0, 0, 0.4);
                }
                .playbtn:hover { filter: brightness(1.08); }
                .sq svg { width: 24px; height: 24px; fill: currentColor; }
                .playbtn svg { width: 30px; height: 30px; fill: currentColor; }

                /* ---- pills ---- */
                .pills {
                    display: flex;
                    justify-content: center;
                    gap: 8px;
                    flex-wrap: wrap;
                }
                .pill {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    padding: 7px 13px;
                    border-radius: 18px;
                    background: #1f1f1f;
                    border: 1px solid #333;
                    color: #fff;
                    font-size: 12px;
                    font-weight: 600;
                    cursor: pointer;
                }
                .pill svg { width: 16px; height: 16px; fill: currentColor; }
                .pill-icon { padding: 7px 9px; --mdc-icon-size: 18px; }
                .pill-icon ha-icon { display: flex; }
                .pill.on {
                    background: rgba(255, 0, 0, 0.14);
                    border-color: var(--yt-red, #ff0000);
                }
                .pill.on svg { fill: var(--yt-red, #ff0000); }

                /* ---- volume ---- */
                .volume {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                .radio-btn, .spk {
                    background: none;
                    border: none;
                    cursor: pointer;
                    color: var(--primary-text-color, #fff);
                    display: inline-flex;
                    padding: 2px;
                }
                .radio-btn svg, .spk svg { width: 22px; height: 22px; fill: currentColor; }
                .spk { color: var(--yt-red, #ff0000); }
                .volwrap {
                    position: relative;
                    flex: 1;
                    height: 26px;
                    border-radius: 13px;
                    background: #2a2f3a;
                    overflow: hidden;
                }
                .volfill {
                    position: absolute;
                    left: 0; top: 0; bottom: 0;
                    background: var(--yt-red, #ff0000);
                    opacity: 0.85;
                    border-radius: 13px;
                }
                .volthumb {
                    position: absolute;
                    top: 3px;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: #fff;
                    transform: translateX(-50%);
                    pointer-events: none;
                }
                .vol {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    margin: 0;
                    opacity: 0;
                    cursor: pointer;
                }
            `]}};t([dt()],zt.prototype,"hass",void 0),t([dt()],zt.prototype,"entity",void 0),t([pt()],zt.prototype,"_repeatActive",void 0),t([pt()],zt.prototype,"_shuffleActive",void 0),t([pt()],zt.prototype,"_pct",void 0),t([pt()],zt.prototype,"_volLocal",void 0),t([dt()],zt.prototype,"progressTime",void 0),zt=t([lt("ytmusic-media-control")],zt);let Et=class extends at{constructor(){super(...arguments),this.hideSearch=!1,this._browseHistory=[],this._previousBrowseHistory=[]}updated(t){t.has("initialAction")?(this._browseHistory=[],this._previousBrowseHistory=[],this._browse(this.initialAction)):t.has("entity")&&this.entity&&this.initialAction&&0===this._browseHistory.length&&this._browse(this.initialAction)}firstUpdated(t){this._polrYTubeList=this.renderRoot.querySelector("ytmusic-list"),this._searchTextField=this.renderRoot.querySelector("#query")}render(){return V`
            <div class="container">
                ${this._renderSearch()} ${this._renderNavigation()}
                ${this._renderPlay()}
                <ytmusic-list
                    .hass=${this.hass}
                    .entity=${this.entity}
                    @navigate=${t=>this._browse(t.detail.action)}
                    .grid=${this.coverNavigation}
                    columns=${this.coverNavigation?"3":"1"}
                ></ytmusic-list>
            </div>
        `}_renderSearch(){return this.hideSearch?j:V`
            <div class="search">
                <div class="search-input-wrap">
                    <ha-icon icon="mdi:magnify" class="search-icon"></ha-icon>
                    <input
                        type="search"
                        id="query"
                        placeholder="Search..."
                        @keyup="${this._handleSearchInput}"
                    />
                </div>
                <select id="filter" @change=${this._search}>
                    <option value="all">All</option>
                    <option value="artists">Artists</option>
                    <option value="songs" selected>Songs</option>
                    <option value="albums">Albums</option>
                    <option value="playlists">Playlists</option>
                </select>
            </div>
        `}loadElement(t){this._browseHistory=[],this._isSearchResults=!1,this._browse(t)}async searchExternal(t,e="all"){var i;if(!t||""===t)return;const s={entity_id:null===(i=this.entity)||void 0===i?void 0:i.entity_id,query:t,limit:40};"all"!==e&&(s.filter=e),await this.hass.callService("ytube_music_player","search",s),await this._fetchSearchResults()}async _browse(t){var e;if(this._polrYTubeList&&this.entity){if(this._polrYTubeList.state=4,this._browseHistory.push(t),(null===(e=t.children)||void 0===e?void 0:e.length)>0)this._polrYTubeList.elements=t.children,this._polrYTubeList.state=2;else try{const e={type:"media_player/browse_media",entity_id:this.entity.entity_id};null!=t.media_content_type&&(e.media_content_type=t.media_content_type),null!=t.media_content_id&&(e.media_content_id=t.media_content_id);const i=await this.hass.callWS(e);this._polrYTubeList.elements=i.children,this._polrYTubeList.state=2}catch(e){this._polrYTubeList.state=16,console.error(e,t.media_content_type,t.media_content_id)}this.requestUpdate()}}async _fetchSearchResults(){var t,e;this._polrYTubeList.state=4;try{let i=await this.hass.callWS({type:"media_player/browse_media",entity_id:null===(t=this.entity)||void 0===t?void 0:t.entity_id,media_content_type:"search",media_content_id:""});(null===(e=i.children)||void 0===e?void 0:e.length)>0?(i.children=i.children.filter(t=>!t.media_content_id.startsWith("MPSP")),this._isSearchResults||(this._previousBrowseHistory=this._browseHistory),this._isSearchResults=!0,this._browseHistory=[],this._browse(i),this.requestUpdate()):this._polrYTubeList.state=8}catch(t){this._polrYTubeList.state=16,console.error(t)}}_renderNavigation(){if(this._browseHistory.length<=1&&!this._isSearchResults)return V``;let t;t=this._browseHistory.length>2?[this._browseHistory[0].title,"...",this._browseHistory[this._browseHistory.length-1].title]:this._browseHistory.map(t=>t.title);let e=V`
            ${
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function*(t,e){const i="function"==typeof e;if(void 0!==t){let s=-1;for(const o of t)s>-1&&(yield i?e(s):e),s++,yield o}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */(function*(t,e){if(void 0!==t){let i=0;for(const s of t)yield e(s,i++)}}(t,t=>V`<span class="crumb">${t}</span>`),V`<span class="separator">/</span>`)}
        `;return V`
            <div class="navigation-row">
                ${this._isSearchResults?V`
                          <button
                              class="icon-btn"
                              @click=${()=>{this._isSearchResults=!1,this._browseHistory=this._previousBrowseHistory,this._searchTextField.value="",this._browse(this._browseHistory.pop())}}
                          >
                              ${mt}
                          </button>
                      `:j}
                ${this._browseHistory.length>1?V`
                          <button
                              class="icon-btn"
                              @click=${()=>this._browse(this._browseHistory.pop()&&this._browseHistory.pop())}
                          >
                              ${vt}
                          </button>
                      `:j}
                ${this._browseHistory.length>1||this._isSearchResults?V`<div class="breadcrumb">${e}</div>`:j}
            </div>
        `}_renderPlay(){const t=this._browseHistory[this._browseHistory.length-1];if(null==t?void 0:t.can_play)return V`
                <div class="playable_result">
                    ${t.title}
                    <button
                        class="play-btn"
                        @click=${()=>this.hass.callService("media_player","play_media",{entity_id:this.entity.entity_id,media_content_id:t.media_content_id,media_content_type:t.media_content_type})}
                    >
                        Play
                    </button>
                </div>
            `}_handleSearchInput(t){13==t.keyCode&&(this._search(),this._searchTextField.blur())}async _search(){var t,e,i,s;const o=null===(t=this.shadowRoot.querySelector("#query"))||void 0===t?void 0:t.value,r=null===(e=this.renderRoot.querySelector("#filter"))||void 0===e?void 0:e.value;if(!o||""==o)return;let a;a="all"==r?{entity_id:null===(i=this.entity)||void 0===i?void 0:i.entity_id,query:o,limit:40}:{entity_id:null===(s=this.entity)||void 0===s?void 0:s.entity_id,query:o,filter:r,limit:40},await this.hass.callService("ytube_music_player","search",a),this._fetchSearchResults()}static get styles(){return[a`
                .container {
                    display: flex;
                    overflow: auto;
                    flex-grow: 1;
                    min-height: 0;
                    flex-direction: column;
                    gap: 8px;
                }

                .navigation-row {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    justify-content: flex-start;
                }

                .breadcrumb {
                    display: flex;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    align-items: center;
                    margin-left: 4px;
                }

                .crumb {
                    background-color: rgba(111, 111, 111, 0.2);
                    padding: 4px 8px;
                    border-radius: 4px;
                    text-transform: uppercase;
                    font-size: 10px;
                    font-weight: bold;
                }

                .separator {
                    font-weight: bold;
                    padding: 4px;
                }

                .search {
                    display: grid;
                    grid-template-columns: minmax(0, 1fr) auto;
                    align-items: center;
                    gap: 8px;
                    padding: 8px 12px 4px;
                }

                .search-input-wrap {
                    display: flex;
                    align-items: center;
                    background: var(--yt-surface2, #282828);
                    border: 1px solid rgba(255,255,255,0.12);
                    border-radius: 24px;
                    padding: 0 14px;
                    height: 40px;
                    gap: 8px;
                    box-sizing: border-box;
                }

                .search-input-wrap input {
                    flex: 1;
                    background: none;
                    border: none;
                    outline: none;
                    color: var(--primary-text-color);
                    font-size: 14px;
                    height: 100%;
                }

                .search-input-wrap ha-icon {
                    --mdc-icon-size: 18px;
                    opacity: 0.6;
                }

                select {
                    height: 40px;
                    min-width: 112px;
                    background: var(--yt-surface2, #282828);
                    border: 1px solid rgba(255,255,255,0.12);
                    border-radius: 20px;
                    color: var(--primary-text-color, #ffffff);
                    font-size: 14px;
                    padding: 0 12px;
                    cursor: pointer;
                    outline: none;
                    width: 100%;
                }

                .playable_result {
                    display: inline-flex;
                    justify-content: space-between;
                    align-items: center;
                }

                ytmusic-list {
                    flex: 1;
                    min-height: 0;
                    overflow: auto;
                }

                .icon-btn {
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 6px;
                    border-radius: 50%;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--primary-text-color);
                    width: 30px;
                    height: 30px;
                }

                .icon-btn:hover {
                    background: rgba(var(--rgb-primary-text-color), 0.08);
                }

                .icon-btn svg {
                    width: 20px;
                    height: 20px;
                    fill: currentColor;
                }

                .play-btn {
                    background: var(--primary-color);
                    color: var(--text-primary-color);
                    border: none;
                    border-radius: 4px;
                    padding: 6px 16px;
                    cursor: pointer;
                    font-size: 14px;
                    font-weight: bold;
                }

                .play-btn:hover {
                    opacity: 0.9;
                }
            `]}};t([pt()],Et.prototype,"entity",void 0),t([pt()],Et.prototype,"hass",void 0),t([dt()],Et.prototype,"initialAction",void 0),t([dt()],Et.prototype,"coverNavigation",void 0),t([dt({type:Boolean})],Et.prototype,"hideSearch",void 0),t([pt()],Et.prototype,"initialElements",void 0),t([pt()],Et.prototype,"_browseHistory",void 0),t([pt()],Et.prototype,"_previousBrowseHistory",void 0),t([pt()],Et.prototype,"_polrYTubeList",void 0),t([pt()],Et.prototype,"_searchTextField",void 0),t([pt()],Et.prototype,"_isSearchResults",void 0),Et=t([lt("ytmusic-browser")],Et);const Tt=["show_search","show_queue","queue_actions","enqueue_menu","media_browser","players","favorites","follow_active","show_chips","cover_animation","cover_glow","fs_visualizer","mini_view_enabled"],It={it:{entity_id:"Entità (media player)",header:"Titolo",speakers:"Casse mostrate (vuoto = tutte)",show_search:"Mostra tasto Cerca",show_queue:"Mostra tab In coda",queue_actions:"Azioni sulla coda (sposta/rimuovi)",enqueue_menu:"Menu Aggiungi/Riproduci (ricerca e categorie)",media_browser:"Browser avanzato (Consigliati/Recenti/Libreria)",players:"Casse multi-room (raggruppa + volume)",favorites:"Tasto preferito sul brano corrente",follow_active:"Segui la cassa attiva (dopo il trasferimento)",show_chips:"Mostra chip categorie",cover_animation:"Anima copertina (ondeggia)",cover_glow:"Alone colorato dietro la copertina",fs_visualizer:"Animazioni Winamp a schermo intero (OFF = copertina normale)",mini_view_enabled:"Abilita vista compatta",default_view:"Vista predefinita",anim_speed:"Velocità animazione copertina (secondi)",glow_size:"Dimensione alone (%)"},en:{entity_id:"Entity (media player)",header:"Header",speakers:"Shown players (empty = all)",show_search:"Show search button",show_queue:"Show queue tab",queue_actions:"Queue actions (move/remove)",enqueue_menu:"Add/Play menu (search & categories)",media_browser:"Advanced browser (Recommendations/Recent/Library)",players:"Multi-room players (group + volume)",favorites:"Favorite button on current track",follow_active:"Follow the active player (after transfer)",show_chips:"Show category chips",cover_animation:"Animate cover (undulate)",cover_glow:"Colored halo behind the cover",fs_visualizer:"Fullscreen Winamp visualizer (OFF = normal cover)",mini_view_enabled:"Enable compact mini view",default_view:"Default view",anim_speed:"Cover animation speed (seconds)",glow_size:"Halo size (%)"}};class Rt extends at{constructor(){super(...arguments),this._config={},this._computeLabel=t=>{var e;return null!==(e=It[(navigator.language||"en").toLowerCase().startsWith("it")?"it":"en"][t.name])&&void 0!==e?e:t.name}}setConfig(t){this._config=t||{}}set hass(t){this._hass=t}get hass(){return this._hass}get _schema(){return[{name:"entity_id",required:!0,selector:{entity:{domain:"media_player"}}},{name:"header",selector:{text:{}}},{name:"speakers",selector:{entity:{domain:"media_player",multiple:!0}}},...Tt.map(t=>({name:t,selector:{boolean:{}}})),{name:"default_view",selector:{select:{options:[{label:"Full",value:"full"},{label:"Mini",value:"mini"}]}}},{name:"anim_speed",selector:{number:{min:2,max:15,step:.5,mode:"box",unit_of_measurement:"s"}}},{name:"glow_size",selector:{number:{min:60,max:160,step:5,mode:"box",unit_of_measurement:"%"}}}]}get _data(){var t,e,i;const s=Object.assign({},this._config);for(const t of Tt)s[t]=!1!==this._config[t];return s.default_view=null!==(t=this._config.default_view)&&void 0!==t?t:"full",s.anim_speed=null!==(e=this._config.anim_speed)&&void 0!==e?e:6,s.glow_size=null!==(i=this._config.glow_size)&&void 0!==i?i:100,s}_valueChanged(t){t.stopPropagation();const e=Object.assign({},t.detail.value);this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0}))}render(){return this._hass?V`
            <ha-form
                .hass=${this._hass}
                .data=${this._data}
                .schema=${this._schema}
                .computeLabel=${this._computeLabel}
                @value-changed=${this._valueChanged}
            ></ha-form>
        `:j}}t([pt()],Rt.prototype,"_config",void 0),t([pt()],Rt.prototype,"_hass",void 0),customElements.define("ytmusic-playing-card-editor",Rt);const Ot={it:["Per te","Scelte rapide","Dalla community","Radio per te","Playlist","Recenti"],en:["For You","Quick picks","From the community","Radio for you","Playlists","Recent"]},Ht={it:"Brani, album, artisti...",en:"Songs, albums, artists..."};function Vt(){return(navigator.language||"en").toLowerCase().startsWith("it")?"it":"en"}const Ft=function(){var t;const e=Vt(),i=null!==(t=Ot[e])&&void 0!==t?t:Ot.en;return[{label:i[0],source:"root",titleKey:"home"},{label:i[1],source:"home",titleKey:"scelte"},{label:i[2],source:"home",titleKey:"community"},{label:i[3],source:"home",titleKey:"radio"},{label:i[4],source:"root",titleKey:"playlist"},{label:i[5],source:"root",titleKey:"last played"}]}(),Nt=V`
    <svg viewBox="0 0 24 24" class="yt-icon" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FF0000" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
    </svg>
`,jt={it:{nowPlaying:"In riproduzione",tabPlay:"Riproduzione",queue:"In coda",noQueue:"Nessuna coda attiva"},en:{nowPlaying:"Now Playing",tabPlay:"Playing",queue:"Queue",noQueue:"No active queue"}};function Ut(t){var e,i;return null!==(i=(null!==(e=jt[Vt()])&&void 0!==e?e:jt.en)[t])&&void 0!==i?i:t}const Bt={it:{artists:"Artisti",albums:"Album",tracks:"Brani",playlists:"Playlist","radio stations":"Radio",radios:"Radio",audiobooks:"Audiolibri",podcasts:"Podcast",favorites:"Preferiti"}};function Qt(t){var e;const i=Bt[Vt()];return i&&null!==(e=i[(null!=t?t:"").toLowerCase()])&&void 0!==e?e:t}const Wt={it:[{label:"Tutto",value:""},{label:"Brani",value:"track"},{label:"Album",value:"album"},{label:"Artisti",value:"artist"},{label:"Playlist",value:"playlist"},{label:"Radio",value:"radio"}],en:[{label:"All",value:""},{label:"Tracks",value:"track"},{label:"Albums",value:"album"},{label:"Artists",value:"artist"},{label:"Playlists",value:"playlist"},{label:"Radios",value:"radio"}]};class Yt extends at{constructor(){super(...arguments),this._config={},this._menuOpen=null,this._playerExpanded=!0,this._showQueue=!1,this._queueTracks=[],this._queueLoading=!1,this._queueCurrentIndex=-1,this._activeFilter=0,this._popupOpen=!1,this._popupLoading=!1,this._popupItems=[],this._popupTitle="",this._popupStack=[],this._categories=[],this._searchOpen=!1,this._searchQuery="",this._searchType="",this._searchResults=[],this._searchLoading=!1,this._searchActive=!1,this._enqueueItem=null,this._playersOpen=!1,this._playersSig="",this._queueMenuOpen=!1,this._transferMode=!1,this._rootItems=[],this._homeItems=[],this._rootLoaded=!1,this._followId=null,this._curFav=!1,this._curFavLibId=null,this._favTrackId=null,this._groupVolume=null,this._nudgeTarget=null,this._massQueueCfg=null,this._isFs=!1,this._onFsChange=()=>{this._isFs=this.matches(":fullscreen"),this._isFs?this._startViz():this._stopViz()},this._vizStyle="bars",this._vizLabelUntil=0,this._vizRaf=0,this._vizLast=0,this._vizV=[],this._vizP=[],this._vizN=[],this._vizFrame=t=>{var e;if(this._vizRaf=0,!this._isFs||!this.isConnected)return;const i=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".fp-viz");i&&t-this._vizLast>33&&(this._vizLast=t,this._drawViz(i)),this._vizRaf=requestAnimationFrame(this._vizFrame)},this._maConfigEntryIdByEntity={}}_cycleViz(t){t.stopPropagation();const e=this.constructor.VIZ_ORDER;this._vizStyle=e[(e.indexOf(this._vizStyle)+1)%e.length],this._vizLabelUntil=performance.now()+1500;try{localStorage.setItem("ytmusic-card-viz",this._vizStyle)}catch(t){}}_startViz(){this._vizRaf||(this._vizRaf=requestAnimationFrame(this._vizFrame))}_stopViz(){this._vizRaf&&(cancelAnimationFrame(this._vizRaf),this._vizRaf=0)}_drawViz(t){var e;const i=t.clientWidth,s=t.clientHeight;if(!i||!s)return;t.width===i&&t.height===s||(t.width=i,t.height=s);const o=t.getContext("2d");if(!o)return;o.clearRect(0,0,i,s);const r=performance.now(),a="playing"===(null===(e=this._entity)||void 0===e?void 0:e.state),n=.55+.45*Math.abs(Math.sin(.0011*r))*(.7+.3*Math.sin(23e-5*r));switch(this._vizStyle){case"bars":this._drawBars(o,i,s,a,n);break;case"solid":this._drawSolid(o,i,s,a,n);break;case"wave":this._drawWave(o,i,s,a,n);break;case"mirror":this._drawMirror(o,i,s,a,n);break;case"fire":this._drawFire(o,i,s,a,n)}if(r<this._vizLabelUntil){const t=this.constructor.VIZ_NAMES[this._vizStyle];o.font="bold 13px monospace",o.fillStyle="#aaffaa",o.textAlign="center",o.fillText(t?t["it"===Vt()?0:1]:"",i/2,18),o.textAlign="left"}}_vizLevels(t,e,i){this._vizV.length!==t&&(this._vizV=new Array(t).fill(0),this._vizP=new Array(t).fill(0),this._vizN=new Array(t).fill(.4));const s=this._vizN,o=this._vizV,r=this._vizP;for(let e=0;e<t;e++)s[e]=Math.min(1,Math.max(0,s[e]+.34*(Math.random()-.5)));for(let a=0;a<t;a++){const n=(s[(a+t-1)%t]+2*s[a]+s[(a+1)%t])/4,l=.55+.45*(1-Math.abs(a-t/2)/(t/2)),c=e?Math.min(1,n*l*i*1.5):0;o[a]=c>o[a]?o[a]+.5*(c-o[a]):Math.max(0,o[a]-.05),r[a]=Math.max(r[a]-.015,o[a])}return o}_vizColor(t){return t<.55?"#22cc44":t<.8?"#f0d030":"#f23333"}_drawBars(t,e,i,s,o){const r=this._vizLevels(48,s,o),a=this._vizP,n=e/48;for(let e=0;e<48;e++){const s=e*n,o=r[e]*i;for(let e=0;e+4<=o;e+=5)t.fillStyle=this._vizColor(e/i),t.fillRect(s,i-e-4,n-2,4);a[e]>.02&&(t.fillStyle="#cfcfcf",t.fillRect(s,i-a[e]*i-2,n-2,2))}}_drawSolid(t,e,i,s,o){const r=this._vizLevels(48,s,o),a=this._vizP,n=e/48,l=t.createLinearGradient(0,i,0,0);l.addColorStop(0,"#22cc44"),l.addColorStop(.6,"#f0d030"),l.addColorStop(1,"#f23333"),t.fillStyle=l;for(let e=0;e<48;e++){const s=r[e]*i;t.fillRect(e*n+1,i-s,n-2,s)}t.fillStyle="#ffffff";for(let e=0;e<48;e++)a[e]>.02&&t.fillRect(e*n+1,i-a[e]*i-2,n-2,2)}_drawWave(t,e,i,s,o){const r=this._vizLevels(64,s,o),a=t.createLinearGradient(0,0,0,i);a.addColorStop(0,"rgba(34,220,68,0.85)"),a.addColorStop(1,"rgba(34,220,68,0.05)"),t.beginPath(),t.moveTo(0,i),t.lineTo(0,i-r[0]*i*.9);for(let s=1;s<64;s++){const o=(s-1)/63*e,a=s/63*e,n=i-r[s-1]*i*.9,l=i-r[s]*i*.9;t.quadraticCurveTo(o,n,(o+a)/2,(n+l)/2)}t.lineTo(e,i),t.closePath(),t.fillStyle=a,t.fill(),t.strokeStyle="#22dd44",t.lineWidth=2,t.stroke()}_drawMirror(t,e,i,s,o){const r=this._vizLevels(48,s,o),a=e/48,n=i/2;for(let e=0;e<48;e++){const i=e*a,s=r[e]*n;t.fillStyle=this._vizColor(r[e]),t.fillRect(i+1,n-s,a-2,s),t.globalAlpha=.55,t.fillRect(i+1,n,a-2,s),t.globalAlpha=1}t.fillStyle="rgba(255,255,255,0.35)",t.fillRect(0,n-1,e,2)}_drawFire(t,e,i,s,o){const r=this._vizLevels(48,s,o),a=e/48,n=t.createLinearGradient(0,i,0,0);n.addColorStop(0,"#801100"),n.addColorStop(.35,"#ff3300"),n.addColorStop(.7,"#ff9900"),n.addColorStop(1,"#ffe45c"),t.fillStyle=n;for(let e=0;e<48;e++){const o=s?.85+.15*Math.random():1,n=r[e]*i*o;t.fillRect(e*a,i-n,a-1,n)}if(s){t.fillStyle="#ffb84d";for(let e=0;e<48;e++)Math.random()<.12&&r[e]>.15&&t.fillRect(e*a+Math.random()*a,i-r[e]*i-4-14*Math.random(),2,2)}}connectedCallback(){super.connectedCallback(),document.addEventListener("fullscreenchange",this._onFsChange),this.addEventListener("fullscreenchange",this._onFsChange);try{const t=localStorage.getItem("ytmusic-card-viz");t&&this.constructor.VIZ_ORDER.includes(t)&&(this._vizStyle=t)}catch(t){}}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("fullscreenchange",this._onFsChange),this.removeEventListener("fullscreenchange",this._onFsChange),this._stopViz()}_toggleFullscreen(){var t,e;this.matches(":fullscreen")?null===(t=document.exitFullscreen)||void 0===t||t.call(document):null===(e=this.requestFullscreen)||void 0===e||e.call(this).catch(()=>{})}get _pid(){var t;return(null===(t=this._entity)||void 0===t?void 0:t.entity_id)||this._config.entity_id}_queueOwner(t){var e,i,s,o;const r=t||this._pid,a=(null===(o=null===(s=null===(i=null===(e=this._hass)||void 0===e?void 0:e.states)||void 0===i?void 0:i[r])||void 0===s?void 0:s.attributes)||void 0===o?void 0:o.group_members)||[];return a.length?a[0]:r}_maLive(t){var e,i;const s=null===(i=null===(e=this._hass)||void 0===e?void 0:e.states)||void 0===i?void 0:i[t];return!(!s||"playing"!==s.state&&"paused"!==s.state&&"buffering"!==s.state)}_maPlayingCandidates(){var t,e,i,s;const o=(null===(t=this._hass)||void 0===t?void 0:t.states)||{},r=(null===(e=this._hass)||void 0===e?void 0:e.entities)||{},a=this._config.speakers,n=Array.isArray(a)&&a.length>0,l=[];for(const[t,e]of Object.entries(o)){if(!t.startsWith("media_player."))continue;if("playing"!==e.state)continue;(void 0!==(null===(i=e.attributes)||void 0===i?void 0:i.mass_player_type)||"music_assistant"===(null===(s=r[t])||void 0===s?void 0:s.platform))&&(n&&!a.includes(t)||l.push(t))}return l}_pickActive(){var t,e,i,s,o;const r=this._config.entity_id,a=null===(e=null===(t=this._hass)||void 0===t?void 0:t.states)||void 0===e?void 0:e[r];if(!(void 0!==(null===(i=null==a?void 0:a.attributes)||void 0===i?void 0:i.mass_player_type)))return r;if(this._followId&&this._followId!==r&&this._maLive(this._followId))return this._followId;if(this._maLive(r))return this._followId=null,r;if(this._followId&&(null===(o=null===(s=this._hass)||void 0===s?void 0:s.states)||void 0===o?void 0:o[this._followId]))return this._followId;if(this._feat("follow_active")){const t=this._maPlayingCandidates();if(1===t.length)return t[0]}return r}async _getMassQueueCfg(){if(this._massQueueCfg)return this._massQueueCfg;try{const t=await this._hass.callWS({type:"config_entries/get",domain:"mass_queue"}),e=Array.isArray(t)?t:(null==t?void 0:t.entries)||(null==t?void 0:t.data)||[],i=e.find(t=>"mass_queue"===t.domain)||e[0],s=i&&(i.entry_id||i.entryId||i.id);if(s)return this._massQueueCfg=s,s}catch(t){}return null}_canFavorite(){var t,e;const i=null===(e=null===(t=this._entity)||void 0===t?void 0:t.attributes)||void 0===e?void 0:e.media_content_id;return this._isMA&&this._feat("favorites")&&!!i&&/\/track\//.test(i)}_maybeRefreshFav(){var t,e;if(!this._isMA||!this._feat("favorites"))return void(this._curFav=!1);const i=null===(e=null===(t=this._entity)||void 0===t?void 0:t.attributes)||void 0===e?void 0:e.media_content_id;if(!i||!/\/track\//.test(i))return this._curFav=!1,this._curFavLibId=null,void(this._favTrackId=i||null);i!==this._favTrackId&&(this._favTrackId=i,this._refreshFav(i))}async _resolveFavLibId(t){var e;const i=await this._getMAConfigEntryId(this._pid);if(!i)return null;const s=await this._hass.callWS({type:"call_service",domain:"music_assistant",service:"get_library",service_data:{config_entry_id:i,media_type:"track",favorite:!0,search:t},return_response:!0}),o=((null===(e=null==s?void 0:s.response)||void 0===e?void 0:e.items)||[]).find(e=>(e.name||"").toLowerCase()===(t||"").toLowerCase());return o&&String(o.uri||"").split("/").pop()||null}async _refreshFav(t){var e,i,s,o;const r=null===(i=null===(e=this._entity)||void 0===e?void 0:e.attributes)||void 0===i?void 0:i.media_title;if(r)try{const e=await this._resolveFavLibId(r);if((null===(o=null===(s=this._entity)||void 0===s?void 0:s.attributes)||void 0===o?void 0:o.media_content_id)!==t)return;this._curFav=!!e,this._curFavLibId=e}catch(t){this._curFav=!1,this._curFavLibId=null}}async _toggleFavorite(t){var e,i,s,o;null==t||t.stopPropagation();const r=null===(i=null===(e=this._entity)||void 0===e?void 0:e.attributes)||void 0===i?void 0:i.media_content_id,a=null===(o=null===(s=this._entity)||void 0===s?void 0:s.attributes)||void 0===o?void 0:o.media_title;if(!r)return;const n=await this._getMassQueueCfg();if(!n)return;const l=this._curFav;this._curFav=!l;try{if(l){const t=this._curFavLibId||await this._resolveFavLibId(a);t&&(await this._hass.callService("mass_queue","send_command",{config_entry_id:n,command:"music/favorites/remove_item",data:{media_type:"track",library_item_id:t}}),this._curFavLibId=null)}else await this._hass.callService("mass_queue","send_command",{config_entry_id:n,command:"music/favorites/add_item",data:{item:r}}),setTimeout(async()=>{var t,e;(null===(e=null===(t=this._entity)||void 0===t?void 0:t.attributes)||void 0===e?void 0:e.media_content_id)===r&&(this._curFavLibId=await this._resolveFavLibId(a))},800)}catch(t){console.error("YTMusic: toggle favorite failed",t),this._curFav=l}}_openPlayers(){this._playersOpen=!0,this._refreshGroupVolume()}_groupKey(){var t,e,i,s;const o=this._queueOwner(),r=(null===(s=null===(i=null===(e=null===(t=this._hass)||void 0===t?void 0:t.states)||void 0===e?void 0:e[o])||void 0===i?void 0:i.attributes)||void 0===s?void 0:s.group_members)||[];return r.length>1?[...r].sort().join(","):null}_groupLevels(){var t,e,i,s,o,r,a;const n=this._queueOwner(),l=(null===(s=null===(i=null===(e=null===(t=this._hass)||void 0===t?void 0:t.states)||void 0===e?void 0:e[n])||void 0===i?void 0:i.attributes)||void 0===s?void 0:s.group_members)||[],c={};for(const t of l){const e=null===(r=null===(o=this._hass)||void 0===o?void 0:o.states)||void 0===r?void 0:r[t];if(!e||"off"===e.state||"unavailable"===e.state)continue;const i=null===(a=e.attributes)||void 0===a?void 0:a.volume_level;"number"==typeof i&&(c[t]=i)}return c}_loadGroupFader(t){try{return JSON.parse(localStorage.getItem(`ytmusic-card-groupvol:${t}`)||"null")}catch(t){return null}}_saveGroupFader(t,e){try{localStorage.setItem(`ytmusic-card-groupvol:${t}`,JSON.stringify(e))}catch(t){}}async _refreshGroupVolume(){if(null!=this._nudgeTarget)return void(this._groupVolume=this._nudgeTarget);const t=this._groupKey();if(!t)return void(this._groupVolume=null);let e=this._loadGroupFader(t);if(!e||"number"!=typeof e.f){const i=Object.values(this._groupLevels());if(!i.length)return void(this._groupVolume=null);e={f:Math.max(...i)},this._saveGroupFader(t,e)}this._groupVolume=e.f}_nudgeGroupVolume(t,e){var i;e.stopPropagation();const s=null!==(i=this._nudgeTarget)&&void 0!==i?i:this._groupVolume;if(null===s)return;const o=Math.max(0,Math.min(100,Math.round(100*s)+t))/100;this._nudgeTarget=o,this._groupVolume=o,clearTimeout(this._nudgeTimer),this._nudgeTimer=window.setTimeout(()=>{this._nudgeTarget=null,this._setGroupVolume(o,new Event("nudge"))},350)}_setGroupVolume(t,e){e.stopPropagation();const i=this._groupKey();if(!i)return;const s=this._groupLevels(),o=Object.keys(s),r=this._loadGroupFader(i)||{},a="number"==typeof r.f?r.f:t,n=r.sent||{},l=!!r.snap&&o.length===Object.keys(r.snap).length&&o.every(t=>t in r.snap&&"number"==typeof n[t]),c="number"==typeof r.at&&Date.now()-r.at<3e3,d=l&&(c||o.every(t=>Math.abs(n[t]-s[t])<=.02)),p=d?r.snap:s,u=d?r.snapF:a,h={};for(const e of o){const i=Math.round(100*Math.max(0,Math.min(1,p[e]+(t-u))))/100;h[e]=i;const o=d&&c?n[e]:s[e];Math.abs(i-o)>=.005&&this._hass.callService("media_player","volume_set",{entity_id:e,volume_level:i})}this._groupVolume=t,this._saveGroupFader(i,{f:t,snap:p,snapF:u,sent:h,at:Date.now()})}static getConfigElement(){return document.createElement("ytmusic-playing-card-editor")}static getStubConfig(){return{entity_id:"media_player.ytube_music_player",header:"YouTube Music"}}setConfig(t){if(!t.entity_id)throw new Error("entity_id must be specified");if(this._config=structuredClone(t),"header"in this._config||(this._config.header="YouTube Music"),"mini_view_enabled"in this._config||(this._config.mini_view_enabled=!0),"default_view"in this._config||(this._config.default_view="full"),!1===this._config.mini_view_enabled)this._playerExpanded=!0;else{let t=null;try{t=localStorage.getItem(`ytmusic-card-view:${this._config.entity_id}`)}catch(t){}const e="full"===t||"mini"===t?t:this._config.default_view;this._playerExpanded="mini"!==e}"initialAction"in this._config||(this._config.initialAction=new At,this._config.initialAction.title=Ot[Vt()][0],this._config.initialAction.media_content_type=null,this._config.initialAction.media_content_id=null),"coverNavigation"in this._config||(this._config.coverNavigation=!0)}set hass(t){this._hass=t;const e=this._hass.states[this._pickActive()];if(Lt(this._entity,e,[])||(this._entity=structuredClone(e)),this._maybeRefreshFav(),this._playersOpen){const t=this._maPlayers().map(t=>[t.id,t.state,t.attributes.volume_level,t.attributes.is_volume_muted,(t.attributes.group_members||[]).join(",")].join(":")).join("|");t!==this._playersSig&&(this._playersSig=t,this._refreshGroupVolume())}}updated(t){super.updated(t),t.has("_entity")&&this._entity&&!this._rootLoaded&&(this._rootLoaded=!0,this._loadRoot())}get _isMA(){var t,e;return"music_assistant"===(null===(e=null===(t=this._entity)||void 0===t?void 0:t.attributes)||void 0===e?void 0:e.app_id)}_feat(t){var e;return!1!==(null===(e=this._config)||void 0===e?void 0:e[t])}async _browseInto(t){const e=await this._hass.callWS({type:"media_player/browse_media",entity_id:this._pid,media_content_type:null==t?void 0:t.media_content_type,media_content_id:null==t?void 0:t.media_content_id});return((null==e?void 0:e.children)||[]).filter(t=>{var e;return!(null===(e=t.media_content_id)||void 0===e?void 0:e.startsWith("MPSP"))})}async _loadRoot(){try{const t=await this._hass.callWS({type:"media_player/browse_media",entity_id:this._pid});if(this._rootItems=((null==t?void 0:t.children)||[]).filter(t=>{var e;return!(null===(e=t.media_content_id)||void 0===e?void 0:e.startsWith("MPSP"))}),this._isMA){const t=["tracks","playlists","radio stations","radios"],e=this._rootItems.filter(e=>{var i;return e.can_expand&&t.includes((null!==(i=e.title)&&void 0!==i?i:"").toLowerCase())}).map(t=>({label:Qt(t.title),item:t})),i=[];if(this._feat("media_browser")){const t="it"===Vt();i.push({label:t?"Consigliati":"Recommendations",special:"recommendations"}),i.push({label:t?"Recenti":"Recent",special:"recent"}),i.push({label:t?"Libreria":"Library",special:"library"})}this._categories=[...i,...e]}else{const t=this._rootItems.find(t=>{var e;return"home"===(null===(e=t.title)||void 0===e?void 0:e.toLowerCase())})||this._rootItems[0];if(t)try{this._homeItems=await this._browseInto(t)}catch(t){console.error("YTube: failed to load home sections",t)}const e=t=>{var e;return null!==(e=null==t?void 0:t.toLowerCase())&&void 0!==e?e:""};this._categories=Ft.map((t,i)=>{let s=("home"===t.source?this._homeItems:this._rootItems).find(i=>e(i.title).includes(t.titleKey));return s||0!==i||(s=this._rootItems[0]),{label:t.label,item:s}}).filter(t=>t.item)}}catch(t){console.error("YTMusic: failed to load root items",t)}}_navigateToFilter(t){if(!this._browser||0===this._rootItems.length)return;const e=Ft[t],i="home"===e.source?this._homeItems:this._rootItems;let s=i.find(t=>(t=>{var e;return null!==(e=null==t?void 0:t.toLowerCase())&&void 0!==e?e:""})(t.title).includes(e.titleKey));s||0!==t||(s=this._rootItems[0]),s&&this._browser.loadElement(s)}async _openChipPopup(t,e){this._activeFilter=e,this._popupTitle=t.label,this._popupStack=[],this._popupItems=[],this._popupOpen=!0,this._popupLoading=!0;try{t.special?this._popupItems=await this._maBrowse(t.special):t.item&&(this._popupItems=await this._browseInto(t.item))}catch(t){console.error("YTMusic: chip popup load failed",t)}this._popupLoading=!1}_maItem(t){const e=Array.isArray(t.artists)?t.artists.map(t=>null==t?void 0:t.name).filter(Boolean).join(", "):"",i=t.name||t.title||"";return{title:e?`${e} - ${i}`:i,thumbnail:t.image||t.thumbnail||"",media_content_id:t.uri||t.media_content_id,media_content_type:t.media_type||t.media_content_type||"track"}}async _maBrowse(t){var e,i;const s="it"===Vt();if("recommendations"===t){const t=await this._hass.callWS({type:"call_service",domain:"mass_queue",service:"get_recommendations",service_data:{entity:this._pid},return_response:!0}),i=(null===(e=null==t?void 0:t.response)||void 0===e?void 0:e.response)||(null==t?void 0:t.response)||[];return(Array.isArray(i)?i:[]).map(t=>{const e=(t.items||[]).map(t=>t.image).filter(Boolean);return{title:t.name,thumbnail:t.image||e[0]||"",mosaic:!t.image&&e.length>=4?e.slice(0,4):null,folderIcon:t.image||e.length?"":"mdi:folder-music",children:(t.items||[]).map(t=>this._maItem(t))}})}if("recent"===t){const t=await this._getMAConfigEntryId(this._pid),e=await this._hass.callWS({type:"call_service",domain:"music_assistant",service:"get_library",service_data:{config_entry_id:t,media_type:"track",order_by:"last_played_desc",limit:100},return_response:!0});return((null===(i=null==e?void 0:e.response)||void 0===i?void 0:i.items)||[]).map(t=>this._maItem(t))}if("library"===t){const t=await this._getMAConfigEntryId(this._pid),e=(e,i,s)=>({title:i,folderIcon:s,load:{domain:"music_assistant",service:"get_library",service_data:{config_entry_id:t,media_type:e,limit:300}}});return[e("playlist",s?"Playlist":"Playlists","mdi:playlist-music"),e("album",s?"Album":"Albums","mdi:album"),e("artist",s?"Artisti":"Artists","mdi:account-music"),e("track",s?"Brani":"Tracks","mdi:music-note"),e("radio","Radio","mdi:radio")]}return[]}_popupBack(){const t=this._popupStack[this._popupStack.length-1];t&&(this._popupStack=this._popupStack.slice(0,-1),this._popupTitle=t.title,this._popupItems=t.items)}async _playPopupItem(t){var e;if(t.children)return this._popupStack=[...this._popupStack,{title:this._popupTitle,items:this._popupItems}],this._popupTitle=this._cleanTitle(t.title),void(this._popupItems=t.children);if(t.load){this._popupStack=[...this._popupStack,{title:this._popupTitle,items:this._popupItems}],this._popupTitle=this._cleanTitle(t.title),this._popupItems=[],this._popupLoading=!0;try{const i=await this._hass.callWS(Object.assign(Object.assign({type:"call_service"},t.load),{return_response:!0}));this._popupItems=((null===(e=null==i?void 0:i.response)||void 0===e?void 0:e.items)||[]).map(t=>this._maItem(t))}catch(t){console.error("YTMusic: favorites load failed",t),this._popupItems=[]}this._popupLoading=!1}else this._hass.callService("media_player","play_media",{entity_id:this._pid,media_content_id:t.media_content_id,media_content_type:t.media_content_type}),this._popupOpen=!1}async _getMAConfigEntryId(t){var e,i;if(this._maConfigEntryIdByEntity[t])return this._maConfigEntryIdByEntity[t];const s=null===(i=null===(e=this._hass.entities)||void 0===e?void 0:e[t])||void 0===i?void 0:i.config_entry_id;if(s)return this._maConfigEntryIdByEntity[t]=s,s;try{const e=await this._hass.callWS({type:"config_entries/get",domain:"music_assistant"}),i=Array.isArray(e)?e:(null==e?void 0:e.entries)||(null==e?void 0:e.data)||[],s=i.find(t=>"music_assistant"===t.domain)||i[0],o=s&&(s.entry_id||s.entryId||s.id);if(o)return this._maConfigEntryIdByEntity[t]=o,o}catch(t){console.warn("YTMusic: failed to resolve Music Assistant config entry",t)}return null}async _doSearch(){var t,e,i;const s=this._searchQuery.trim();if(s){this._searchLoading=!0;try{if(this._isMA){const o=await this._getMAConfigEntryId(this._pid);if(o){const i={config_entry_id:o,name:s,limit:20};this._searchType&&(i.media_type=[this._searchType]);const r=await this._hass.callWS({type:"call_service",domain:"music_assistant",service:"search",service_data:i,return_response:!0}),a=(null==r?void 0:r.response)||{},n={track:"tracks",album:"albums",artist:"artists",playlist:"playlists",radio:"radio"},l=this._searchType?[n[this._searchType]]:["tracks","artists","albums","playlists","radio"],c=[];for(const i of l)for(const s of a[i]||[]){const i=null===(e=null===(t=s.artists)||void 0===t?void 0:t[0])||void 0===e?void 0:e.name;c.push({title:i?`${i} - ${s.name}`:s.name,thumbnail:s.image||"",media_content_id:s.uri,media_content_type:s.media_type})}this._searchResults=c}else{const t={entity_id:this._pid,search_query:s};this._searchType&&(t.media_filter_classes=[this._searchType]);const e=await this._hass.callWS({type:"call_service",domain:"media_player",service:"search_media",service_data:t,return_response:!0}),o=null===(i=null==e?void 0:e.response)||void 0===i?void 0:i[this._pid];this._searchResults=((null==o?void 0:o.result)||[]).filter(t=>{var e;return!(null===(e=t.media_content_id)||void 0===e?void 0:e.startsWith("MPSP"))})}}else{const t={track:"songs",album:"albums",artist:"artists",playlist:"playlists"},e={entity_id:this._pid,query:s,limit:40},i=t[this._searchType];i&&(e.filter=i),await this._hass.callService("ytube_music_player","search",e);const o=await this._hass.callWS({type:"media_player/browse_media",entity_id:this._pid,media_content_type:"search",media_content_id:""});this._searchResults=((null==o?void 0:o.children)||[]).filter(t=>{var e;return!(null===(e=t.media_content_id)||void 0===e?void 0:e.startsWith("MPSP"))})}}catch(t){console.error("YTMusic: search failed",t),this._searchResults=[]}this._searchLoading=!1}else this._searchResults=[]}_setSearchType(t){this._searchType=t,this._searchQuery.trim()&&this._doSearch()}_cleanTitle(t){return(t||"").replace(/^(Track|Album|Artist|Playlist|Radio|Video|Brano|Artista|Brani):\s*/i,"")}_playSearchItem(t){this._hass.callService("media_player","play_media",{entity_id:this._pid,media_content_id:t.media_content_id,media_content_type:t.media_content_type}),setTimeout(()=>{this._showQueue&&this._fetchQueue()},1e3)}_enqueueOptions(){const t="it"===Vt();return[{key:"play",icon:"mdi:play",label:t?"Riproduci ora":"Play now"},{key:"next",icon:"mdi:playlist-play",label:t?"Riproduci dopo":"Play next"},{key:"add",icon:"mdi:playlist-plus",label:t?"Aggiungi in coda":"Add to queue"},{key:"replace",icon:"mdi:playlist-remove",label:t?"Riproduci e svuota coda":"Play now & clear queue"},{key:"radio",radio:!0,icon:"mdi:radio-tower",label:"Play radio"}]}_openEnqueueMenu(t,e){e.stopPropagation(),this._enqueueItem=t}_enqueue(t){const e=this._enqueueItem;if(this._enqueueItem=null,!e)return;const i={entity_id:this._pid,media_id:e.media_content_id,media_type:e.media_content_type};t.radio?i.radio_mode=!0:i.enqueue=t.key,this._hass.callService("music_assistant","play_media",i),setTimeout(()=>{this._showQueue&&this._fetchQueue()},1e3)}_renderEnqueueMenu(){var t;return V`
            <div class="chip-popup-backdrop" @click=${()=>{this._enqueueItem=null}}>
                <div class="enq-menu" @click=${t=>t.stopPropagation()}>
                    <div class="cp-handle"></div>
                    <div class="enq-title">${this._cleanTitle((null===(t=this._enqueueItem)||void 0===t?void 0:t.title)||"")}</div>
                    ${this._enqueueOptions().map(t=>V`
                        <button class="enq-opt" @click=${()=>this._enqueue(t)}>
                            <ha-icon icon="${t.icon}"></ha-icon>
                            <span>${t.label}</span>
                        </button>`)}
                </div>
            </div>
        `}_renderSearchPopup(){const t=null!==(e=Wt[Vt()])&&void 0!==e?e:Wt.en;var e;return V`
            <div class="chip-popup-backdrop" @click=${()=>{this._searchOpen=!1}}>
                <div class="chip-popup" @click=${t=>t.stopPropagation()}>
                    <div class="cp-handle"></div>
                    <div class="cp-head">
                        <input class="cp-search" type="text" placeholder="${"it"===Vt()?"Cerca…":"Search…"}"
                            .value=${this._searchQuery}
                            @input=${t=>{this._searchQuery=t.target.value}}
                            @keydown=${t=>{"Enter"===t.key&&this._doSearch()}} />
                        <button class="icon-btn" @click=${()=>this._doSearch()}>
                            <ha-icon icon="mdi:magnify"></ha-icon>
                        </button>
                        <button class="icon-btn" @click=${()=>{this._searchOpen=!1}}>
                            <ha-icon icon="mdi:close"></ha-icon>
                        </button>
                    </div>
                    <div class="cp-types" @wheel=${this._onPillsWheel}>
                        ${t.map(t=>V`
                            <button class="fp-chip ${this._searchType===t.value?"active":""}"
                                @click=${()=>this._setSearchType(t.value)}>${t.label}</button>`)}
                    </div>
                    ${this._searchLoading?V`<div class="cp-msg"><ha-icon icon="mdi:loading" class="spin"></ha-icon></div>`:this._searchResults.length?V`<div class="cp-list">
                                ${this._searchResults.map(t=>V`
                                    <div class="cp-item" @click=${()=>this._playSearchItem(t)}>
                                        ${t.thumbnail?V`<img class="cp-thumb" src="${t.thumbnail}">`:V`<div class="cp-thumb cp-thumb-ph"><ha-icon icon="mdi:music"></ha-icon></div>`}
                                        <div class="cp-info"><div class="cp-t">${this._cleanTitle(t.title)}</div></div>
                                        ${this._isMA&&this._feat("enqueue_menu")?V`<button class="cp-more" @click=${e=>this._openEnqueueMenu(t,e)}><ha-icon icon="mdi:dots-vertical"></ha-icon></button>`:V`<ha-icon icon="mdi:play" class="cp-play"></ha-icon>`}
                                    </div>`)}
                              </div>`:V`<div class="cp-msg">${this._searchQuery?"it"===Vt()?"Nessun risultato":"No results":"it"===Vt()?"Digita per cercare":"Type to search"}</div>`}
                </div>
            </div>
        `}_renderChipPopup(){return V`
            <div class="chip-popup-backdrop" @click=${()=>{this._popupOpen=!1}}>
                <div class="chip-popup" @click=${t=>t.stopPropagation()}>
                    <div class="cp-handle"></div>
                    <div class="cp-head">
                        ${this._popupStack.length?V`<button class="icon-btn" @click=${()=>this._popupBack()}>
                                <ha-icon icon="mdi:arrow-left"></ha-icon></button>`:j}
                        <span class="cp-title">${this._cleanTitle(this._popupTitle)}</span>
                        <button class="icon-btn" @click=${()=>{this._popupOpen=!1}}>
                            <ha-icon icon="mdi:close"></ha-icon>
                        </button>
                    </div>
                    ${this._popupLoading?V`<div class="cp-msg"><ha-icon icon="mdi:loading" class="spin"></ha-icon></div>`:this._popupItems.length?this._popupUsesGrid()?V`<div class="cp-grid">
                                    ${this._popupItems.map(t=>this._renderPopupTile(t))}
                                  </div>`:V`<div class="cp-list">
                                    ${this._popupItems.map(t=>this._renderPopupRow(t))}
                                  </div>`:V`<div class="cp-msg">${"it"===Vt()?"Nessun elemento":"No items"}</div>`}
                </div>
            </div>
        `}_popupUsesGrid(){return this._popupItems.length>0}_renderPopupTile(t){var e;const i=!(!t.children&&!t.load),s=!i&&"track"===(null!==(e=t.media_content_type)&&void 0!==e?e:"track");return V`
            <div class="cp-tile" @click=${()=>this._playPopupItem(t)}>
                <div class="cp-tile-art">
                    ${t.mosaic?V`<div class="cp-mosaic">${t.mosaic.map(t=>V`<img src="${t}">`)}</div>`:t.thumbnail?V`<img src="${t.thumbnail}">`:V`<div class="cp-tile-ph"><ha-icon icon="${t.folderIcon||"mdi:music"}"></ha-icon></div>`}
                    ${i?j:this._isMA&&this._feat("enqueue_menu")?V`<button class="cp-tile-more" @click=${e=>this._openEnqueueMenu(t,e)}>
                                <ha-icon icon="mdi:dots-vertical"></ha-icon></button>`:V`<div class="cp-tile-play"><ha-icon icon="mdi:play"></ha-icon></div>`}
                </div>
                <div class="cp-tile-label ${s?"":"bold"}">${this._cleanTitle(t.title)}</div>
            </div>`}_renderPopupRow(t){const e=!(!t.children&&!t.load);return V`
            <div class="cp-item" @click=${()=>this._playPopupItem(t)}>
                ${t.thumbnail?V`<img class="cp-thumb" src="${t.thumbnail}">`:V`<div class="cp-thumb cp-thumb-ph"><ha-icon icon="${t.folderIcon||"mdi:music"}"></ha-icon></div>`}
                <div class="cp-info"><div class="cp-t">${this._cleanTitle(t.title)}</div></div>
                ${e?V`<ha-icon icon="mdi:chevron-right" class="cp-play"></ha-icon>`:this._isMA&&this._feat("enqueue_menu")?V`<button class="cp-more" @click=${e=>this._openEnqueueMenu(t,e)}><ha-icon icon="mdi:dots-vertical"></ha-icon></button>`:V`<ha-icon icon="mdi:play" class="cp-play"></ha-icon>`}
            </div>`}_maPlayers(){var t,e,i,s,o,r,a,n,l;const c=(null===(t=this._hass)||void 0===t?void 0:t.entities)||{},d=this._config.speakers,p=Array.isArray(d)&&d.length>0,u=[];for(const[t,r]of Object.entries((null===(e=this._hass)||void 0===e?void 0:e.states)||{})){if(!t.startsWith("media_player."))continue;const e=r;if("unavailable"!==e.state&&"unknown"!==e.state){if(p){if(!d.includes(t))continue}else{if(!("music_assistant"===(null===(i=c[t])||void 0===i?void 0:i.platform)||"music_assistant"===(null===(s=e.attributes)||void 0===s?void 0:s.app_id)||Array.isArray(null===(o=e.attributes)||void 0===o?void 0:o.group_members)))continue}u.push({id:t,state:e.state,attributes:e.attributes})}}const h=this._queueOwner(),v=this._pid,_=(null===(l=null===(n=null===(a=null===(r=this._hass)||void 0===r?void 0:r.states)||void 0===a?void 0:a[h])||void 0===n?void 0:n.attributes)||void 0===l?void 0:l.group_members)||[],m=t=>t===h||_.includes(t)?0:1;return u.sort((t,e)=>{if(t.id===h)return-1;if(e.id===h)return 1;const i=m(t.id),s=m(e.id);if(i!==s)return i-s;if(t.id===v)return-1;if(e.id===v)return 1;const o="playing"===t.state?0:1,r="playing"===e.state?0:1;return o!==r?o-r:(t.attributes.friendly_name||"")<(e.attributes.friendly_name||"")?-1:1}),u}_togglePlayerGroup(t,e){var i,s;e.stopPropagation();const o=this._pid;if(t.id===o&&t.id===this._queueOwner())return;((null===(s=null===(i=this._entity)||void 0===i?void 0:i.attributes)||void 0===s?void 0:s.group_members)||[]).includes(t.id)?this._hass.callService("media_player","unjoin",{entity_id:t.id}):this._hass.callService("media_player","join",{entity_id:this._queueOwner(o),group_members:[t.id]})}_togglePlayerMute(t,e){var i,s,o;e.stopPropagation();const r=null===(s=null===(i=this._hass)||void 0===i?void 0:i.states)||void 0===s?void 0:s[t.id],a=!!(null===(o=null==r?void 0:r.attributes)||void 0===o?void 0:o.is_volume_muted);this._hass.callService("media_player","volume_mute",{entity_id:t.id,is_volume_muted:!a})}_setPlayerVolume(t,e,i){i.stopPropagation(),this._hass.callService("media_player","volume_set",{entity_id:t.id,volume_level:e});const s=this._groupKey(),o=s?this._loadGroupFader(s):null;s&&o&&this._saveGroupFader(s,{f:o.f})}_renderPlayersPopup(){var t,e;const i="it"===Vt(),s=this._pid,o=(null===(e=null===(t=this._entity)||void 0===t?void 0:t.attributes)||void 0===e?void 0:e.group_members)||[],r=this._maPlayers();return V`
            <div class="chip-popup-backdrop" @click=${()=>{this._playersOpen=!1,this._transferMode=!1}}>
                <div class="chip-popup" @click=${t=>t.stopPropagation()}>
                    <div class="cp-handle"></div>
                    <div class="cp-head">
                        <span class="cp-title">${this._transferMode?i?"Trasferisci la coda a…":"Transfer queue to…":i?"Casse":"Players"}</span>
                        <button class="icon-btn" @click=${()=>{this._playersOpen=!1,this._transferMode=!1}}>
                            <ha-icon icon="mdi:close"></ha-icon>
                        </button>
                    </div>
                    ${!this._transferMode&&o.length&&null!==this._groupVolume?V`
                        <div class="pl-groupvol">
                            <ha-icon icon="mdi:speaker-multiple"></ha-icon>
                            <span class="pl-gv-label">${i?"Volume gruppo":"Group volume"}</span>
                            <button class="icon-btn pl-gv-btn" title=${i?"Abbassa di 1":"Down by 1"}
                                @click=${t=>this._nudgeGroupVolume(-1,t)}>
                                <ha-icon icon="mdi:minus"></ha-icon>
                            </button>
                            <input type="range" min="0" max="1" step="0.01" .value=${String(this._groupVolume)}
                                @change=${t=>this._setGroupVolume(parseFloat(t.target.value),t)}
                                @click=${t=>t.stopPropagation()} />
                            <button class="icon-btn pl-gv-btn" title=${i?"Alza di 1":"Up by 1"}
                                @click=${t=>this._nudgeGroupVolume(1,t)}>
                                <ha-icon icon="mdi:plus"></ha-icon>
                            </button>
                            <span class="pl-gv-val">${Math.round(100*this._groupVolume)}</span>
                        </div>`:j}
                    <div class="cp-list">
                        ${r.map(t=>{const e=t.id===s,r=t.id===this._queueOwner(),a=e||o.includes(t.id),n="playing"===t.state,l="number"==typeof t.attributes.volume_level?t.attributes.volume_level:0;return V`
                                <div class="pl-row ${a?"grouped":""} ${this._transferMode&&!e?"pickable":""}"
                                    @click=${()=>{this._transferMode&&!e&&this._transferQueueTo(t.id)}}>
                                    <ha-icon class="pl-ico" icon="${n?"mdi:speaker-play":"mdi:speaker"}"></ha-icon>
                                    <div class="pl-info">
                                        <div class="pl-name">${t.attributes.friendly_name||t.id}</div>
                                        <div class="pl-vol">
                                            <button class="pl-mute ${t.attributes.is_volume_muted?"muted":""}"
                                                title=${t.attributes.is_volume_muted?i?"Riattiva l'audio":"Unmute":i?"Silenzia":"Mute"}
                                                @click=${e=>this._togglePlayerMute(t,e)}>
                                                <ha-icon icon="${t.attributes.is_volume_muted?"mdi:volume-off":"mdi:volume-medium"}"></ha-icon>
                                            </button>
                                            <input type="range" min="0" max="1" step="0.01" .value=${String(l)}
                                                @change=${e=>this._setPlayerVolume(t,parseFloat(e.target.value),e)}
                                                @click=${t=>t.stopPropagation()} />
                                        </div>
                                    </div>
                                    ${this._transferMode?r?V`<span class="pl-master">${i?"Principale":"Main"}</span>`:V`<ha-icon class="pl-arrow" icon="mdi:arrow-right-bold-circle"></ha-icon>`:V`${r?V`<span class="pl-master">${i?"Principale":"Main"}</span>`:j}
                                            ${e&&r?j:V`<button class="pl-group ${a?"on":""}"
                                                title=${a?i?"Sgancia":"Ungroup":i?"Raggruppa":"Group"}
                                                @click=${e=>this._togglePlayerGroup(t,e)}>
                                                <ha-icon icon="${a?"mdi:link-variant":"mdi:link-variant-plus"}"></ha-icon>
                                            </button>`}`}
                                </div>`})}
                        ${0===r.length?V`<div class="cp-msg">${i?"Nessuna cassa":"No players"}</div>`:j}
                    </div>
                </div>
            </div>
        `}_clearQueue(){this._queueMenuOpen=!1,this._hass.callService("media_player","clear_playlist",{entity_id:this._pid}),setTimeout(()=>{this._showQueue&&this._fetchQueue()},600)}_startTransfer(){this._queueMenuOpen=!1,this._transferMode=!0,this._playersOpen=!0}_transferQueueTo(t){this._transferMode=!1,this._playersOpen=!1,this._followId=t,this._hass.callService("music_assistant","transfer_queue",{entity_id:t,source_player:this._queueOwner(),auto_play:!0})}_turnOff(){this._queueMenuOpen=!1,this._hass.callService("media_player","turn_off",{entity_id:this._pid})}_renderQueueMenu(){const t="it"===Vt();return V`
            <div class="chip-popup-backdrop" @click=${()=>{this._queueMenuOpen=!1}}>
                <div class="enq-menu" @click=${t=>t.stopPropagation()}>
                    <div class="cp-handle"></div>
                    ${this._isMA?V`
                            <button class="enq-opt" @click=${()=>this._startTransfer()}>
                                <ha-icon icon="mdi:swap-horizontal"></ha-icon>
                                <span>${t?"Trasferisci la coda a un'altra cassa":"Transfer queue to another player"}</span>
                            </button>
                            <button class="enq-opt" @click=${()=>this._clearQueue()}>
                                <ha-icon icon="mdi:playlist-remove"></ha-icon>
                                <span>${t?"Svuota la coda":"Clear the queue"}</span>
                            </button>`:V`
                            <button class="enq-opt" @click=${()=>this._turnOff()}>
                                <ha-icon icon="mdi:power"></ha-icon>
                                <span>${t?"Spegni":"Turn off"}</span>
                            </button>`}
                </div>
            </div>
        `}_onPillsWheel(t){0!==t.deltaY&&(t.preventDefault(),t.currentTarget.scrollLeft+=t.deltaY)}render(){var t;const e=!1!==(null===(t=this._config)||void 0===t?void 0:t.mini_view_enabled)&&!this._playerExpanded;return V`
            <ha-card class="${this._isFs?"fs ":""}${e?"mini":""}">
                ${e?this._renderMiniPlayer():this._renderFullPlayer()}
                ${this._popupOpen?this._renderChipPopup():j}
                ${this._searchOpen?this._renderSearchPopup():j}
                ${this._enqueueItem?this._renderEnqueueMenu():j}
                ${this._playersOpen?this._renderPlayersPopup():j}
                ${this._queueMenuOpen?this._renderQueueMenu():j}
            </ha-card>
        `}_renderHeader(){return V`
            <div class="yt-header">
                <div class="yt-logo">
                    ${Nt}
                    <span class="yt-title">Music</span>
                </div>
                <div class="header-actions">
                    <button class="icon-btn" @click=${()=>{this._searchActive=!0}}>
                        <ha-icon icon="mdi:magnify"></ha-icon>
                    </button>
                    ${this._renderSourceSelector("header")}
                </div>
            </div>
        `}_renderSearchHeader(){return V`
            <div class="yt-header search-mode">
                <button class="icon-btn" @click=${()=>{this._searchActive=!1}}>
                    <ha-icon icon="mdi:arrow-left"></ha-icon>
                </button>
                <input
                    type="search"
                    class="search-input"
                    id="searchInput"
                    placeholder="${Ht[Vt()]}"
                    @keyup=${this._handleSearchKey}
                    autofocus
                />
            </div>
        `}_renderSourceSelector(t="header"){var e;if(!this._hass)return V``;let i=[];for(const[t,s]of Object.entries(this._hass.states))if(t.startsWith("media_player")){if(null===(e=null==s?void 0:s.attributes)||void 0===e?void 0:e.remote_player_id)continue;const o=this._config.speakers;if(Array.isArray(o)&&o.length&&!o.includes(t))continue;i.push([t,s.attributes.friendly_name])}return i.sort((t,e)=>t[1]<e[1]?-1:1),V`
            <div class="source-wrap">
                <button class="icon-btn cast-btn" @click=${e=>{this._isMA&&this._feat("players")?(e.stopPropagation(),this._openPlayers()):this._toggleMenu(e,t)}}>
                    ${_t}
                </button>
                ${this._menuOpen===t?V`
                    <div
                        class="source-menu"
                        @click=${t=>t.stopPropagation()}
                        @wheel=${this._onSourceMenuWheel}
                    >
                        ${i.map(t=>{var e,i;return V`
                            <div
                                class="menu-item ${t[0]===(null===(i=null===(e=this._entity)||void 0===e?void 0:e.attributes)||void 0===i?void 0:i.remote_player_id)?"selected":""}"
                                @click=${()=>this._selectSource(t[0])}
                            >${t[1]}</div>
                        `})}
                    </div>
                `:j}
            </div>
        `}_renderMiniPlayer(){var t,e,i,s,o,r,a,n,l,c,d,p,u,h,v,_,m,f,y,g;const b="playing"===(null===(t=this._entity)||void 0===t?void 0:t.state),x=!!((null===(i=null===(e=this._entity)||void 0===e?void 0:e.attributes)||void 0===i?void 0:i.media_title)||(null===(o=null===(s=this._entity)||void 0===s?void 0:s.attributes)||void 0===o?void 0:o.media_artist)||(null===(a=null===(r=this._entity)||void 0===r?void 0:r.attributes)||void 0===a?void 0:a.entity_picture)||(null===(l=null===(n=this._entity)||void 0===n?void 0:n.attributes)||void 0===l?void 0:l.entity_picture_local)),w="idle"===(null===(c=this._entity)||void 0===c?void 0:c.state)||"off"===(null===(d=this._entity)||void 0===d?void 0:d.state)||"unavailable"===(null===(p=this._entity)||void 0===p?void 0:p.state),$=w&&!x?null:(null===(h=null===(u=this._entity)||void 0===u?void 0:u.attributes)||void 0===h?void 0:h.entity_picture_local)||(null===(_=null===(v=this._entity)||void 0===v?void 0:v.attributes)||void 0===_?void 0:_.entity_picture),k=w&&!x?"":(null===(f=null===(m=this._entity)||void 0===m?void 0:m.attributes)||void 0===f?void 0:f.media_title)||"",S=w&&!x?"":(null===(g=null===(y=this._entity)||void 0===y?void 0:y.attributes)||void 0===g?void 0:g.media_artist)||"";return V`
            <div class="mini-player" @click=${()=>{this._playerExpanded=!0}}>
                ${$?V`<img class="mini-art" src="${$}">`:V`<div class="mini-art-ph"><ha-icon icon="mdi:music"></ha-icon></div>`}
                <div class="mini-info">
                    <div class="mini-title">${k}</div>
                    ${S?V`<div class="mini-artist">${S}</div>`:j}
                </div>
                <button class="mini-btn" @click=${t=>{t.stopPropagation(),this._togglePlayPause()}}>
                    ${b?wt:$t}
                </button>
                <button class="mini-btn" @click=${t=>{t.stopPropagation(),this._skipNext()}}>
                    ${bt}
                </button>
                <button class="mini-btn" title="${"it"===Vt()?"Espandi":"Expand"}"
                    @click=${t=>{t.stopPropagation(),this._setPlayerView("full")}}>
                    <ha-icon icon="mdi:chevron-up"></ha-icon>
                </button>
            </div>
        `}_setPlayerView(t){if(!1!==this._config.mini_view_enabled||"mini"!==t){this._playerExpanded="full"===t;try{localStorage.setItem(`ytmusic-card-view:${this._config.entity_id}`,t)}catch(t){}}}_renderFullPlayer(){var t,e,i,s,o,r,a,n,l,c,d,p,u,h,v,_,m,f,y,g,b,x;const w="playing"===(null===(t=this._entity)||void 0===t?void 0:t.state),$=!!((null===(i=null===(e=this._entity)||void 0===e?void 0:e.attributes)||void 0===i?void 0:i.media_title)||(null===(o=null===(s=this._entity)||void 0===s?void 0:s.attributes)||void 0===o?void 0:o.media_artist)||(null===(a=null===(r=this._entity)||void 0===r?void 0:r.attributes)||void 0===a?void 0:a.entity_picture)||(null===(l=null===(n=this._entity)||void 0===n?void 0:n.attributes)||void 0===l?void 0:l.entity_picture_local)),k="idle"===(null===(c=this._entity)||void 0===c?void 0:c.state)||"off"===(null===(d=this._entity)||void 0===d?void 0:d.state)||"unavailable"===(null===(p=this._entity)||void 0===p?void 0:p.state),S=k&&!$?null:(null===(h=null===(u=this._entity)||void 0===u?void 0:u.attributes)||void 0===h?void 0:h.entity_picture_local)||(null===(_=null===(v=this._entity)||void 0===v?void 0:v.attributes)||void 0===_?void 0:_.entity_picture),A=k&&!$?"":(null===(f=null===(m=this._entity)||void 0===m?void 0:m.attributes)||void 0===f?void 0:f.media_title)||"",C=k&&!$?"":(null===(g=null===(y=this._entity)||void 0===y?void 0:y.attributes)||void 0===g?void 0:g.media_artist)||"",L=this._isFs&&this._feat("fs_visualizer"),M=L&&"cover"!==this._vizStyle&&"off"!==this._vizStyle,q=w&&this._feat("cover_animation"),P=w&&this._feat("cover_glow"),z=null!==(b=this._config.anim_speed)&&void 0!==b?b:6,E=null!==(x=this._config.glow_size)&&void 0!==x?x:100;return V`
            <div class="full-player" style="${`--fp-anim:${z}s; --fp-hue:${2*z}s; --fp-glow-size:${E}%;`+(S?` --fp-bg: url('${S}');`:"")}">
                <div class="fp-bg-blur"></div>
                <div class="fp-content">
                    <div class="fp-header">
                        <span class="fp-logo">${Nt}<b>Music</b></span>
                        <span class="fp-from">${Ut("nowPlaying")}</span>
                        ${this._feat("show_search")?V`
                        <button class="icon-btn" @click=${()=>{this._searchOpen=!0}}>
                            <ha-icon icon="mdi:magnify"></ha-icon>
                        </button>`:j}
                        ${document.fullscreenEnabled?V`
                        <button class="icon-btn" title="${"it"===Vt()?"Schermo intero":"Fullscreen"}"
                            @click=${()=>this._toggleFullscreen()}>
                            <ha-icon icon="${this._isFs?"mdi:fullscreen-exit":"mdi:fullscreen"}"></ha-icon>
                        </button>`:j}
                        ${!1!==this._config.mini_view_enabled?V`
                        <button class="icon-btn"
                            title="${"it"===Vt()?"Vista compatta":"Mini view"}"
                            @click=${t=>{t.stopPropagation(),this._setPlayerView("mini")}}>
                            <ha-icon icon="mdi:chevron-down"></ha-icon>
                        </button>`:j}
                        ${this._renderSourceSelector("full-player")}
                    </div>
                    <div class="fp-tabs">
                        <button class="fp-tab ${this._showQueue?"":"active"}"
                            @click=${()=>{this._showQueue=!1}}>
                            ${Ut("tabPlay")}
                        </button>
                        ${this._feat("show_queue")?V`
                        <button class="fp-tab ${this._showQueue?"active":""}"
                            @click=${()=>{this._showQueue=!0,this._fetchQueue()}}>
                            ${Ut("queue")}
                        </button>`:j}
                        <button class="fp-tab-opts" title="${"it"===Vt()?"Opzioni coda":"Queue options"}"
                            @click=${()=>{this._queueMenuOpen=!0}}>
                            <ha-icon icon="mdi:dots-vertical"></ha-icon>
                        </button>
                    </div>
                    ${this._feat("show_chips")?V`
                    <div class="fp-chips" @wheel=${this._onPillsWheel}>
                        ${this._categories.map((t,e)=>V`
                            <button class="fp-chip ${this._activeFilter===e?"active":""}"
                                @click=${()=>this._openChipPopup(t,e)}
                            >${t.label}</button>`)}
                    </div>`:j}
                    ${this._showQueue?this._renderQueue():V`
                        <div class="fp-art-wrap">
                            <div class="fp-glow ${P?"on":""}"></div>
                            ${L?V`<canvas class="fp-viz"
                                title="${"it"===Vt()?"Cambia visualizzazione":"Change visualization"}"
                                @click=${t=>this._cycleViz(t)}></canvas>`:j}
                            ${S?V`<img class="fp-art clickable ${q?"playing":""} ${M?"dimmed":""}" src="${S}"
                                    title="${"it"===Vt()?"Schermo intero":"Fullscreen"}"
                                    @click=${()=>this._toggleFullscreen()}>`:V`<div class="fp-art-ph clickable ${q?"playing":""} ${M?"dimmed":""}"
                                    @click=${()=>this._toggleFullscreen()}><ha-icon icon="mdi:music-note" style="--mdc-icon-size:80px"></ha-icon></div>`}
                        </div>
                        <div class="fp-info">
                            <div class="fp-info-txt">
                                <div class="fp-title">${A}</div>
                                <div class="fp-artist">${C}</div>
                            </div>
                            ${this._canFavorite()?V`
                                <button class="fp-fav ${this._curFav?"on":""}"
                                    title="${"it"===Vt()?"Preferito":"Favorite"}"
                                    @click=${t=>this._toggleFavorite(t)}>
                                    <ha-icon icon="${this._curFav?"mdi:heart":"mdi:heart-outline"}"></ha-icon>
                                </button>`:j}
                        </div>
                        <ytmusic-media-control
                            .hass=${this._hass}
                            .entity=${this._entity}
                            @ytmusic-queue-options=${()=>{this._queueMenuOpen=!0}}
                        ></ytmusic-media-control>
                    `}
                </div>
            </div>
        `}async _fetchQueue(){var t,e,i,s;if(this._entity&&"off"!==this._entity.state)if(this._queueLoading=!0,this._queueTracks=[],this._isMA){try{const s=await this._hass.callWS({type:"call_service",domain:"mass_queue",service:"get_queue_items",service_data:{entity:this._pid,limit_before:3,limit_after:400},return_response:!0}),o=(null===(t=null==s?void 0:s.response)||void 0===t?void 0:t[this._pid])||[],r=null===(i=null===(e=this._entity)||void 0===e?void 0:e.attributes)||void 0===i?void 0:i.media_content_id;this._queueCurrentIndex=o.findIndex(t=>t.media_content_id===r),this._queueTracks=o.map(t=>({title:t.media_artist?`${t.media_artist} - ${t.media_title}`:t.media_title,thumbnail:t.local_image_encoded||t.media_image||"",queue_item_id:t.queue_item_id}))}catch(t){try{const t=await this._hass.callWS({type:"call_service",domain:"music_assistant",service:"get_queue",target:{entity_id:this._pid},return_response:!0}),e=null===(s=null==t?void 0:t.response)||void 0===s?void 0:s[this._pid],i=[null==e?void 0:e.current_item,null==e?void 0:e.next_item].filter(Boolean);this._queueCurrentIndex=(null==e?void 0:e.current_item)?0:-1,this._queueTracks=i.map(t=>{var e,i;const s=t.media_item||{},o=(null===(i=null===(e=s.artists)||void 0===e?void 0:e[0])||void 0===i?void 0:i.name)||"",r=s.name||t.name||"";return{title:o?`${o} - ${r}`:r,thumbnail:s.image||""}})}catch(t){console.error("[MA queue] no queue source available",t),this._queueTracks=[]}}this._queueLoading=!1}else{try{const t=await this._hass.callWS({type:"media_player/browse_media",entity_id:this._pid,media_content_type:"cur_playlists",media_content_id:""});this._queueTracks=t&&t.children?t.children:[]}catch(t){this._queueTracks=[]}this._queueLoading=!1}}_queueItemClick(t){var e,i;if(this._isMA){const s=null===(i=null===(e=this._queueTracks)||void 0===e?void 0:e[t])||void 0===i?void 0:i.queue_item_id;if(void 0===s)return;return this._hass.callService("mass_queue","play_queue_item",{entity:this._pid,queue_item_id:s}),this._queueCurrentIndex=t,this.requestUpdate(),void setTimeout(()=>this._fetchQueue(),1e3)}this._hass.callService("ytube_music_player","call_method",{entity_id:this._pid,command:"goto_track",parameters:t+1})}async _maQueueAction(t,e,i){if(i.stopPropagation(),e){try{await this._hass.callService("mass_queue",t,{entity:this._pid,queue_item_id:e})}catch(e){console.error(`YTMusic: mass_queue.${t} failed`,e)}setTimeout(()=>this._fetchQueue(),300)}}_renderQueue(){var t,e;const i=this._isMA?this._queueCurrentIndex:void 0!==(null===(e=null===(t=this._entity)||void 0===t?void 0:t.attributes)||void 0===e?void 0:e.current_track)?this._entity.attributes.current_track:-1;return this._queueLoading?V`
            <div class="fp-queue-loading">
                <ha-icon icon="mdi:loading" class="spin"></ha-icon>
            </div>`:this._queueTracks&&this._queueTracks.length?V`
            <div class="fp-queue-list">
                ${this._queueTracks.map((t,e)=>{const s=t.title||"",o=s.indexOf(" - "),r=o>0?s.substring(0,o):"",a=o>0?s.substring(o+3):s,n=t.thumbnail||"",l=e===i,c=t.queue_item_id,d=this._isMA&&this._feat("queue_actions")&&void 0!==c&&i>=0&&e>i;return V`
                        <div class="fp-queue-item ${l?"current":""}"
                            @click=${()=>this._queueItemClick(e)}>
                            ${n?V`<img class="fp-qi-thumb" src="${n}">`:V`<div class="fp-qi-thumb-ph"><ha-icon icon="mdi:music"></ha-icon></div>`}
                            <div class="fp-qi-info">
                                <div class="fp-qi-title">${a}</div>
                                ${r?V`<div class="fp-qi-artist">${r}</div>`:j}
                            </div>
                            ${l?V`<ha-icon icon="mdi:volume-high" class="fp-qi-playing"></ha-icon>`:j}
                            ${d?V`
                                <div class="fp-qi-actions" @click=${t=>t.stopPropagation()}>
                                    <button class="fp-qi-act" title="Riproduci dopo"
                                        @click=${t=>this._maQueueAction("move_queue_item_next",c,t)}>
                                        <ha-icon icon="mdi:playlist-play"></ha-icon></button>
                                    ${e>i+1?V`
                                    <button class="fp-qi-act" title="Su"
                                        @click=${t=>this._maQueueAction("move_queue_item_up",c,t)}>
                                        <ha-icon icon="mdi:arrow-up"></ha-icon></button>`:j}
                                    <button class="fp-qi-act" title="Giù"
                                        @click=${t=>this._maQueueAction("move_queue_item_down",c,t)}>
                                        <ha-icon icon="mdi:arrow-down"></ha-icon></button>
                                    <button class="fp-qi-act" title="Rimuovi"
                                        @click=${t=>this._maQueueAction("remove_queue_item",c,t)}>
                                        <ha-icon icon="mdi:close"></ha-icon></button>
                                </div>`:j}
                        </div>
                    `})}
            </div>
        `:V`
            <div class="fp-queue-empty">${Ut("noQueue")}</div>`}_selectFilter(t,e){this._activeFilter=t,this._rootItems.length>0?this._navigateToFilter(t):(this._rootLoaded=!1,this._loadRoot())}_handleSearchKey(t){if(13===t.keyCode){const t=this.renderRoot.querySelector("#searchInput");(null==t?void 0:t.value)&&this._browser&&(this._browser.searchExternal(t.value),this._searchActive=!1)}}_getProgress(){var t,e,i,s;const o=null===(e=null===(t=this._entity)||void 0===t?void 0:t.attributes)||void 0===e?void 0:e.media_duration,r=null===(s=null===(i=this._entity)||void 0===i?void 0:i.attributes)||void 0===s?void 0:s.media_position;return o&&null!=r?Math.min(r/o*100,100):0}_toggleMenu(t,e="header"){t.stopPropagation(),this._menuOpen=this._menuOpen===e?null:e,this._menuOpen&&document.addEventListener("click",()=>{this._menuOpen=null},{once:!0})}_onSourceMenuWheel(t){t.stopPropagation(),t.preventDefault(),t.currentTarget.scrollTop+=t.deltaY}async _selectSource(t){var e,i;const s=null===(i=null===(e=this._entity)||void 0===e?void 0:e.attributes)||void 0===i?void 0:i.remote_player_id;this._menuOpen=null,""!==t&&t!==s&&this._hass.callService("media_player","select_source",{entity_id:this._pid,source:t})}async _togglePlayPause(){this._hass.callService("media_player","media_play_pause",{entity_id:this._pid})}async _skipNext(){this._hass.callService("media_player","media_next_track",{entity_id:this._pid})}static get styles(){return[a`
            :host {
                display: block;
                --yt-bg: #0f0f0f;
                --yt-surface: #1e1e1e;
                --yt-surface2: #282828;
                --yt-red: #ff0000;
                --yt-text: #ffffff;
                --yt-text2: rgba(255,255,255,0.6);
                --yt-text3: rgba(255,255,255,0.38);
                --yt-pill-bg: rgba(255,255,255,0.08);
                --yt-pill-border: rgba(255,255,255,0.15);
            }

            ha-card {
                background: var(--yt-bg) !important;
                height: 700px;
                display: flex;
                flex-direction: column;
                overflow: hidden;
                position: relative;
                z-index: 0;
                isolation: isolate;
                border-radius: 12px;
                color: var(--yt-text);
            }

            ha-card.mini {
                height: 72px;
                min-height: 72px;
                max-height: 72px;
            }

            /* Native fullscreen: the host element fills the screen, the card follows.
               The .fs class (driven by the fullscreenchange listener) doubles the
               :host(:fullscreen) selector, which some WebViews fail to match. */
            /* No explicit width/height on the host: the UA sizes the fullscreen
               element to the real screen. Any vw/vh here overflows on foldables,
               whose WebView reports viewport units larger than the cover screen. */
            :host(:fullscreen) {
                background: #000;
            }

            :host(:fullscreen) ha-card,
            ha-card.fs {
                width: 100%;
                height: 100%;
                border-radius: 0;
            }

            /* All three properties matter here. margin:auto on a flex child disables
               stretch and sizes it to its widest row (a long title overflows the
               screen), so width:100% forces it back to the container; border-box
               keeps the 40px of padding inside that width instead of past the edge. */
            :host(:fullscreen) .fp-content,
            ha-card.fs .fp-content {
                width: 100%;
                max-width: 640px;
                margin: 0 auto;
                box-sizing: border-box;
            }

            /* ── HEADER ── */
            .yt-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 12px 16px 8px;
                flex-shrink: 0;
                height: 52px;
            }

            .yt-logo {
                display: flex;
                align-items: center;
                gap: 6px;
            }

            .yt-icon {
                width: 28px;
                height: 28px;
            }

            .yt-title {
                font-size: 18px;
                font-weight: 600;
                color: var(--yt-text);
                letter-spacing: 0.3px;
            }

            .header-actions {
                display: flex;
                align-items: center;
                gap: 4px;
            }

            .yt-header.search-mode {
                gap: 8px;
                padding: 8px 16px;
            }

            .search-input {
                flex: 1;
                background: var(--yt-surface);
                border: 1px solid rgba(255,255,255,0.12);
                border-radius: 24px;
                color: var(--yt-text);
                font-size: 15px;
                padding: 8px 16px;
                outline: none;
                height: 36px;
            }

            .search-input::placeholder { color: var(--yt-text3); }

            /* ── FILTER PILLS ── */
            .pills-container {
                padding: 0 16px 10px;
                flex-shrink: 0;
                overflow-x: auto;
                overflow-y: hidden;
                scrollbar-width: none;
                -ms-overflow-style: none;
            }
            .pills-container::-webkit-scrollbar { display: none; }

            .pills-row {
                display: flex;
                gap: 8px;
                padding-bottom: 2px;
            }

            .pill {
                flex-shrink: 0;
                background: var(--yt-pill-bg);
                border: 1px solid var(--yt-pill-border);
                border-radius: 20px;
                color: var(--yt-text);
                font-size: 13px;
                font-weight: 500;
                padding: 6px 14px;
                cursor: pointer;
                white-space: nowrap;
                transition: background 0.15s, border-color 0.15s;
            }

            .pill:hover {
                background: rgba(255,255,255,0.14);
            }

            .pill.active {
                background: var(--yt-text);
                border-color: var(--yt-text);
                color: var(--yt-bg);
            }

            /* ── CONTENT ── */
            .content-area {
                flex: 1;
                overflow: hidden;
                display: flex;
                flex-direction: column;
            }

            ytmusic-browser {
                flex: 1;
                overflow: hidden;
                display: flex;
                flex-direction: column;
                --primary-text-color: #ffffff;
                --rgb-primary-text-color: 255, 255, 255;
                --primary-color: #ff0000;
                --rgb-primary-color: 255, 0, 0;
                color: #ffffff;
            }

            /* ── MINI PLAYER ── */
            .mini-player {
                position: relative;
                display: flex;
                align-items: center;
                gap: 10px;
                box-sizing: border-box;
                width: 100%;
                height: 72px;
                min-height: 72px;
                max-height: 72px;
                padding: 10px 12px;
                background: var(--yt-surface);
                border-top: 1px solid rgba(255,255,255,0.06);
                cursor: pointer;
                flex-shrink: 0;
                height: 62px;
            }

            .mini-player:hover { background: var(--yt-surface2); }

            .mini-art {
                width: 52px;
                height: 52px;
                border-radius: 4px;
                object-fit: cover;
                flex-shrink: 0;
            }

            .mini-art-ph {
                width: 52px;
                height: 52px;
                border-radius: 4px;
                background: var(--yt-surface2);
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
                color: var(--yt-text2);
            }

            .mini-info {
                flex: 1;
                min-width: 0;
                padding-right: 4px;
            }

            .mini-title {
                font-size: 14px;
                font-weight: 500;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                color: var(--yt-text);
            }

            .mini-artist {
                font-size: 12px;
                color: var(--yt-text2);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .mini-btn {
                background: none;
                border: none;
                cursor: pointer;
                padding: 8px;
                color: var(--yt-text);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                flex-shrink: 0;
            }

            .mini-btn:hover { background: rgba(255,255,255,0.08); }

            .mini-btn svg {
                width: 22px;
                height: 22px;
                fill: currentColor;
            }

            /* ── FULL PLAYER ── */
            .full-player {
                position: absolute;
                inset: 0;
                z-index: 200;
                overflow: hidden;
                display: flex;
                flex-direction: column;
            }

            .fp-bg-blur {
                position: absolute;
                inset: 0;
                background-color: #0a0a0a;
                background-image: var(--fp-bg);
                background-size: cover;
                background-position: center;
                filter: blur(40px) brightness(0.25) saturate(1.6);
                transform: scale(1.1);
                z-index: 0;
            }

            .fp-content {
                position: relative;
                z-index: 1;
                display: flex;
                flex-direction: column;
                height: 100%;
                padding: 0 20px 16px;
            }

            .fp-header {
                display: flex;
                align-items: center;
                padding: 12px 0 8px;
                gap: 8px;
            }

            .fp-from {
                flex: 1;
                text-align: center;
                font-size: 12px;
                font-weight: 600;
                color: var(--yt-text2);
                text-transform: uppercase;
                letter-spacing: 1px;
            }

            .fp-art-wrap {
                flex: 1;
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 16px 0;
                min-height: 0;
            }

            /* animated colored halo behind the cover */
            .fp-glow {
                position: absolute;
                width: min(var(--fp-glow-size, 100%), 130vw);
                aspect-ratio: 1 / 1;
                border-radius: 50%;
                background: radial-gradient(circle, rgba(255,0,0,0.85) 0%, rgba(255,0,0,0.5) 40%, rgba(255,0,0,0.15) 62%, rgba(255,0,0,0) 78%);
                filter: blur(30px);
                z-index: 0;
                opacity: 0;
                transition: opacity 0.5s ease;
                pointer-events: none;
            }
            .fp-glow.on {
                opacity: 1;
                animation: fp-glow-pulse var(--fp-anim, 6s) ease-in-out infinite,
                           fp-glow-hue var(--fp-hue, 12s) linear infinite;
            }
            @keyframes fp-glow-pulse {
                0%, 100% { transform: scale(0.82); }
                50%      { transform: scale(1.35); }
            }
            @keyframes fp-glow-hue {
                from { filter: blur(30px) hue-rotate(0deg); }
                to   { filter: blur(30px) hue-rotate(360deg); }
            }

            .fp-art {
                position: relative;
                z-index: 1;
                max-width: 100%;
                max-height: 100%;
                border-radius: 50%;
                box-shadow: 0 8px 40px rgba(0,0,0,0.6);
                aspect-ratio: 1/1;
                object-fit: cover;
            }

            .fp-art.clickable, .fp-art-ph.clickable { cursor: pointer; }

            /* Active visualizer: the cover stays centered but fades back, so the
               animation behind it shows through. */
            .fp-art, .fp-art-ph { transition: opacity 0.4s ease; }
            .fp-art.dimmed, .fp-art-ph.dimmed { opacity: 0.3; }

            /* Winamp-style visualizer, behind the cover (fullscreen only): full
               art-area height, so it shows around the cover instead of hiding
               under it. Clickable: tapping it cycles the styles. */
            .fp-viz {
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                width: 100%;
                height: 100%;
                z-index: 0;
                opacity: 0.85;
                cursor: pointer;
            }

            .fp-art-ph {
                position: relative;
                z-index: 1;
                width: 240px;
                height: 240px;
                border-radius: 50%;
                background: var(--yt-surface);
                display: flex;
                align-items: center;
                justify-content: center;
                color: var(--yt-text2);
            }

            /* undulating "breathing" cover while playing — stays round, never square */
            .fp-art.playing,
            .fp-art-ph.playing {
                animation: fp-ondula var(--fp-anim, 6s) ease-in-out infinite;
            }
            @keyframes fp-ondula {
                0%   { border-radius: 50%; transform: translateY(0) rotate(0deg) scale(1); }
                25%  { border-radius: 40% 60% 55% 45% / 52% 42% 58% 48%; transform: translateY(-11px) rotate(-2.6deg) scale(1.05); }
                50%  { border-radius: 60% 40% 46% 54% / 58% 50% 50% 42%; transform: translateY(8px) rotate(2.2deg) scale(0.94); }
                75%  { border-radius: 46% 54% 60% 40% / 44% 58% 42% 56%; transform: translateY(-6px) rotate(1.8deg) scale(1.03); }
                100% { border-radius: 50%; transform: translateY(0) rotate(0deg) scale(1); }
            }

            .fp-info {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 8px 0 4px;
                flex-shrink: 0;
            }

            .fp-title {
                font-size: 20px;
                font-weight: 700;
                color: var(--yt-text);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .fp-artist {
                font-size: 14px;
                color: var(--yt-text2);
                margin-top: 2px;
            }

            .fp-info-txt { flex: 1; min-width: 0; }
            .fp-fav {
                flex-shrink: 0;
                background: none;
                border: none;
                cursor: pointer;
                padding: 6px;
                margin-left: 8px;
                color: var(--yt-text2);
                --mdc-icon-size: 26px;
                transition: color 0.15s, transform 0.15s;
            }
            .fp-fav:hover { color: var(--yt-text); }
            .fp-fav.on { color: var(--yt-red, #ff0000); }
            .fp-fav.on:active { transform: scale(1.2); }

            /* ── FULL PLAYER TABS ── */
            .fp-tabs {
                display: flex;
                border-bottom: 1px solid rgba(255,255,255,0.1);
                flex-shrink: 0;
                margin: 4px -20px 0;
                padding: 0 20px;
            }

            /* quick-access category chips inside the player */
            .fp-chips {
                display: flex;
                gap: 8px;
                overflow-x: auto;
                flex-shrink: 0;
                margin: 0 -20px;
                padding: 10px 20px 2px;
                scrollbar-width: none;
            }
            .fp-chips::-webkit-scrollbar { display: none; }
            .fp-chip {
                flex: 0 0 auto;
                padding: 6px 14px;
                border-radius: 16px;
                background: #1f1f1f;
                border: 1px solid #333;
                color: var(--yt-text, #ddd);
                font-size: 12px;
                font-weight: 600;
                white-space: nowrap;
                cursor: pointer;
            }
            .fp-chip.active {
                background: #fff;
                color: #0f0f0f;
                border-color: #fff;
            }

            .fp-logo {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                font-size: 14px;
                color: var(--yt-text);
            }
            .fp-logo svg { width: 20px; height: 20px; }

            /* chip category popup — semi-transparent bottom sheet, player visible behind */
            .chip-popup-backdrop {
                position: absolute;
                inset: 0;
                z-index: 300;
                background: rgba(0, 0, 0, 0.35);
                display: flex;
                align-items: flex-end;
                animation: cp-fade 0.15s ease;
            }
            @keyframes cp-fade { from { opacity: 0; } to { opacity: 1; } }
            .chip-popup, .chip-popup * { box-sizing: border-box; }
            .chip-popup {
                width: 100%;
                height: 70%;
                max-width: 100%;
                background: rgba(20, 20, 20, 0.9);
                backdrop-filter: blur(18px);
                -webkit-backdrop-filter: blur(18px);
                border-radius: 20px 20px 0 0;
                border-top: 1px solid rgba(255,255,255,0.12);
                padding: 10px 14px 18px;
                display: flex;
                flex-direction: column;
                box-shadow: 0 -12px 40px rgba(0,0,0,0.55);
                animation: cp-slide 0.2s ease;
            }
            .cp-handle {
                width: 42px;
                height: 4px;
                border-radius: 2px;
                background: rgba(255,255,255,0.3);
                margin: 2px auto 10px;
                flex-shrink: 0;
            }
            @keyframes cp-slide { from { transform: translateY(30px); } to { transform: translateY(0); } }
            .cp-head {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 8px;
                margin-bottom: 8px;
                flex-shrink: 0;
            }
            .cp-title { font-size: 16px; font-weight: 700; color: var(--yt-text); }
            .cp-list { flex: 1; min-height: 0; overflow-y: auto; scrollbar-width: none; }
            .cp-list::-webkit-scrollbar { width: 0; display: none; }
            .cp-item {
                display: flex;
                align-items: center;
                gap: 12px;
                padding: 8px 8px;
                border-radius: 8px;
                cursor: pointer;
            }
            .cp-play { margin-right: 2px; }
            .cp-item:hover { background: rgba(255,255,255,0.06); }
            .cp-thumb {
                width: 46px;
                height: 46px;
                border-radius: 6px;
                object-fit: cover;
                flex-shrink: 0;
            }
            .cp-thumb-ph {
                background: var(--yt-surface);
                display: flex;
                align-items: center;
                justify-content: center;
                color: var(--yt-text2);
            }
            .cp-info { flex: 1; min-width: 0; }
            .cp-t {
                font-size: 13px;
                font-weight: 600;
                color: var(--yt-text);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .cp-play { color: var(--yt-red, #ff0000); flex-shrink: 0; }
            .cp-more {
                background: none;
                border: none;
                color: var(--yt-text2);
                cursor: pointer;
                flex-shrink: 0;
                padding: 4px;
                border-radius: 50%;
                display: flex;
                --mdc-icon-size: 20px;
            }
            .cp-more:hover { color: #fff; background: rgba(255,255,255,0.1); }

            .cp-grid {
                flex: 1;
                overflow-y: auto;
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 14px 12px;
                padding: 4px 2px 8px;
                align-content: start;
                scrollbar-width: none;
            }
            .cp-grid::-webkit-scrollbar { display: none; }
            .cp-tile { cursor: pointer; }
            .cp-tile-art {
                position: relative;
                width: 100%;
                aspect-ratio: 1 / 1;
                border-radius: 12px;
                overflow: hidden;
                background: rgba(255,255,255,0.06);
            }
            .cp-tile-art img { width: 100%; height: 100%; object-fit: cover; display: block; }
            .cp-mosaic {
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-template-rows: 1fr 1fr;
                width: 100%; height: 100%;
            }
            .cp-mosaic img { width: 100%; height: 100%; object-fit: cover; display: block; }
            .cp-tile-ph {
                width: 100%; height: 100%;
                display: flex; align-items: center; justify-content: center;
                color: var(--yt-text2); --mdc-icon-size: 40px;
            }
            .cp-tile-more {
                position: absolute; top: 6px; right: 6px;
                width: 30px; height: 30px;
                border: none; border-radius: 50%;
                background: rgba(0,0,0,0.55);
                color: #fff; cursor: pointer;
                display: flex; align-items: center; justify-content: center;
                --mdc-icon-size: 18px;
            }
            .cp-tile-play {
                position: absolute; bottom: 6px; right: 6px;
                width: 34px; height: 34px; border-radius: 50%;
                background: var(--yt-red, #ff0000); color: #fff;
                display: flex; align-items: center; justify-content: center;
                --mdc-icon-size: 20px;
                opacity: 0; transition: opacity 0.15s;
            }
            .cp-tile:hover .cp-tile-play { opacity: 1; }
            .cp-tile-label {
                margin-top: 6px;
                font-size: 12.5px;
                color: var(--yt-text);
                line-height: 1.25;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }
            .cp-tile-label.bold { font-weight: 600; }
            .enq-menu {
                width: 100%;
                max-width: 100%;
                background: rgba(28, 28, 28, 0.96);
                backdrop-filter: blur(18px);
                -webkit-backdrop-filter: blur(18px);
                border-radius: 20px 20px 0 0;
                border-top: 1px solid rgba(255,255,255,0.12);
                padding: 10px 10px 20px;
                display: flex;
                flex-direction: column;
                box-shadow: 0 -12px 40px rgba(0,0,0,0.6);
                animation: cp-slide 0.2s ease;
            }
            .enq-title {
                font-size: 14px;
                font-weight: 700;
                color: var(--yt-text);
                padding: 4px 10px 10px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                border-bottom: 1px solid rgba(255,255,255,0.08);
                margin-bottom: 4px;
            }
            .enq-opt {
                display: flex;
                align-items: center;
                gap: 14px;
                width: 100%;
                background: none;
                border: none;
                color: var(--yt-text);
                cursor: pointer;
                padding: 13px 12px;
                border-radius: 10px;
                font-size: 14px;
                text-align: left;
                --mdc-icon-size: 22px;
            }
            .enq-opt ha-icon { color: var(--yt-text2); flex-shrink: 0; }
            .enq-opt:hover { background: rgba(255,255,255,0.08); }
            .enq-opt:hover ha-icon { color: var(--yt-red, #ff0000); }

            .pl-groupvol {
                display: flex;
                align-items: center;
                gap: 10px;
                padding: 10px 8px;
                margin-bottom: 6px;
                border-radius: 12px;
                background: rgba(255,0,0,0.10);
                color: var(--yt-text);
                --mdc-icon-size: 22px;
            }
            .pl-gv-label { font-size: 13px; font-weight: 700; white-space: nowrap; }
            .pl-gv-btn { padding: 4px; flex: none; }
            .pl-gv-val {
                min-width: 26px;
                text-align: right;
                font-size: 13px;
                font-weight: 700;
                font-variant-numeric: tabular-nums;
            }
            .pl-groupvol input[type="range"] {
                flex: 1;
                height: 4px;
                -webkit-appearance: none;
                appearance: none;
                background: rgba(255,255,255,0.2);
                border-radius: 2px;
                accent-color: var(--yt-red, #ff0000);
            }

            .pl-row {
                display: flex;
                align-items: center;
                gap: 12px;
                padding: 10px 6px;
                border-radius: 12px;
            }
            .pl-row.grouped { background: rgba(255,0,0,0.10); }
            .pl-ico { color: var(--yt-text2); flex-shrink: 0; --mdc-icon-size: 26px; }
            .pl-row.grouped .pl-ico { color: var(--yt-red, #ff0000); }
            .pl-info { flex: 1; min-width: 0; }
            .pl-name {
                font-size: 14px;
                font-weight: 600;
                color: var(--yt-text);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .pl-mute {
                appearance: none;
                border: none;
                background: none;
                padding: 0;
                margin: 0;
                flex: none;
                cursor: pointer;
                display: grid;
                place-items: center;
                width: 20px;
                height: 20px;
                color: inherit;
                opacity: 0.75;
            }
            .pl-mute:hover { opacity: 1; }
            .pl-mute.muted { color: var(--yt-red, #f00); opacity: 1; }
            .pl-vol {
                display: flex;
                align-items: center;
                gap: 8px;
                margin-top: 4px;
                --mdc-icon-size: 16px;
                color: var(--yt-text2);
            }
            .pl-vol input[type="range"] {
                flex: 1;
                height: 4px;
                -webkit-appearance: none;
                appearance: none;
                background: rgba(255,255,255,0.2);
                border-radius: 2px;
                accent-color: var(--yt-red, #ff0000);
                cursor: pointer;
            }
            .pl-group {
                background: rgba(255,255,255,0.08);
                border: none;
                color: var(--yt-text2);
                cursor: pointer;
                flex-shrink: 0;
                width: 38px;
                height: 38px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                --mdc-icon-size: 20px;
            }
            .pl-group.on { background: rgba(255,0,0,0.2); color: var(--yt-red, #ff0000); }
            .pl-group:hover { color: #fff; }
            .pl-row.pickable { cursor: pointer; }
            .pl-row.pickable:hover { background: rgba(255,255,255,0.06); }
            .pl-arrow { color: var(--yt-red, #ff0000); flex-shrink: 0; --mdc-icon-size: 26px; }
            .pl-master {
                flex-shrink: 0;
                font-size: 11px;
                font-weight: 700;
                color: var(--yt-red, #ff0000);
                text-transform: uppercase;
                letter-spacing: 0.5px;
                padding-right: 6px;
            }
            .cp-msg {
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 34px;
                text-align: center;
                color: var(--yt-text2);
            }
            .cp-search {
                flex: 1;
                min-width: 0;
                background: rgba(255,255,255,0.08);
                border: none;
                border-radius: 10px;
                padding: 9px 12px;
                color: var(--yt-text);
                font-size: 14px;
                outline: none;
            }
            .cp-types {
                display: flex;
                gap: 8px;
                overflow-x: auto;
                justify-content: safe center;
                padding: 6px 8px 10px;
                flex-shrink: 0;
                scrollbar-width: none;
            }
            .cp-types::-webkit-scrollbar { display: none; }

            .fp-tab {
                background: none;
                border: none;
                color: var(--yt-text2);
                font-size: 14px;
                font-weight: 600;
                padding: 10px 18px;
                cursor: pointer;
                border-bottom: 2px solid transparent;
                margin-bottom: -1px;
                transition: color 0.15s;
            }

            .fp-tab.active {
                color: var(--yt-text);
                border-bottom-color: var(--yt-red);
            }

            .fp-tab:hover { color: var(--yt-text); }

            .fp-tab-opts {
                margin-left: auto;
                background: none;
                border: none;
                color: var(--yt-text2);
                cursor: pointer;
                display: flex;
                align-items: center;
                padding: 0 4px;
                --mdc-icon-size: 22px;
            }
            .fp-tab-opts:hover { color: var(--yt-text); }

            /* ── QUEUE LIST ── */
            .fp-queue-list {
                flex: 1;
                overflow-y: auto;
                padding: 8px 0;
                scrollbar-width: thin;
                scrollbar-color: rgba(255,255,255,0.2) transparent;
            }

            .fp-queue-item {
                display: flex;
                align-items: center;
                gap: 10px;
                padding: 8px 4px;
                border-radius: 6px;
                cursor: pointer;
                transition: background 0.1s;
            }

            .fp-queue-item:hover { background: rgba(255,255,255,0.06); }
            .fp-queue-item.current { background: rgba(255,255,255,0.08); }

            .fp-qi-thumb {
                width: 42px;
                height: 42px;
                border-radius: 4px;
                object-fit: cover;
                flex-shrink: 0;
            }

            .fp-qi-thumb-ph {
                width: 42px;
                height: 42px;
                border-radius: 4px;
                background: var(--yt-surface2);
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
                color: var(--yt-text2);
            }

            .fp-qi-info {
                flex: 1;
                min-width: 0;
            }

            .fp-qi-title {
                font-size: 14px;
                font-weight: 500;
                color: var(--yt-text);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .fp-qi-artist {
                font-size: 12px;
                color: var(--yt-text2);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .fp-queue-item.current .fp-qi-title { color: var(--yt-red); }

            .fp-qi-playing {
                color: var(--yt-red);
                flex-shrink: 0;
                --mdc-icon-size: 18px;
            }

            .fp-qi-actions {
                display: flex;
                align-items: center;
                gap: 2px;
                flex-shrink: 0;
                opacity: 0.55;
                transition: opacity 0.15s;
            }
            .fp-queue-item:hover .fp-qi-actions { opacity: 1; }
            .fp-qi-act {
                background: none;
                border: none;
                color: var(--yt-text2);
                cursor: pointer;
                padding: 4px;
                border-radius: 50%;
                display: flex;
                --mdc-icon-size: 18px;
            }
            .fp-qi-act:hover { color: #fff; background: rgba(255,255,255,0.1); }

            .fp-queue-loading, .fp-queue-empty {
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                color: var(--yt-text2);
                font-size: 14px;
            }

            @keyframes spin { to { transform: rotate(360deg); } }
            .spin { animation: spin 1s linear infinite; }

            /* ── MEDIA CONTROL in full player (force dark-theme colors) ── */
            ytmusic-media-control {
                --primary-text-color: #ffffff;
                --rgb-primary-text-color: 255, 255, 255;
                --primary-color: #ff0000;
                --rgb-primary-color: 255, 0, 0;
            }

            /* ── ICON BUTTONS ── */
            .icon-btn {
                background: none;
                border: none;
                cursor: pointer;
                padding: 8px;
                border-radius: 50%;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                color: var(--yt-text);
                --mdc-icon-size: 22px;
            }

            .icon-btn:hover { background: rgba(255,255,255,0.08); }

            .icon-btn svg {
                width: 22px;
                height: 22px;
                fill: currentColor;
            }

            .cast-btn svg { width: 20px; height: 20px; }

            /* ── SOURCE DROPDOWN ── */
            .source-wrap { position: relative; }

            .source-menu {
                position: absolute;
                top: 100%;
                right: 0;
                z-index: 999;
                background: #2a2a2a;
                border-radius: 8px;
                box-shadow: 0 8px 24px rgba(0,0,0,0.5);
                min-width: 200px;
                max-width: calc(100vw - 24px);
                max-height: 280px;
                overflow-y: auto;
                overscroll-behavior: contain;
                border: 1px solid rgba(255,255,255,0.1);
            }

            /* Narrow screens (phones/folds): the right-anchored dropdown ends up glued
               to the screen edge — center it under the header instead. Un-positioning
               .source-wrap makes .full-player the containing block. */
            @media (max-width: 600px) {
                .source-wrap { position: static; }

                .full-player .source-menu {
                    top: 56px;
                    left: 50%;
                    right: auto;
                    transform: translateX(-50%);
                    min-width: 240px;
                }
            }

            /* Fullscreen: fp-content is centered, so a menu anchored to the right edge
               drifts away from it (Fold cover screens report >600px, so the media query
               above cannot be relied on). Always center the menu under the header. */
            :host(:fullscreen) .source-wrap,
            ha-card.fs .source-wrap { position: static; }

            :host(:fullscreen) .full-player .source-menu,
            ha-card.fs .full-player .source-menu {
                top: 56px;
                left: 50%;
                right: auto;
                transform: translateX(-50%);
                min-width: 240px;
            }

            .menu-item {
                padding: 11px 16px;
                cursor: pointer;
                font-size: 14px;
                color: var(--yt-text);
            }

            .menu-item:hover { background: rgba(255,255,255,0.08); }
            .menu-item.selected { color: var(--yt-red); font-weight: 600; }
        `]}}Yt.VIZ_ORDER=["bars","solid","wave","mirror","fire","cover","off"],Yt.VIZ_NAMES={bars:["SPETTRO","SPECTRUM"],solid:["BARRE","SOLID BARS"],wave:["ONDA","WAVE"],mirror:["SPECCHIO","MIRROR"],fire:["FUOCO","FIRE"],cover:["ONDEGGIO","COVER"],off:["SPENTO","OFF"]},t([pt()],Yt.prototype,"_config",void 0),t([pt()],Yt.prototype,"_entity",void 0),t([pt()],Yt.prototype,"_menuOpen",void 0),t([pt()],Yt.prototype,"_playerExpanded",void 0),t([pt()],Yt.prototype,"_showQueue",void 0),t([pt()],Yt.prototype,"_queueTracks",void 0),t([pt()],Yt.prototype,"_queueLoading",void 0),t([pt()],Yt.prototype,"_queueCurrentIndex",void 0),t([pt()],Yt.prototype,"_activeFilter",void 0),t([pt()],Yt.prototype,"_popupOpen",void 0),t([pt()],Yt.prototype,"_popupLoading",void 0),t([pt()],Yt.prototype,"_popupItems",void 0),t([pt()],Yt.prototype,"_popupTitle",void 0),t([pt()],Yt.prototype,"_popupStack",void 0),t([pt()],Yt.prototype,"_categories",void 0),t([pt()],Yt.prototype,"_searchOpen",void 0),t([pt()],Yt.prototype,"_searchQuery",void 0),t([pt()],Yt.prototype,"_searchType",void 0),t([pt()],Yt.prototype,"_searchResults",void 0),t([pt()],Yt.prototype,"_searchLoading",void 0),t([pt()],Yt.prototype,"_searchActive",void 0),t([pt()],Yt.prototype,"_enqueueItem",void 0),t([pt()],Yt.prototype,"_playersOpen",void 0),t([pt()],Yt.prototype,"_playersSig",void 0),t([pt()],Yt.prototype,"_queueMenuOpen",void 0),t([pt()],Yt.prototype,"_transferMode",void 0),t([ut("ytmusic-browser")],Yt.prototype,"_browser",void 0),t([pt()],Yt.prototype,"_followId",void 0),t([pt()],Yt.prototype,"_curFav",void 0),t([pt()],Yt.prototype,"_groupVolume",void 0),t([pt()],Yt.prototype,"_isFs",void 0),t([pt()],Yt.prototype,"_vizStyle",void 0),customElements.define("ytmusic-playing-card",Yt),window.customCards=window.customCards||[],window.customCards.push({type:"ytmusic-playing-card",name:"YTMusic Playing",description:"Requires the ytube_media_player integration"});export{Yt as YTMusicPlayingCard,qt as YTMusicSearchCard};
