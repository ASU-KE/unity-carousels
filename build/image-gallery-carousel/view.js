(()=>{var e={338:(e,t,n)=>{"use strict";var i=n(795);t.H=i.createRoot,i.hydrateRoot},835:(e,t,n)=>{"use strict";var i=n(932);function r(){}function o(){}o.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,o,s){if(s!==i){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:r};return n.PropTypes=n,n}},31:(e,t,n)=>{e.exports=n(835)()},932:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},795:e=>{"use strict";e.exports=window.ReactDOM}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.React;var t=n(338),i=n(31),r=n.n(i);const o=({event:e="",action:t="",name:n="",type:i="",section:r="",text:o="",region:s="",component:a=""})=>{const{dataLayer:c}=window,u={event:e.toLowerCase(),action:t.toLowerCase(),name:n.toLowerCase(),type:i.toLowerCase(),region:s.toLowerCase(),section:r.toLowerCase(),text:o.toLowerCase(),component:a.toLowerCase()};c&&c.push(u)},s={event:"select",action:"click",name:"onclick",region:"main content",type:"pagination",text:"owl dot"},a=({children:t})=>(0,e.createElement)("div",{role:"group",className:"glide__bullets","data-glide-el":"controls[nav]","data-testid":"bullets-container",onClick:e=>e.stopPropagation(),onKeyDown:e=>e.stopPropagation()},t);a.propTypes={children:r().oneOfType([r().element,r().arrayOf(r().element)]).isRequired};const c=({buttonCount:t})=>{const n=[];for(let i=0;i<t;i+=1)n.push((0,e.createElement)("button",{type:"button",key:`bullet-${i}`,className:"glide__bullet","data-glide-dir":`=${i}`,"aria-label":`Slide view ${i+1}`,onClick:()=>o({...s})}));return(0,e.createElement)(a,null,n)};c.propTypes={buttonCount:r().number.isRequired};const u=({imageItems:t,onItemClick:n=()=>null})=>{const i=(e,t)=>{const{ariaSelected:i}=e.currentTarget.dataset;e.currentTarget.dataset.ariaSelected=String(!i),e.stopPropagation(),n(t)},r=t.map(((t,n)=>(0,e.createElement)("button",{type:"button",role:"option",className:"bullet-image-container",key:`bullet-${n}`,"data-glide-dir":`=${n}`,"aria-label":`Slide view ${n+1}`,"aria-selected":"false",onClick:e=>i(e,n),onKeyDown:e=>i(e,n)},(0,e.createElement)("img",{src:t,alt:`Slide ${n+1}`,className:"glide__bullet bullet-image",loading:"lazy",decoding:"async",fetchpriority:"low"}))));return(0,e.createElement)(a,null,r)};u.propTypes={imageItems:r().arrayOf(r().string).isRequired,onItemClick:r().func};const l=({onClick:t=()=>null})=>(0,e.createElement)("button",{type:"button",className:"glide__arrow glide__arrow--next","data-glide-dir":">","aria-label":"Next slide",onClick:t},(0,e.createElement)("i",{className:"fas fa-chevron-right arrow-icon"}));l.propTypes={onClick:r().func};const d=({onClick:t=()=>null})=>(0,e.createElement)("button",{type:"button",className:"glide__arrow glide__arrow--prev","data-glide-dir":"<","aria-label":"Previous slide",onClick:t},(0,e.createElement)("span",{className:"fas fa-chevron-left arrow-icon"}));d.propTypes={onClick:r().func};const f={event:"select",action:"click",name:"onclick",region:"main content",type:"carousel"},m=({children:t=null})=>(0,e.createElement)("div",{className:"glide__arrows","data-glide-el":"controls","data-testid":"arrows-container"},t);m.propTypes={children:r().arrayOf(r().element)};const h=({onClick:t=()=>null,children:n=null})=>(0,e.createElement)(m,null,(0,e.createElement)(d,{onClick:()=>{t(),o({...f,text:"left chevron"})}}),n,(0,e.createElement)(l,{onClick:()=>{t(),o({...f,text:"right chevron"})}}));h.propTypes={children:r().element,onClick:r().func};const p=({carouselItems:t})=>{const n=t.map((t=>(0,e.createElement)("li",{key:t.id.toString(),className:"glide__slide slider"},t.item)));return(0,e.createElement)("ul",{className:"glide__slides"},n)};function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){_(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function k(e,t,n){return t&&w(e.prototype,t),n&&w(e,n),e}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}function C(e,t){return C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},C(e,t)}function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=S(e);if(t){var r=S(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return function(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,n)}}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}(e,t);if(i){var r=Object.getOwnPropertyDescriptor(i,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},O.apply(this,arguments)}p.propTypes={carouselItems:r().arrayOf(r().object)};var E={type:"slider",startAt:0,perView:1,focusAt:0,gap:10,autoplay:!1,hoverpause:!0,keyboard:!0,bound:!1,swipeThreshold:80,dragThreshold:120,perSwipe:"",touchRatio:.5,touchAngle:45,animationDuration:400,rewind:!0,rewindDuration:800,animationTimingFunc:"cubic-bezier(.165, .840, .440, 1)",waitForTransition:!0,throttle:10,direction:"ltr",peek:0,cloningRatio:1,breakpoints:{},classes:{swipeable:"glide--swipeable",dragging:"glide--dragging",direction:{ltr:"glide--ltr",rtl:"glide--rtl"},type:{slider:"glide--slider",carousel:"glide--carousel"},slide:{clone:"glide__slide--clone",active:"glide__slide--active"},arrow:{disabled:"glide__arrow--disabled"},nav:{active:"glide__bullet--active"}}};function T(e){console.error("[Glide warn]: ".concat(e))}function L(e){return parseInt(e)}function A(e){return"string"==typeof e}function P(e){var t=y(e);return"function"===t||"object"===t&&!!e}function H(e){return"function"==typeof e}function R(e){return void 0===e}function j(e){return e.constructor===Array}function I(e,t,n){Object.defineProperty(e,t,n)}function N(e,t){var n=Object.assign({},e,t);return t.hasOwnProperty("classes")&&(n.classes=Object.assign({},e.classes,t.classes),["direction","type","slide","arrow","nav"].forEach((function(i){t.classes.hasOwnProperty(i)&&(n.classes[i]=v(v({},e.classes[i]),t.classes[i]))}))),t.hasOwnProperty("breakpoints")&&(n.breakpoints=Object.assign({},e.breakpoints,t.breakpoints)),n}var z=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};b(this,e),this.events=t,this.hop=t.hasOwnProperty}return k(e,[{key:"on",value:function(e,t){if(!j(e)){this.hop.call(this.events,e)||(this.events[e]=[]);var n=this.events[e].push(t)-1;return{remove:function(){delete this.events[e][n]}}}for(var i=0;i<e.length;i++)this.on(e[i],t)}},{key:"emit",value:function(e,t){if(j(e))for(var n=0;n<e.length;n++)this.emit(e[n],t);else this.hop.call(this.events,e)&&this.events[e].forEach((function(e){e(t||{})}))}}]),e}(),D=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};b(this,e),this._c={},this._t=[],this._e=new z,this.disabled=!1,this.selector=t,this.settings=N(E,n),this.index=this.settings.startAt}return k(e,[{key:"mount",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._e.emit("mount.before"),P(e)?this._c=function(e,t,n){var i={};for(var r in t)H(t[r])?i[r]=t[r](e,i,n):T("Extension must be a function");for(var o in i)H(i[o].mount)&&i[o].mount();return i}(this,e,this._e):T("You need to provide a object on `mount()`"),this._e.emit("mount.after"),this}},{key:"mutate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return j(e)?this._t=e:T("You need to provide a array on `mutate()`"),this}},{key:"update",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.settings=N(this.settings,e),e.hasOwnProperty("startAt")&&(this.index=e.startAt),this._e.emit("update"),this}},{key:"go",value:function(e){return this._c.Run.make(e),this}},{key:"move",value:function(e){return this._c.Transition.disable(),this._c.Move.make(e),this}},{key:"destroy",value:function(){return this._e.emit("destroy"),this}},{key:"play",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e&&(this.settings.autoplay=e),this._e.emit("play"),this}},{key:"pause",value:function(){return this._e.emit("pause"),this}},{key:"disable",value:function(){return this.disabled=!0,this}},{key:"enable",value:function(){return this.disabled=!1,this}},{key:"on",value:function(e,t){return this._e.on(e,t),this}},{key:"isType",value:function(e){return this.settings.type===e}},{key:"settings",get:function(){return this._o},set:function(e){P(e)?this._o=e:T("Options must be an `object` instance.")}},{key:"index",get:function(){return this._i},set:function(e){this._i=L(e)}},{key:"type",get:function(){return this.settings.type}},{key:"disabled",get:function(){return this._d},set:function(e){this._d=!!e}}]),e}();function M(){return(new Date).getTime()}function W(e,t){var n,i,r,o,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=0,c=function(){a=!1===s.leading?0:M(),n=null,o=e.apply(i,r),n||(i=r=null)},u=function(){var u=M();a||!1!==s.leading||(a=u);var l=t-(u-a);return i=this,r=arguments,l<=0||l>t?(n&&(clearTimeout(n),n=null),a=u,o=e.apply(i,r),n||(i=r=null)):n||!1===s.trailing||(n=setTimeout(c,l)),o};return u.cancel=function(){clearTimeout(n),a=0,n=i=r=null},u}var V={ltr:["marginLeft","marginRight"],rtl:["marginRight","marginLeft"]};function B(e){if(e&&e.parentNode){for(var t=e.parentNode.firstChild,n=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&n.push(t);return n}return[]}function q(e){return Array.prototype.slice.call(e)}var $=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};b(this,e),this.listeners=t}return k(e,[{key:"on",value:function(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];A(e)&&(e=[e]);for(var r=0;r<e.length;r++)this.listeners[e[r]]=n,t.addEventListener(e[r],this.listeners[e[r]],i)}},{key:"off",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];A(e)&&(e=[e]);for(var i=0;i<e.length;i++)t.removeEventListener(e[i],this.listeners[e[i]],n)}},{key:"destroy",value:function(){delete this.listeners}}]),e}(),F=["ltr","rtl"],G={">":"<","<":">","=":"="};function Y(e,t){return{modify:function(e){return t.Direction.is("rtl")?-e:e}}}function K(e,t){return{modify:function(e){var n=Math.floor(e/t.Sizes.slideWidth);return e+t.Gaps.value*n}}}function X(e,t){return{modify:function(e){return e+t.Clones.grow/2}}}function U(e,t){return{modify:function(n){if(e.settings.focusAt>=0){var i=t.Peek.value;return P(i)?n-i.before:n-i}return n}}}function J(e,t){return{modify:function(n){var i=t.Gaps.value,r=t.Sizes.width,o=e.settings.focusAt,s=t.Sizes.slideWidth;return"center"===o?n-(r/2-s/2):n-s*o-i*o}}}var Q=!1;try{var Z=Object.defineProperty({},"passive",{get:function(){Q=!0}});window.addEventListener("testPassive",null,Z),window.removeEventListener("testPassive",null,Z)}catch(e){}var ee=Q,te=["touchstart","mousedown"],ne=["touchmove","mousemove"],ie=["touchend","touchcancel","mouseup","mouseleave"],re=["mousedown","mousemove","mouseup","mouseleave"],oe='[data-glide-el^="controls"]',se="".concat(oe,' [data-glide-dir*="<"]'),ae="".concat(oe,' [data-glide-dir*=">"]');function ce(e){return P(e)?(t=e,Object.keys(t).sort().reduce((function(e,n){return e[n]=t[n],e[n],e}),{})):(T("Breakpoints option must be an object"),{});var t}var ue={Html:function(e,t,n){var i={mount:function(){this.root=e.selector,this.track=this.root.querySelector('[data-glide-el="track"]'),this.collectSlides()},collectSlides:function(){this.slides=q(this.wrapper.children).filter((function(t){return!t.classList.contains(e.settings.classes.slide.clone)}))}};return I(i,"root",{get:function(){return i._r},set:function(e){A(e)&&(e=document.querySelector(e)),null!==e?i._r=e:T("Root element must be a existing Html node")}}),I(i,"track",{get:function(){return i._t},set:function(e){i._t=e}}),I(i,"wrapper",{get:function(){return i.track.children[0]}}),n.on("update",(function(){i.collectSlides()})),i},Translate:function(e,t,n){var i={set:function(n){var i=function(e,t){var n=[K,X,U,J].concat(e._t,[Y]);return{mutate:function(i){for(var r=0;r<n.length;r++){var o=n[r];H(o)&&H(o().modify)?i=o(e,t,undefined).modify(i):T("Transformer should be a function that returns an object with `modify()` method")}return i}}}(e,t).mutate(n),r="translate3d(".concat(-1*i,"px, 0px, 0px)");t.Html.wrapper.style.mozTransform=r,t.Html.wrapper.style.webkitTransform=r,t.Html.wrapper.style.transform=r},remove:function(){t.Html.wrapper.style.transform=""},getStartIndex:function(){var n=t.Sizes.length,i=e.index,r=e.settings.perView;return t.Run.isOffset(">")||t.Run.isOffset("|>")?n+(i-r):(i+r)%n},getTravelDistance:function(){var n=t.Sizes.slideWidth*e.settings.perView;return t.Run.isOffset(">")||t.Run.isOffset("|>")?-1*n:n}};return n.on("move",(function(r){if(!e.isType("carousel")||!t.Run.isOffset())return i.set(r.movement);t.Transition.after((function(){n.emit("translate.jump"),i.set(t.Sizes.slideWidth*e.index)}));var o=t.Sizes.slideWidth*t.Translate.getStartIndex();return i.set(o-t.Translate.getTravelDistance())})),n.on("destroy",(function(){i.remove()})),i},Transition:function(e,t,n){var i=!1,r={compose:function(t){var n=e.settings;return i?"".concat(t," 0ms ").concat(n.animationTimingFunc):"".concat(t," ").concat(this.duration,"ms ").concat(n.animationTimingFunc)},set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";t.Html.wrapper.style.transition=this.compose(e)},remove:function(){t.Html.wrapper.style.transition=""},after:function(e){setTimeout((function(){e()}),this.duration)},enable:function(){i=!1,this.set()},disable:function(){i=!0,this.set()}};return I(r,"duration",{get:function(){var n=e.settings;return e.isType("slider")&&t.Run.offset?n.rewindDuration:n.animationDuration}}),n.on("move",(function(){r.set()})),n.on(["build.before","resize","translate.jump"],(function(){r.disable()})),n.on("run",(function(){r.enable()})),n.on("destroy",(function(){r.remove()})),r},Direction:function(e,t,n){var i={mount:function(){this.value=e.settings.direction},resolve:function(e){var t=e.slice(0,1);return this.is("rtl")?e.split(t).join(G[t]):e},is:function(e){return this.value===e},addClass:function(){t.Html.root.classList.add(e.settings.classes.direction[this.value])},removeClass:function(){t.Html.root.classList.remove(e.settings.classes.direction[this.value])}};return I(i,"value",{get:function(){return i._v},set:function(e){F.indexOf(e)>-1?i._v=e:T("Direction value must be `ltr` or `rtl`")}}),n.on(["destroy","update"],(function(){i.removeClass()})),n.on("update",(function(){i.mount()})),n.on(["build.before","update"],(function(){i.addClass()})),i},Peek:function(e,t,n){var i={mount:function(){this.value=e.settings.peek}};return I(i,"value",{get:function(){return i._v},set:function(e){P(e)?(e.before=L(e.before),e.after=L(e.after)):e=L(e),i._v=e}}),I(i,"reductor",{get:function(){var t=i.value,n=e.settings.perView;return P(t)?t.before/n+t.after/n:2*t/n}}),n.on(["resize","update"],(function(){i.mount()})),i},Sizes:function(e,t,n){var i={setupSlides:function(){for(var e="".concat(this.slideWidth,"px"),n=t.Html.slides,i=0;i<n.length;i++)n[i].style.width=e},setupWrapper:function(){t.Html.wrapper.style.width="".concat(this.wrapperSize,"px")},remove:function(){for(var e=t.Html.slides,n=0;n<e.length;n++)e[n].style.width="";t.Html.wrapper.style.width=""}};return I(i,"length",{get:function(){return t.Html.slides.length}}),I(i,"width",{get:function(){return t.Html.track.offsetWidth}}),I(i,"wrapperSize",{get:function(){return i.slideWidth*i.length+t.Gaps.grow+t.Clones.grow}}),I(i,"slideWidth",{get:function(){return i.width/e.settings.perView-t.Peek.reductor-t.Gaps.reductor}}),n.on(["build.before","resize","update"],(function(){i.setupSlides(),i.setupWrapper()})),n.on("destroy",(function(){i.remove()})),i},Gaps:function(e,t,n){var i={apply:function(e){for(var n=0,i=e.length;n<i;n++){var r=e[n].style,o=t.Direction.value;r[V[o][0]]=0!==n?"".concat(this.value/2,"px"):"",n!==e.length-1?r[V[o][1]]="".concat(this.value/2,"px"):r[V[o][1]]=""}},remove:function(e){for(var t=0,n=e.length;t<n;t++){var i=e[t].style;i.marginLeft="",i.marginRight=""}}};return I(i,"value",{get:function(){return L(e.settings.gap)}}),I(i,"grow",{get:function(){return i.value*t.Sizes.length}}),I(i,"reductor",{get:function(){var t=e.settings.perView;return i.value*(t-1)/t}}),n.on(["build.after","update"],W((function(){i.apply(t.Html.wrapper.children)}),30)),n.on("destroy",(function(){i.remove(t.Html.wrapper.children)})),i},Move:function(e,t,n){var i={mount:function(){this._o=0},make:function(){var e=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.offset=i,n.emit("move",{movement:this.value}),t.Transition.after((function(){n.emit("move.after",{movement:e.value})}))}};return I(i,"offset",{get:function(){return i._o},set:function(e){i._o=R(e)?0:L(e)}}),I(i,"translate",{get:function(){return t.Sizes.slideWidth*e.index}}),I(i,"value",{get:function(){var e=this.offset,n=this.translate;return t.Direction.is("rtl")?n+e:n-e}}),n.on(["build.before","run"],(function(){i.make()})),i},Clones:function(e,t,n){var i={mount:function(){this.items=[],e.isType("carousel")&&(this.items=this.collect())},collect:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=t.Html.slides,r=e.settings,o=r.perView,s=r.classes,a=r.cloningRatio;if(i.length>0)for(var c=o+ +!!e.settings.peek+Math.round(o/2),u=i.slice(0,c).reverse(),l=i.slice(-1*c),d=0;d<Math.max(a,Math.floor(o/i.length));d++){for(var f=0;f<u.length;f++){var m=u[f].cloneNode(!0);m.classList.add(s.slide.clone),n.push(m)}for(var h=0;h<l.length;h++){var p=l[h].cloneNode(!0);p.classList.add(s.slide.clone),n.unshift(p)}}return n},append:function(){for(var e=this.items,n=t.Html,i=n.wrapper,r=n.slides,o=Math.floor(e.length/2),s=e.slice(0,o).reverse(),a=e.slice(-1*o).reverse(),c="".concat(t.Sizes.slideWidth,"px"),u=0;u<a.length;u++)i.appendChild(a[u]);for(var l=0;l<s.length;l++)i.insertBefore(s[l],r[0]);for(var d=0;d<e.length;d++)e[d].style.width=c},remove:function(){for(var e=this.items,n=0;n<e.length;n++)t.Html.wrapper.removeChild(e[n])}};return I(i,"grow",{get:function(){return(t.Sizes.slideWidth+t.Gaps.value)*i.items.length}}),n.on("update",(function(){i.remove(),i.mount(),i.append()})),n.on("build.before",(function(){e.isType("carousel")&&i.append()})),n.on("destroy",(function(){i.remove()})),i},Resize:function(e,t,n){var i=new $,r={mount:function(){this.bind()},bind:function(){i.on("resize",window,W((function(){n.emit("resize")}),e.settings.throttle))},unbind:function(){i.off("resize",window)}};return n.on("destroy",(function(){r.unbind(),i.destroy()})),r},Build:function(e,t,n){var i={mount:function(){n.emit("build.before"),this.typeClass(),this.activeClass(),n.emit("build.after")},typeClass:function(){t.Html.root.classList.add(e.settings.classes.type[e.settings.type])},activeClass:function(){var n=e.settings.classes,i=t.Html.slides[e.index];i&&(i.classList.add(n.slide.active),B(i).forEach((function(e){e.classList.remove(n.slide.active)})))},removeClasses:function(){var n=e.settings.classes,i=n.type,r=n.slide;t.Html.root.classList.remove(i[e.settings.type]),t.Html.slides.forEach((function(e){e.classList.remove(r.active)}))}};return n.on(["destroy","update"],(function(){i.removeClasses()})),n.on(["resize","update"],(function(){i.mount()})),n.on("move.after",(function(){i.activeClass()})),i},Run:function(e,t,n){var i={mount:function(){this._o=!1},make:function(i){var r=this;e.disabled||(!e.settings.waitForTransition||e.disable(),this.move=i,n.emit("run.before",this.move),this.calculate(),n.emit("run",this.move),t.Transition.after((function(){r.isStart()&&n.emit("run.start",r.move),r.isEnd()&&n.emit("run.end",r.move),r.isOffset()&&(r._o=!1,n.emit("run.offset",r.move)),n.emit("run.after",r.move),e.enable()})))},calculate:function(){var t=this.move,n=this.length,r=t.steps,o=t.direction,s=1;if("="===o)return e.settings.bound&&L(r)>n?void(e.index=n):void(e.index=r);if(">"!==o||">"!==r)if("<"!==o||"<"!==r){if("|"===o&&(s=e.settings.perView||1),">"===o||"|"===o&&">"===r){var a=function(t){var n=e.index;return e.isType("carousel")?n+t:n+(t-n%t)}(s);return a>n&&(this._o=!0),void(e.index=function(t,n){var r=i.length;return t<=r?t:e.isType("carousel")?t-(r+1):e.settings.rewind?i.isBound()&&!i.isEnd()?r:0:i.isBound()?r:Math.floor(r/n)*n}(a,s))}if("<"===o||"|"===o&&"<"===r){var c=function(t){var n=e.index;return e.isType("carousel")?n-t:(Math.ceil(n/t)-1)*t}(s);return c<0&&(this._o=!0),void(e.index=function(t,n){var r=i.length;return t>=0?t:e.isType("carousel")?t+(r+1):e.settings.rewind?i.isBound()&&i.isStart()?r:Math.floor(r/n)*n:0}(c,s))}T("Invalid direction pattern [".concat(o).concat(r,"] has been used"))}else e.index=0;else e.index=n},isStart:function(){return e.index<=0},isEnd:function(){return e.index>=this.length},isOffset:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return e?!!this._o&&("|>"===e?"|"===this.move.direction&&">"===this.move.steps:"|<"===e?"|"===this.move.direction&&"<"===this.move.steps:this.move.direction===e):this._o},isBound:function(){return e.isType("slider")&&"center"!==e.settings.focusAt&&e.settings.bound}};return I(i,"move",{get:function(){return this._m},set:function(e){var t=e.substr(1);this._m={direction:e.substr(0,1),steps:t?L(t)?L(t):t:0}}}),I(i,"length",{get:function(){var n=e.settings,i=t.Html.slides.length;return this.isBound()?i-1-(L(n.perView)-1)+L(n.focusAt):i-1}}),I(i,"offset",{get:function(){return this._o}}),i},Swipe:function(e,t,n){var i=new $,r=0,o=0,s=0,a=!1,c=!!ee&&{passive:!0},u={mount:function(){this.bindSwipeStart()},start:function(t){if(!a&&!e.disabled){this.disable();var i=this.touches(t);r=null,o=L(i.pageX),s=L(i.pageY),this.bindSwipeMove(),this.bindSwipeEnd(),n.emit("swipe.start")}},move:function(i){if(!e.disabled){var a=e.settings,c=a.touchAngle,u=a.touchRatio,l=a.classes,d=this.touches(i),f=L(d.pageX)-o,m=L(d.pageY)-s,h=Math.abs(f<<2),p=Math.abs(m<<2),g=Math.sqrt(h+p),v=Math.sqrt(p);if(!(180*(r=Math.asin(v/g))/Math.PI<c))return!1;i.stopPropagation(),t.Move.make(f*parseFloat(u)),t.Html.root.classList.add(l.dragging),n.emit("swipe.move")}},end:function(i){if(!e.disabled){var s=e.settings,a=s.perSwipe,c=s.touchAngle,u=s.classes,l=this.touches(i),d=this.threshold(i),f=l.pageX-o,m=180*r/Math.PI;this.enable(),f>d&&m<c?t.Run.make(t.Direction.resolve("".concat(a,"<"))):f<-d&&m<c?t.Run.make(t.Direction.resolve("".concat(a,">"))):t.Move.make(),t.Html.root.classList.remove(u.dragging),this.unbindSwipeMove(),this.unbindSwipeEnd(),n.emit("swipe.end")}},bindSwipeStart:function(){var n=this,r=e.settings,o=r.swipeThreshold,s=r.dragThreshold;o&&i.on(te[0],t.Html.wrapper,(function(e){n.start(e)}),c),s&&i.on(te[1],t.Html.wrapper,(function(e){n.start(e)}),c)},unbindSwipeStart:function(){i.off(te[0],t.Html.wrapper,c),i.off(te[1],t.Html.wrapper,c)},bindSwipeMove:function(){var n=this;i.on(ne,t.Html.wrapper,W((function(e){n.move(e)}),e.settings.throttle),c)},unbindSwipeMove:function(){i.off(ne,t.Html.wrapper,c)},bindSwipeEnd:function(){var e=this;i.on(ie,t.Html.wrapper,(function(t){e.end(t)}))},unbindSwipeEnd:function(){i.off(ie,t.Html.wrapper)},touches:function(e){return re.indexOf(e.type)>-1?e:e.touches[0]||e.changedTouches[0]},threshold:function(t){var n=e.settings;return re.indexOf(t.type)>-1?n.dragThreshold:n.swipeThreshold},enable:function(){return a=!1,t.Transition.enable(),this},disable:function(){return a=!0,t.Transition.disable(),this}};return n.on("build.after",(function(){t.Html.root.classList.add(e.settings.classes.swipeable)})),n.on("destroy",(function(){u.unbindSwipeStart(),u.unbindSwipeMove(),u.unbindSwipeEnd(),i.destroy()})),u},Images:function(e,t,n){var i=new $,r={mount:function(){this.bind()},bind:function(){i.on("dragstart",t.Html.wrapper,this.dragstart)},unbind:function(){i.off("dragstart",t.Html.wrapper)},dragstart:function(e){e.preventDefault()}};return n.on("destroy",(function(){r.unbind(),i.destroy()})),r},Anchors:function(e,t,n){var i=new $,r=!1,o=!1,s={mount:function(){this._a=t.Html.wrapper.querySelectorAll("a"),this.bind()},bind:function(){i.on("click",t.Html.wrapper,this.click)},unbind:function(){i.off("click",t.Html.wrapper)},click:function(e){o&&(e.stopPropagation(),e.preventDefault())},detach:function(){if(o=!0,!r){for(var e=0;e<this.items.length;e++)this.items[e].draggable=!1;r=!0}return this},attach:function(){if(o=!1,r){for(var e=0;e<this.items.length;e++)this.items[e].draggable=!0;r=!1}return this}};return I(s,"items",{get:function(){return s._a}}),n.on("swipe.move",(function(){s.detach()})),n.on("swipe.end",(function(){t.Transition.after((function(){s.attach()}))})),n.on("destroy",(function(){s.attach(),s.unbind(),i.destroy()})),s},Controls:function(e,t,n){var i=new $,r=!!ee&&{passive:!0},o={mount:function(){this._n=t.Html.root.querySelectorAll('[data-glide-el="controls[nav]"]'),this._c=t.Html.root.querySelectorAll(oe),this._arrowControls={previous:t.Html.root.querySelectorAll(se),next:t.Html.root.querySelectorAll(ae)},this.addBindings()},setActive:function(){for(var e=0;e<this._n.length;e++)this.addClass(this._n[e].children)},removeActive:function(){for(var e=0;e<this._n.length;e++)this.removeClass(this._n[e].children)},addClass:function(t){var n=e.settings,i=t[e.index];i&&(i.classList.add(n.classes.nav.active),B(i).forEach((function(e){e.classList.remove(n.classes.nav.active)})))},removeClass:function(t){var n=t[e.index];null==n||n.classList.remove(e.settings.classes.nav.active)},setArrowState:function(){if(!e.settings.rewind){var n=o._arrowControls.next,i=o._arrowControls.previous;this.resetArrowState(n,i),0===e.index&&this.disableArrow(i),e.index===t.Run.length&&this.disableArrow(n)}},resetArrowState:function(){for(var t=e.settings,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];i.forEach((function(e){q(e).forEach((function(e){e.classList.remove(t.classes.arrow.disabled)}))}))},disableArrow:function(){for(var t=e.settings,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];i.forEach((function(e){q(e).forEach((function(e){e.classList.add(t.classes.arrow.disabled)}))}))},addBindings:function(){for(var e=0;e<this._c.length;e++)this.bind(this._c[e].children)},removeBindings:function(){for(var e=0;e<this._c.length;e++)this.unbind(this._c[e].children)},bind:function(e){for(var t=0;t<e.length;t++)i.on("click",e[t],this.click),i.on("touchstart",e[t],this.click,r)},unbind:function(e){for(var t=0;t<e.length;t++)i.off(["click","touchstart"],e[t])},click:function(e){ee||"touchstart"!==e.type||e.preventDefault();var n=e.currentTarget.getAttribute("data-glide-dir");t.Run.make(t.Direction.resolve(n))}};return I(o,"items",{get:function(){return o._c}}),n.on(["mount.after","move.after"],(function(){o.setActive()})),n.on(["mount.after","run"],(function(){o.setArrowState()})),n.on("destroy",(function(){o.removeBindings(),o.removeActive(),i.destroy()})),o},Keyboard:function(e,t,n){var i=new $,r={mount:function(){e.settings.keyboard&&this.bind()},bind:function(){i.on("keyup",document,this.press)},unbind:function(){i.off("keyup",document)},press:function(n){var i=e.settings.perSwipe;["ArrowRight","ArrowLeft"].includes(n.code)&&t.Run.make(t.Direction.resolve("".concat(i).concat({ArrowRight:">",ArrowLeft:"<"}[n.code])))}};return n.on(["destroy","update"],(function(){r.unbind()})),n.on("update",(function(){r.mount()})),n.on("destroy",(function(){i.destroy()})),r},Autoplay:function(e,t,n){var i=new $,r={mount:function(){this.enable(),this.start(),e.settings.hoverpause&&this.bind()},enable:function(){this._e=!0},disable:function(){this._e=!1},start:function(){var i=this;this._e&&(this.enable(),e.settings.autoplay&&R(this._i)&&(this._i=setInterval((function(){i.stop(),t.Run.make(">"),i.start(),n.emit("autoplay")}),this.time)))},stop:function(){this._i=clearInterval(this._i)},bind:function(){var e=this;i.on("mouseover",t.Html.root,(function(){e._e&&e.stop()})),i.on("mouseout",t.Html.root,(function(){e._e&&e.start()}))},unbind:function(){i.off(["mouseover","mouseout"],t.Html.root)}};return I(r,"time",{get:function(){return L(t.Html.slides[e.index].getAttribute("data-glide-autoplay")||e.settings.autoplay)}}),n.on(["destroy","update"],(function(){r.unbind()})),n.on(["run.before","swipe.start","update"],(function(){r.stop()})),n.on(["pause","destroy"],(function(){r.disable(),r.stop()})),n.on(["run.after","swipe.end"],(function(){r.start()})),n.on(["play"],(function(){r.enable(),r.start()})),n.on("update",(function(){r.mount()})),n.on("destroy",(function(){i.destroy()})),r},Breakpoints:function(e,t,n){var i=new $,r=e.settings,o=ce(r.breakpoints),s=Object.assign({},r),a={match:function(e){if(void 0!==window.matchMedia)for(var t in e)if(e.hasOwnProperty(t)&&window.matchMedia("(max-width: ".concat(t,"px)")).matches)return e[t];return s}};return Object.assign(r,a.match(o)),i.on("resize",window,W((function(){e.settings=N(r,a.match(o))}),e.settings.throttle)),n.on("update",(function(){o=ce(o),s=Object.assign({},r)})),n.on("destroy",(function(){i.off("resize",window)})),a}},le=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(n,e);var t=x(n);function n(){return b(this,n),t.apply(this,arguments)}return k(n,[{key:"mount",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return O(S(n.prototype),"mount",this).call(this,Object.assign({},ue,e))}}]),n}(D);const de=({perView:t=1,width:n,maxWidth:i,carouselItems:r,cssClass:o="",CustomNavComponent:s,role:a,ariaLabelledBy:u,isFullWidth:l,removeSideBackground:d=!1,hasNavButtons:f=!0,hasPositionIndicators:m=!0,imageAutoSize:g=!0,onItemClick:v=()=>null,hasPeek:y=!0,isDraggable:b=!0,hasShadow:w=!0})=>{const k=`glide-${Math.ceil(1e4*Math.random())}`,_=function(e,t){let n;return n=e,Math.max(document.documentElement.clientWidth||0,window.innerWidth||0)>=992&&(t>=2&&(n=e-1),t>=3&&(n=e-2)),n}(r.length,t);return(0,e.useEffect)((()=>{!function({instanceName:e,perView:t,buttonCount:n,isFullWidth:i=!1,onItemClick:r,hasPeek:o=!0,isDraggable:s}){const a=function(e=1,t,n=!0,i){const{perViewSm:r,perViewMd:o,perViewLg:s}=function(e){let t,n,i;switch(e){case 3:t=1,n=2,i=3;break;case 2:t=1,n=2,i=2;break;default:t=1,n=1,i=1}return{perViewSm:t,perViewMd:n,perViewLg:i}}(e),a=n?{before:48,after:48}:0,c=n?{before:124,after:124}:0;return{type:"slider",focusAt:0,bound:!0,rewind:!1,gap:n?24:0,keyboard:!1,startAt:0,swipeThreshold:80,dragThreshold:!!i&&120,perTouch:1,perView:s,peek:c,breakpoints:t?null:{576:{perView:r,peek:a},768:{perView:o,peek:a},992:{perView:s,peek:a},1260:{perView:s,peek:a},1400:{perView:s,peek:c},1920:{perView:s,peek:c}}}}(t,i,o,s),c=new le(`#${e}`,a);let u=document.querySelector(`#${e}`);u.addEventListener("keyup",(e=>{39===e.keyCode?c.go(">"):37===e.keyCode?c.go("<"):13===e.keyCode&&c.go(document.activeElement.dataset.glideDir)})),c.on("build.before",(()=>{u=document.querySelector(`#${e}`),u&&u.classList.add("slider-start")})),c.on("move",(()=>{if(u=document.querySelector(`#${e}`),!u)return;const t=c.index,i=u.querySelector(".navigation-slider"),o=u.querySelector(".image-navigator-images");if(i&&o){const e=i.querySelectorAll(".bullet-image-container"),n=i.clientWidth,r=82,s=e[t],a=o.getBoundingClientRect().x,c=i.getBoundingClientRect().x-a,u=s.getBoundingClientRect().x-a,l=s.getBoundingClientRect().x+s.getBoundingClientRect().width-a;if(0===t||u<=0+r)i.style.left=`${c-u+r}px`;else if(l>=n-r){const e=l-n;i.style.left=c-e-r+"px"}}!function(e,t,n){const i=e.querySelector(".glide__arrow--prev"),r=e.querySelector(".glide__arrow--next"),o=e.querySelector(".glide__track"),s=e.querySelector(".image-navigator-images");if(!i&&!r)return;const a=["slider-start","slider-mid","slider-end"],c="glide__arrow--disabled";o?.classList.remove(...a),s?.classList.remove(...a),0===t?(o?.classList.add("slider-start"),s?.classList.add("slider-start"),i.classList.add(c),r.classList.remove(c)):t>=n-1?(o?.classList.add("slider-end"),s?.classList.add("slider-end"),i.classList.remove(c),r.classList.add(c)):(o?.classList.add("slider-mid"),s?.classList.add("slider-mid"),i.classList.remove(c),r.classList.remove(c))}(u,t,n),u.setAttribute("data-current-index",t),r&&r(t)})),c.mount()}({instanceName:k,perView:t,buttonCount:_,isFullWidth:l,onItemClick:v,hasPeek:y,isDraggable:b})}),[k,t,_,l,v,y,b]),(0,e.createElement)("div",{role:a,"aria-labelledby":u,className:`glide ${o}`,id:k,style:{width:n,maxWidth:i},"data-remove-side-background":d,"data-image-auto-size":g,"data-has-shadow":w},(0,e.createElement)("div",{className:"glide__track","data-glide-el":"track"},(0,e.createElement)(p,{carouselItems:r})),s?(0,e.createElement)(s,{instanceName:k}):(0,e.createElement)(e.Fragment,null,m&&(0,e.createElement)(c,{buttonCount:_}),f&&(0,e.createElement)(h,null)))};de.propTypes={perView:r().number,width:r().string,maxWidth:r().string,carouselItems:r().arrayOf(r().object).isRequired,cssClass:r().string,CustomNavComponent:r().func,role:r().string,ariaLabelledBy:r().string,onItemClick:r().func,isFullWidth:r().bool,removeSideBackground:r().bool,hasNavButtons:r().bool,hasPositionIndicators:r().bool,imageAutoSize:r().bool,hasPeek:r().bool,isDraggable:r().bool,hasShadow:r().bool};const fe={imageItems:r().arrayOf(r().shape({id:r().number,imageSource:r().string,thumbnailSource:r().string,imageAltText:r().string,content:r().oneOfType([r().string,r().element])})),hasContent:r().bool},me=({id:t,imageSource:n,imageAltText:i})=>({id:t,item:(0,e.createElement)("div",{className:"uds-img"},(0,e.createElement)("img",{src:n,className:"uds-img figure-img img-fluid",alt:i,loading:"lazy",decoding:"async"}))}),he=({instanceName:t,imageItems:n,hasContent:i})=>{const r="data-current-index",[o,s]=(0,e.useState)(n[0].title),[a,c]=(0,e.useState)(n[0].content),f=e=>{const t=n[e];s(t.title),c(t.content)};(0,e.useEffect)((()=>{const e=document.querySelector(".image-gallery figcaption .uds-caption-text div");if(e){const t=parseInt(window.getComputedStyle(e,null).getPropertyValue("width").split("px")[0],10),i=n.reduce(((e,n)=>{const i=((e,t)=>{if(!e)return 0;const n=(e.match(/<br/g)||[]).length,i=t/6;return 20*(parseInt(e.length/i,10)+n)})(n.content,t);return i>e?i:e}),0);e.style.height=`${i}px`}const i=document.querySelector(`#${t}`);new MutationObserver((function(e){for(const t of e)if(t&&t.attributeName===r)return f(+i.getAttribute(r));return null})).observe(i,{attributes:!0})}),[t]);const h=n.map((e=>e.imageSource));return(0,e.createElement)("div",{className:"image-gallery-action-area","data-has-content":i},(0,e.createElement)("div",{className:"image-navigator"},(0,e.createElement)(m,null,(0,e.createElement)(d,null),(0,e.createElement)("div",{className:"image-navigator-images"},(0,e.createElement)("div",{className:"navigation-slider"},(0,e.createElement)(u,{imageItems:h,onItemClick:e=>f(e)}))),(0,e.createElement)(l,null))),i&&(o||a)?(0,e.createElement)("figcaption",{id:"caption",className:"figure-caption uds-figure-caption","data-testid":"image-gallery-content-container"},(0,e.createElement)("div",{className:"uds-caption-text"},o?(0,e.createElement)("h3",null,o):null,(0,e.createElement)("div",{dangerouslySetInnerHTML:{__html:a}}))):null)};he.propTypes={instanceName:r().string,imageItems:fe.imageItems,hasContent:fe.hasContent};const pe=({width:t,maxWidth:n,imageItems:i,hasContent:r=!1,imageAutoSize:o=!0})=>{const s=i.map(me),a=i.length>1;return(0,e.createElement)(de,{perView:1,maxWidth:n,width:t,carouselItems:s,cssClass:"image-gallery",role:"figure",ariaLabelledBy:r?"caption":null,isFullWidth:!0,imageAutoSize:o,hasPeek:!1,CustomNavComponent:({instanceName:t})=>(0,e.createElement)(he,{instanceName:t,hasContent:r,imageItems:i,maxWidth:n}),removeSideBackground:i.length<=1,hasPositionIndicators:a,hasNavButtons:a,isDraggable:a,hasShadow:!0})};pe.propTypes={imageItems:fe.imageItems.isRequired,hasContent:fe.hasContent,width:r().string,maxWidth:r().string,imageAutoSize:r().bool},document.querySelectorAll(".wp-block-unity-carousels-image-gallery-carousel").forEach((n=>{const i=(0,t.H)(n),r=JSON.parse(n.dataset.imageItems),o={perView:n.dataset.perView,imageItems:r,maxWidth:n.dataset.maxWidth,imageAutoSize:"true"===n.dataset.imageAutoSize,hasContent:"true"===n.dataset.hasContent};i.render((0,e.createElement)(pe,{...o}))}))})()})();