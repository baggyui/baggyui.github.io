webpackJsonp([1],{106:function(t,n,e){var o=e(83);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e(46)("0b0ba74c",o,!0)},32:function(t,n,e){e(106);var o=e(1)(e(56),e(97),null,null);t.exports=o.exports},38:function(t,n,e){"use strict";var o={};o.default='\n<v-button>默认按钮</v-button>\n<v-button type="primary">主要按钮</v-button>\n<v-button type="text">文字按钮</v-button>\n',o.disabled='\n<v-button :disabled>默认按钮</v-button>\n<v-button type="primary" :disabled>主要按钮</v-button>\n<v-button type="text" :disabled>文字按钮</v-button>\n',o.tip='\n<v-button type="success">成功按钮</v-button>\n<v-button type="warning">警告按钮</v-button>\n<v-button type="danger">危险按钮</v-button>\n<v-button type="info">信息按钮</v-button>\n',o.loading='\n<template>\n  <v-button\n    type="primary"\n    :loading="loading"\n    @click="handleLoading">\n    <span v-if="!loading">点击加载</span>\n    <span v-else>加载中...</span>\n  </v-button>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        loading: false\n      };\n    },\n    methods: {\n      handleLoading() {\n        this.loading = true;\n        setTimeout(() => {\n          this.loading = false;\n        }, 1000);\n      }\n    }\n  };\n<\/script>\n',n.a=o},39:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(4),i=e.n(o);n.default={mounted:function(){var t=this.$refs.code.innerHTML.replace(/\n/,"");this.$refs.code.innerHTML=t,i.a.highlightBlock(this.$refs.code)}}},40:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(4),i=(e.n(o),e(38),e(41)),s=e.n(i);n.default={components:{"ba-code":s.a},data:function(){return{ready:!1,height:0,showCode:!1}},computed:{codeHight:function(){var t={};return this.ready&&(this.showCode?t.height=this.height+"px":t.height="0"),t}},methods:{toggleShowCode:function(){this.showCode=!this.showCode}},mounted:function(){var t=this;this.$nextTick(function(){t.height=t.$refs.meta.clientHeight,t.ready=!0})}}},41:function(t,n,e){var o=e(1)(e(39),e(44),null,null);t.exports=o.exports},42:function(t,n,e){var o=e(1)(e(40),e(43),null,null);t.exports=o.exports},43:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"demo-block"},[e("div",{staticClass:"source"},[t._t("source")],2),t._v(" "),e("div",{ref:"meta",staticClass:"meta",style:t.codeHight},[e("ba-code",[t._t("code")],2),t._v(" "),e("div",{staticClass:"description"},[t._t("desc")],2)],1),t._v(" "),e("div",{staticClass:"control",on:{click:t.toggleShowCode}},[t._v(t._s(t.showCode?"隐藏代码":"显示代码"))])])},staticRenderFns:[]}},44:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"code"},[e("pre",[e("code",{ref:"code",staticClass:"html"},[t._t("default")],2)])])},staticRenderFns:[]}},45:function(t,n){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],n=0;n<this.length;n++){var e=this[n];e[2]?t.push("@media "+e[2]+"{"+e[1]+"}"):t.push(e[1])}return t.join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},i=0;i<this.length;i++){var s=this[i][0];"number"==typeof s&&(o[s]=!0)}for(i=0;i<n.length;i++){var r=n[i];"number"==typeof r[0]&&o[r[0]]||(e&&!r[2]?r[2]=e:e&&(r[2]="("+r[2]+") and ("+e+")"),t.push(r))}},t}},46:function(t,n,e){function o(t){for(var n=0;n<t.length;n++){var e=t[n],o=u[e.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](e.parts[i]);for(;i<e.parts.length;i++)o.parts.push(s(e.parts[i]));o.parts.length>e.parts.length&&(o.parts.length=e.parts.length)}else{for(var r=[],i=0;i<e.parts.length;i++)r.push(s(e.parts[i]));u[e.id]={id:e.id,refs:1,parts:r}}}}function i(){var t=document.createElement("style");return t.type="text/css",d.appendChild(t),t}function s(t){var n,e,o=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(o){if(f)return _;o.parentNode.removeChild(o)}if(h){var s=p++;o=l||(l=i()),n=r.bind(null,o,s,!1),e=r.bind(null,o,s,!0)}else o=i(),n=a.bind(null,o),e=function(){o.parentNode.removeChild(o)};return n(t),function(o){if(o){if(o.css===t.css&&o.media===t.media&&o.sourceMap===t.sourceMap)return;n(t=o)}else e()}}function r(t,n,e,o){var i=e?"":o.css;if(t.styleSheet)t.styleSheet.cssText=y(n,i);else{var s=document.createTextNode(i),r=t.childNodes;r[n]&&t.removeChild(r[n]),r.length?t.insertBefore(s,r[n]):t.appendChild(s)}}function a(t,n){var e=n.css,o=n.media,i=n.sourceMap;if(o&&t.setAttribute("media",o),i&&(e+="\n/*# sourceURL="+i.sources[0]+" */",e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}var v="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!v)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=e(47),u={},d=v&&(document.head||document.getElementsByTagName("head")[0]),l=null,p=0,f=!1,_=function(){},h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,n,e){f=e;var i=c(t,n);return o(i),function(n){for(var e=[],s=0;s<i.length;s++){var r=i[s],a=u[r.id];a.refs--,e.push(a)}n?(i=c(t,n),o(i)):i=[];for(var s=0;s<e.length;s++){var a=e[s];if(0===a.refs){for(var v=0;v<a.parts.length;v++)a.parts[v]();delete u[a.id]}}}};var y=function(){var t=[];return function(n,e){return t[n]=e,t.filter(Boolean).join("\n")}}()},47:function(t,n){t.exports=function(t,n){for(var e=[],o={},i=0;i<n.length;i++){var s=n[i],r=s[0],a=s[1],v=s[2],c=s[3],u={id:t+":"+i,css:a,media:v,sourceMap:c};o[r]?o[r].parts.push(u):e.push(o[r]={id:r,parts:[u]})}return e}},56:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(42),i=e.n(o),s=e(69);n.default={components:{"ba-demo":i.a},data:function(){return{code:s.a}},methods:{openNotify1:function(){this.$notify({title:"通知",message:"这是一条通知通知，这是一条通知通知"})},openNotify2:function(){this.$notify({title:"仅标题的通知"})},openNotify3:function(){this.$notify({title:"通知",message:"这是一条不会自动关闭的通知通知",duration:0})},openNotify4:function(){this.$notify({title:"成功",message:"这是一条成功的通知",type:"success"})},openNotify5:function(){this.$notify({title:"警告",message:"这是一条警告的通知",type:"warning"})},openNotify6:function(){this.$notify({title:"失败",message:"这是一条失败的通知",type:"error"})},openNotify7:function(){this.$notify({title:"信息",message:"这是一条信息的通知",type:"info"})}}}},69:function(t,n,e){"use strict";var o={};o.default="\n<template>\n  <div>\n    <v-button @click=\"openNotify\">打开通知</v-button>\n    <v-button @click=\"openNotify2\">打开通知（仅标题）</v-button>\n    <v-button @click=\"openNotify3\">打开通知（不会关闭）</v-button>\n  </div>\n</template>\n\n<script>\n  export default {\n    methods: {\n      openNotify() {\n        this.$notify({\n          title: '通知',\n          message: '这是一条通知消息，这是一条通知消息',\n        });\n      },\n\n      openNotify2() {\n        this.$notify({\n          title: '仅标题的通知'\n        });\n      },\n\n      openNotify3() {\n        this.$notify({\n          title: '通知',\n          message: '这是一条不会自动关闭的通知消息',\n          duration: 0\n        });\n      }\n    }\n  }\n<\/script>\n",o.multi="\n<template>\n  <div>\n    <v-button\n      type=\"success\"\n      @click=\"openNotify4\">成功通知</v-button>\n    <v-button\n      type=\"warning\"\n      @click=\"openNotify5\">警告通知</v-button>\n    <v-button\n      type=\"danger\"\n      @click=\"openNotify6\">失败通知</v-button>\n    <v-button\n      type=\"info\"\n      @click=\"openNotify7\">信息通知</v-button>\n  </div>\n</template>\n<script>\n  export default {\n    methods: {\n      openNotify4() {\n        this.$notify({\n          title: '成功',\n          message: '这是一条成功的消息',\n          type: 'success'\n        });\n      },\n\n      openNotify5() {\n        this.$notify({\n          title: '警告',\n          message: '这是一条警告的消息',\n          type: 'warning'\n        });\n      },\n\n      openNotify6() {\n        this.$notify({\n          title: '失败',\n          message: '这是一条失败的消息',\n          type: 'error'\n        });\n      },\n\n      openNotify7() {\n        this.$notify({\n          title: '信息',\n          message: '这是一条信息的消息',\n          type: 'info'\n        });\n      }\n    }\n  }\n<\/script>\n",n.a=o},83:function(t,n,e){n=t.exports=e(45)(),n.push([t.i,".source .v-button+.v-button{margin-left:10px}",""])},97:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content"},[e("h2",[t._v("通知 Notification")]),t._v(" "),e("p",[t._v("通知弹框")]),t._v(" "),e("h3",[t._v("使用方法")]),t._v(" "),e("p",[t._v("基础用法")]),t._v(" "),e("ba-demo",[e("template",{slot:"source"},[e("div",[e("v-button",{on:{click:t.openNotify1}},[t._v("打开通知")]),t._v(" "),e("v-button",{on:{click:t.openNotify2}},[t._v("打开通知（仅标题）")]),t._v(" "),e("v-button",{on:{click:t.openNotify3}},[t._v("打开通知（不会关闭）")])],1)]),t._v(" "),e("template",{slot:"code"},[t._v(t._s(t.code.default))]),t._v(" "),e("template",{slot:"desc"},[e("p",[t._v("调用"),e("code",[t._v("this.$notify")]),t._v("即可显示消息框。"),e("code",[t._v("title")]),t._v("属性表示通知框标题，"),e("code",[t._v("message")]),t._v("属性表示通知内容，"),e("code",[t._v("duration")]),t._v("属性表示显示时长。")])])],2),t._v(" "),e("h3",[t._v("带描述性")]),t._v(" "),e("p",[t._v("不同类型的通知。")]),t._v(" "),e("ba-demo",[e("template",{slot:"source"},[e("div",[e("v-button",{attrs:{type:"success"},on:{click:t.openNotify4}},[t._v("成功通知")]),t._v(" "),e("v-button",{attrs:{type:"warning"},on:{click:t.openNotify5}},[t._v("警告通知")]),t._v(" "),e("v-button",{attrs:{type:"danger"},on:{click:t.openNotify6}},[t._v("失败通知")]),t._v(" "),e("v-button",{attrs:{type:"info"},on:{click:t.openNotify7}},[t._v("信息通知")])],1)]),t._v(" "),e("template",{slot:"code"},[t._v(t._s(t.code.multi))]),t._v(" "),e("template",{slot:"desc"},[e("p",[e("code",[t._v("type")]),t._v("属性表示通知类型，分别有"),e("code",[t._v("success")]),e("code",[t._v("warning")]),e("code",[t._v("error")]),e("code",[t._v("info")]),t._v(" 4 种类型。")])])],2),t._v(" "),e("h3",[t._v("Props")]),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"api"},[e("table",[e("thead",[e("tr",[e("th",[t._v("属性")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("title")]),t._v(" "),e("td",[t._v("通知标题")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("message")]),t._v(" "),e("td",[t._v("通知内容")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("type")]),t._v(" "),e("td",[t._v("通知类型")]),t._v(" "),e("td",[t._v("可选值为"),e("code",[t._v("success")]),t._v("、"),e("code",[t._v("warning")]),t._v("、"),e("code",[t._v("error")]),t._v("、"),e("code",[t._v("info")]),t._v("或者不设置")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("duration")]),t._v(" "),e("td",[t._v("设置通知是否自动关闭")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[t._v("3500")])])])])])}]}}});