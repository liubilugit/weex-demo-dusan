// { "framework": "Vue"} 

!function(e){function t(o){if(n[o])return n[o].exports;var s=n[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=30)}({0:function(e,t){e.exports=function(e,t,n,o,s){var r,a=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(r=e,a=e.default);var l="function"==typeof a?a.options:a;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns),o&&(l._scopeId=o);var d;if(s?(d=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=d):n&&(d=n),d){var u=l.functional,c=u?l.render:l.beforeCreate;u?l.render=function(e,t){return d.call(t),c(e,t)}:l.beforeCreate=c?[].concat(c,d):[d]}return{esModule:r,exports:a,options:l}}},1:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},s=0;s<this.length;s++){var r=this[s][0];"number"==typeof r&&(o[r]=!0)}for(s=0;s<t.length;s++){var a=t[s];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},18:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=weex.requireModule("MyMoudle"),s=weex.requireModule("modal"),r=weex.requireModule("navigator");weex.requireModule("globalEvent").addEventListener("testEvent",function(e){console.log("get testEvent"),s.toast({message:"weex js收到了Native的 "+e.key,duration:1})}),t.default={data:{logoUrl:"http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png",target:"Weex",url:"http://dotwe.org/raw/dist/ef2bd84edd068291e8bb8ea334e33cb9.bundle.wx?_wx_tpl=http://dotwe.org/raw/dist/ef2bd84edd068291e8bb8ea334e33cb9.bundle.wx"},methods:{update:function(){console.log("update"),this.target="Nono",console.log("target:",this.target),s.toast({message:"update weex 2 nono",duration:1})},jump:function(e){console.log("will jump"),r.push({url:"http://dotwe.org/raw/dist/6fe11640e8d25f2f98176e9643c08687.bundle.js",animated:"false"},function(e){s.toast({message:"callback: "+e})})},sendMsg:function(){console.log("sendMsg"),o.sendMessage("weex发送指令给native"),o.openPageByUrl(this.url),s.toast({message:"sendMsg 2 native",duration:1})}}}},2:function(e,t,n){function o(e){for(var t=0;t<e.length;t++){var n=e[t],o=u[n.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](n.parts[s]);for(;s<n.parts.length;s++)o.parts.push(r(n.parts[s]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var a=[],s=0;s<n.parts.length;s++)a.push(r(n.parts[s]));u[n.id]={id:n.id,refs:1,parts:a}}}}function s(){var e=document.createElement("style");return e.type="text/css",c.appendChild(e),e}function r(e){var t,n,o=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(o){if(g)return f;o.parentNode.removeChild(o)}if(v){var r=A++;o=p||(p=s()),t=a.bind(null,o,r,!1),n=a.bind(null,o,r,!0)}else o=s(),t=i.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}function a(e,t,n,o){var s=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=x(t,s);else{var r=document.createTextNode(s),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function i(e,t){var n=t.css,o=t.media,s=t.sourceMap;if(o&&e.setAttribute("media",o),s&&(n+="\n/*# sourceURL="+s.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d=n(3),u={},c=l&&(document.head||document.getElementsByTagName("head")[0]),p=null,A=0,g=!1,f=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){g=n;var s=d(e,t);return o(s),function(t){for(var n=[],r=0;r<s.length;r++){var a=s[r],i=u[a.id];i.refs--,n.push(i)}t?(s=d(e,t),o(s)):s=[];for(var r=0;r<n.length;r++){var i=n[r];if(0===i.refs){for(var l=0;l<i.parts.length;l++)i.parts[l]();delete u[i.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},3:function(e,t){e.exports=function(e,t){for(var n=[],o={},s=0;s<t.length;s++){var r=t[s],a=r[0],i=r[1],l=r[2],d=r[3],u={id:e+":"+s,css:i,media:l,sourceMap:d};o[a]?o[a].parts.push(u):n.push(o[a]={id:a,parts:[u]})}return n}},30:function(e,t,n){"use strict";var o=n(7);o.el="#root",new Vue(o)},42:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.wrapper {\n  align-items: center;\n  min-height: 1000px;\n  background-color: #888;\n  padding-top: 50px;\n}\n.title {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  font-size: 35px;\n  color: antiquewhite;\n}\n.logo {\n  width: 360px;\n  height: 156px;\n  margin-top: 50px;\n}\n.desc {\n  padding-top: 20px;\n  color: azure;\n  font-size: 24px;\n}\n.btn {\n  width: 350px;\n  height: 60px;\n  background-color: antiquewhite;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  align-items: center;\n  text-align: center;\n  padding: 10px;\n}\n.inputText {\n  width: 450px;\n  height: 80px;\n  text-align: left;\n  background-color: beige;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  align-items: center;\n  text-align: center;\n}\n","",{version:3,sources:["/Users/duqian/Development/MyGitHub/weex-demo-dusan/weex-demo/src/index.vue?01b0820a"],names:[],mappings:";AA0EA;EACA,oBAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;CACA;AACA;EACA,kBAAA;EACA,qBAAA;EACA,gBAAA;EACA,oBAAA;CACA;AACA;EACA,aAAA;EACA,cAAA;EACA,iBAAA;CACA;AACA;EACA,kBAAA;EACA,aAAA;EACA,gBAAA;CACA;AAEA;EACA,aAAA;EACA,aAAA;EACA,+BAAA;EACA,iBAAA;EACA,oBAAA;EACA,oBAAA;EACA,mBAAA;EACA,cAAA;CACA;AAEA;EACA,aAAA;EACA,aAAA;EACA,iBAAA;EACA,wBAAA;EACA,iBAAA;EACA,oBAAA;EACA,oBAAA;EACA,mBAAA;CACA",file:"index.vue",sourcesContent:['<template>\n  <div class="wrapper" @load="update">\n    <image :src="logoUrl" class="logo"></image>\n    <text class="title"  @click="update">Hello DuQian, {{target}} Up!</text>\n    <text class="desc">Now, let\'s use vue to build weex app.</text>\n    <button class="btn" @click="update">点我测试toast</button>\n    <button class="btn" @click="sendMsg">发消息，更新页面</button>\n    <button class="btn" @click="jump">测试页面跳转</button>\n\n    <textarea class="inputText" value="测试native输入法" />\n    \n  </div>\n</template>\n\n<script>\nconst myMoudle = weex.requireModule("MyMoudle");\nconst modal = weex.requireModule("modal");\nvar navigator = weex.requireModule("navigator");\n\nvar globalEvent = weex.requireModule("globalEvent");\nglobalEvent.addEventListener("testEvent", function(e) {\n  console.log("get testEvent");\n  modal.toast({\n    message: "weex js收到了Native的 " + e.key,\n    duration: 1\n  });\n});\nexport default {\n  data: {\n    logoUrl:\n      "http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png",\n    target: "Weex",\n    url:"http://dotwe.org/raw/dist/ef2bd84edd068291e8bb8ea334e33cb9.bundle.wx?_wx_tpl=http://dotwe.org/raw/dist/ef2bd84edd068291e8bb8ea334e33cb9.bundle.wx",\n  },\n  methods: {\n    update() {\n      console.log("update");\n      this.target = "Nono";\n      console.log("target:", this.target);\n\n      modal.toast({\n        message: "update weex 2 nono",\n        duration: 1\n      });\n    },\n    jump(event) {\n      console.log("will jump");\n      navigator.push(\n        {\n          url://this.url,\n            "http://dotwe.org/raw/dist/6fe11640e8d25f2f98176e9643c08687.bundle.js",\n             //web用 http://192.168.0.68:8081/web/index.html?page=/dist/web/hello.js\n          animated: "false"\n        },\n        event => {\n          modal.toast({ message: "callback: " + event });\n        }\n      );\n    },\n    sendMsg() {\n      console.log("sendMsg");\n\n      myMoudle.sendMessage("weex发送指令给native");\n      myMoudle.openPageByUrl(this.url);\n      \n      modal.toast({\n        message: "sendMsg 2 native",\n        duration: 1\n      });\n    }\n  }\n};\n<\/script>\n<style>\n.wrapper {\n  align-items: center;\n  min-height: 1000px;\n  background-color: #888;\n  padding-top: 50px;\n}\n.title {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  font-size: 35px;\n  color: antiquewhite;\n}\n.logo {\n  width: 360px;\n  height: 156px;\n  margin-top: 50px;\n}\n.desc {\n  padding-top: 20px;\n  color: azure;\n  font-size: 24px;\n}\n\n.btn {\n  width: 350px;\n  height: 60px;\n  background-color: antiquewhite;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  align-items: center;\n  text-align: center;\n  padding: 10px;\n}\n\n.inputText {\n  width: 450px;\n  height: 80px;\n  text-align: left;\n  background-color: beige;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  align-items: center;\n  text-align: center;\n}\n</style>\n'],sourceRoot:""}])},56:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0),on:{load:e.update}},[n("image",{staticClass:"logo",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0),attrs:{src:e.logoUrl}}),e._v(" "),n("text",{staticClass:"title",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0),on:{click:e.update}},[e._v("Hello DuQian, "+e._s(e.target)+" Up!")]),e._v(" "),n("text",{staticClass:"desc",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0)},[e._v("Now, let's use vue to build weex app.")]),e._v(" "),n("button",{staticClass:"btn",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0),on:{click:e.update}},[e._v("点我测试toast")]),e._v(" "),n("button",{staticClass:"btn",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0),on:{click:e.sendMsg}},[e._v("发消息，更新页面")]),e._v(" "),n("button",{staticClass:"btn",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0),on:{click:e.jump}},[e._v("测试页面跳转")]),e._v(" "),n("textarea",{staticClass:"inputText",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0),attrs:{value:"测试native输入法"}})])},staticRenderFns:[]},e.exports.render._withStripped=!0},66:function(e,t,n){var o=n(42);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(2)("034bb8ae",o,!1)},7:function(e,t,n){function o(e){s||n(66)}var s=!1,r=n(0)(n(18),n(56),o,null,null);r.options.__file="/Users/duqian/Development/MyGitHub/weex-demo-dusan/weex-demo/src/index.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports}});
//# sourceMappingURL=index.web.js.map