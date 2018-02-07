// { "framework": "Vue"} 

!function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};t.m=e,t.c=o,t.i=function(e){return e},t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=37)}([,,,,,,,function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var r=n(o(26)).default,i=n(o(23)).default;e.exports={components:{WxcButton:i,WxcPopup:r},data:function(){return{isShow:!1}},methods:{buttonClicked:function(){this.isShow=!0},overlayClicked:function(){this.isShow=!1}}}},,,,,,,,,,,,function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("wxc-button",{attrs:{text:"Open Popup"},on:{wxcButtonClicked:e.buttonClicked}}),o("wxc-popup",{attrs:{width:"500",pos:"left",show:e.isShow},on:{wxcPopupOverlayClicked:e.overlayClicked}})],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},,,,function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(27);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n(r).default}})},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.STYLE_MAP={red:{backgroundColor:"#FF5000"},yellow:{backgroundColor:"#FFC900"},normal:{backgroundColor:"#FFFFFF",borderColor:"#A5A5A5",borderWidth:"1px"},highlight:{backgroundColor:"#FFFFFF",borderColor:"#EE9900",borderWidth:"1px"}},t.TEXT_STYLE_MAP={taobao:{color:"#FFFFFF"},fliggy:{color:"#3D3D3D"},normal:{color:"#3D3D3D"},highlight:{color:"#EE9900"}}},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(28);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n(r).default}})},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(29);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n(r).default}})},function(e,t,o){var n,r,i=[];i.push(o(43)),n=o(38);var s=o(46);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r=n=n.default),"function"==typeof r&&(r=r.options),r.__file="/Users/duqian/Development/MyGitHub/weex-demo-dusan/weex-demo/node_modules/weex-ui/packages/wxc-button/index.vue",r.render=s.render,r.staticRenderFns=s.staticRenderFns,r._scopeId="data-v-30d7f2d2",r.style=r.style||{},i.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),e.exports=n},function(e,t,o){var n,r,i=[];i.push(o(42)),n=o(39);var s=o(45);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r=n=n.default),"function"==typeof r&&(r=r.options),r.__file="/Users/duqian/Development/MyGitHub/weex-demo-dusan/weex-demo/node_modules/weex-ui/packages/wxc-overlay/index.vue",r.render=s.render,r.staticRenderFns=s.staticRenderFns,r._scopeId="data-v-578711e1",r.style=r.style||{},i.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),e.exports=n},function(e,t,o){var n,r,i=[];i.push(o(41)),n=o(40);var s=o(44);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r=n=n.default),"function"==typeof r&&(r=r.options),r.__file="/Users/duqian/Development/MyGitHub/weex-demo-dusan/weex-demo/node_modules/weex-ui/packages/wxc-popup/index.vue",r.render=s.render,r.staticRenderFns=s.staticRenderFns,r._scopeId="data-v-7f66a0bd",r.style=r.style||{},i.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),e.exports=n},,,,,,,,function(e,t,o){var n,r,i=[];n=o(7);var s=o(19);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r=n=n.default),"function"==typeof r&&(r=r.options),r.__file="/Users/duqian/Development/MyGitHub/weex-demo-dusan/weex-demo/src/weex-ui.vue",r.render=s.render,r.staticRenderFns=s.staticRenderFns,r.style=r.style||{},i.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),e.exports=n,e.exports.el="true",new Vue(e.exports)},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},r=o(24);t.default={props:{text:{type:String,default:"确认"},type:{type:String,default:"red"},disabled:{type:Boolean,default:!1},btnStyle:Object,textStyle:Object},computed:{mrBtnStyle:function(){var e=this.type,t=this.disabled,o=this.btnStyle,i=n({},r.STYLE_MAP[e],o);return t?n({},i,{backgroundColor:"rgba(0, 0, 0, 0.1)",borderWidth:0}):i},mrTextStyle:function(){var e=this.type,t=this.disabled,o=this.textStyle,i=n({},r.TEXT_STYLE_MAP[e],o);return t?n({},i,{color:"#FFFFFF"}):i}},methods:{onClicked:function(e){var t=this.type,o=this.disabled;this.$emit("wxcButtonClicked",{e:e,type:t,disabled:o})}}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=weex.requireModule("animation");t.default={props:{show:{type:Boolean,default:!0},hasAnimation:{type:Boolean,default:!0},duration:{type:[Number,String],default:300},timingFunction:{type:Array,default:function(){return["ease-in","ease-out"]}},opacity:{type:[Number,String],default:.6},canAutoClose:{type:Boolean,default:!0}},computed:{overlayStyle:function(){return{opacity:this.hasAnimation?0:1,backgroundColor:"rgba(0, 0, 0,"+this.opacity+")"}},shouldShow:function(){var e=this,t=this.show;return this.hasAnimation&&setTimeout(function(){e.appearOverlay(t)},50),t}},methods:{overlayClicked:function(e){this.canAutoClose?this.appearOverlay(!1):this.$emit("wxcOverlayBodyClicked",{})},appearOverlay:function(e){var t=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.duration,r=this.hasAnimation,i=this.timingFunction,s=this.canAutoClose,a=!e&&s;a&&this.$emit("wxcOverlayBodyClicking",{});var u=this.$refs["wxc-overlay"];r&&u?n.transition(u,{styles:{opacity:e?1:0},duration:o,timingFunction:i[e?0:1],delay:0},function(){a&&t.$emit("wxcOverlayBodyClicked",{})}):a&&this.$emit("wxcOverlayBodyClicked",{})}}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=o(25),s=function(e){return e&&e.__esModule?e:{default:e}}(i),a=weex.requireModule("animation"),u=weex.config.env.platform,l="object"===("undefined"==typeof window?"undefined":r(window))&&"web"===u.toLowerCase();t.default={components:{WxcOverlay:s.default},props:{show:{type:Boolean,default:!1},pos:{type:String,default:"bottom"},popupColor:{type:String,default:"#FFFFFF"},overlayCfg:{type:Object,default:function(){return{hasAnimation:!0,timingFunction:["ease-in","ease-out"],duration:300,opacity:.6}}},height:{type:[Number,String],default:840},standOut:{type:[Number,String],default:0},width:{type:[Number,String],default:750},animation:{type:Object,default:function(){return{timingFunction:"ease-in"}}}},data:function(){return{haveOverlay:!0,isOverShow:!0}},computed:{isNeedShow:function(){var e=this;return setTimeout(function(){e.appearPopup(e.show)},50),this.show},_height:function(){return this.appearPopup(this.show,150),this.height},transformValue:function(){return this.getTransform(this.pos,this.width,this.height,!0)},padStyle:function(){var e=this.pos,t=this.width,o=this.height,r=this.popupColor,i={width:t+"px",backgroundColor:r};return"top"===e&&(i=n({},i,{top:-o+"px",height:o+"px"})),"bottom"===e&&(i=n({},i,{bottom:-o+"px",height:o+"px"})),"left"===e&&(i=n({},i,{left:-t+"px"})),"right"===e&&(i=n({},i,{right:-t+"px"})),i}},methods:{handleTouchEnd:function(e){"Web"===weex.config.env.platform&&e.preventDefault&&e.preventDefault()},hide:function(){this.appearPopup(!1),this.$refs.overlay.appearOverlay(!1)},wxcOverlayBodyClicking:function(){this.isShow&&this.appearPopup(!1)},appearPopup:function(e){var t=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;this.isShow=e;var r=this.$refs["wxc-popup"];r&&a.transition(r,n({styles:{transform:this.getTransform(this.pos,this.width,this.height,!e)},duration:o,delay:0},this.animation),function(){e||t.$emit("wxcPopupOverlayClicked",{pos:t.pos})})},getTransform:function(e,t,o,n){var r="top"===e||"bottom"===e?o:t,i=void 0;switch(l&&(r-=this.standOut),n&&(r=0),e){case"top":i="translateY("+r+"px)";break;case"bottom":i="translateY(-"+r+"px)";break;case"left":i="translateX("+r+"px)";break;case"right":i="translateX(-"+r+"px)"}return i}}}},function(e,t){e.exports={"wxc-popup":{position:"fixed",width:750},top:{left:0,right:0},bottom:{left:0,right:0},left:{bottom:0,top:0},right:{bottom:0,top:0}}},function(e,t){e.exports={"wxc-overlay":{width:750,position:"fixed",left:0,top:0,bottom:0,right:0}}},function(e,t){e.exports={"wxc-btn":{width:702,height:88,alignItems:"center",justifyContent:"center",borderRadius:12},"btn-text":{textOverflow:"ellipsis",lines:1,fontSize:36,color:"#ffffff"}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{on:{touchend:e.handleTouchEnd}},[e.show?o("wxc-overlay",e._b({ref:"overlay",attrs:{show:e.haveOverlay&&e.isOverShow},on:{wxcOverlayBodyClicking:e.wxcOverlayBodyClicking}},"wxc-overlay",e.overlayCfg,!1)):e._e()],1),e.show?o("div",{ref:"wxc-popup",class:["wxc-popup",e.pos],style:e.padStyle,attrs:{height:e._height,hack:e.isNeedShow},on:{click:function(){}}},[e._t("default")],2):e._e()])},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e.show?o("div",{ref:"wxc-overlay",staticClass:["wxc-overlay"],style:e.overlayStyle,attrs:{hack:e.shouldShow},on:{click:e.overlayClicked}}):e._e()])},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:["wxc-btn"],style:e.mrBtnStyle,attrs:{accessible:!0,ariaLabel:e.text},on:{click:e.onClicked}},[o("text",{staticClass:["btn-text"],style:e.mrTextStyle},[e._v(e._s(e.text))])])},staticRenderFns:[]},e.exports.render._withStripped=!0}]);