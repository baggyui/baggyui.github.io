webpackJsonp([0],{110:function(e,t,n){var r=n(86);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(48)("3e7d94a3",r,!0)},37:function(e,t,n){n(110);var r=n(1)(n(61),n(99),null,null);e.exports=r.exports},41:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),a=n.n(r);t.default={mounted:function(){var e=this.$refs.code.innerHTML.replace(/\n/,"");this.$refs.code.innerHTML=e,a.a.highlightBlock(this.$refs.code)}}},42:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(43),a=n.n(r);t.default={components:{"ba-code":a.a},data:function(){return{ready:!1,height:0,showCode:!1}},computed:{codeHight:function(){var e={};return this.ready&&(this.showCode?e.height=this.height+"px":e.height="0"),e}},methods:{toggleShowCode:function(){this.showCode=!this.showCode}},mounted:function(){var e=this;this.$nextTick(function(){e.height=e.$refs.meta.clientHeight,e.ready=!0})}}},43:function(e,t,n){var r=n(1)(n(41),n(46),null,null);e.exports=r.exports},44:function(e,t,n){var r=n(1)(n(42),n(45),null,null);e.exports=r.exports},45:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo-block"},[n("div",{staticClass:"source"},[e._t("source")],2),e._v(" "),n("div",{ref:"meta",staticClass:"meta",style:e.codeHight},[n("ba-code",[e._t("code")],2),e._v(" "),n("div",{staticClass:"description"},[e._t("desc")],2)],1),e._v(" "),n("div",{staticClass:"control",on:{click:e.toggleShowCode}},[e._v(e._s(e.showCode?"隐藏代码":"显示代码"))])])},staticRenderFns:[]}},46:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"code"},[n("pre",[n("code",{ref:"code",staticClass:"html"},[e._t("default")],2)])])},staticRenderFns:[]}},47:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},a=0;a<this.length;a++){var o=this[a][0];"number"==typeof o&&(r[o]=!0)}for(a=0;a<t.length;a++){var i=t[a];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},48:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=v[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(o(n.parts[a]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var i=[],a=0;a<n.parts.length;a++)i.push(o(n.parts[a]));v[n.id]={id:n.id,refs:1,parts:i}}}}function a(){var e=document.createElement("style");return e.type="text/css",c.appendChild(e),e}function o(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(f)return _;r.parentNode.removeChild(r)}if(h){var o=p++;r=u||(u=a()),t=i.bind(null,r,o,!1),n=i.bind(null,r,o,!0)}else r=a(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function i(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=m(t,a);else{var o=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function s(e,t){var n=t.css,r=t.media,a=t.sourceMap;if(r&&e.setAttribute("media",r),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d=n(49),v={},c=l&&(document.head||document.getElementsByTagName("head")[0]),u=null,p=0,f=!1,_=function(){},h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){f=n;var a=d(e,t);return r(a),function(t){for(var n=[],o=0;o<a.length;o++){var i=a[o],s=v[i.id];s.refs--,n.push(s)}t?(a=d(e,t),r(a)):a=[];for(var o=0;o<n.length;o++){var s=n[o];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete v[s.id]}}}};var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},49:function(e,t){e.exports=function(e,t){for(var n=[],r={},a=0;a<t.length;a++){var o=t[a],i=o[0],s=o[1],l=o[2],d=o[3],v={id:e+":"+a,css:s,media:l,sourceMap:d};r[i]?r[i].parts.push(v):n.push(r[i]={id:i,parts:[v]})}return n}},61:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(44),a=n.n(r),o=n(76);t.default={components:{"ba-demo":a.a},data:function(){return{code:o.a,fruit:"apple",fruit2:"apple",city:"beijing"}}}},76:function(e,t,n){"use strict";var r={};r.default='\n<template>\n  <div>\n    <v-radio v-model="fruit" label="apple">苹果</v-radio>\n    <v-radio v-model="fruit" label="banana">香蕉</v-radio>\n    <v-radio v-model="fruit" label="pear">梨子</v-radio>\n    <p>{{ fruit }}</p>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        fruit: \'apple\'\n      };\n    }\n  };\n<\/script>\n',r.disabled='\n<template>\n  <div>\n    <v-radio v-model="fruit" label="apple" disabled>苹果</v-radio>\n    <v-radio v-model="fruit" label="banana" disabled>香蕉</v-radio>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        fruit: \'apple\'\n      };\n    }\n  };\n<\/script>\n',r.group='\n<template>\n  <div>\n    <v-radio-group v-model="city">\n      <v-radio label="beijing">北京</v-radio>\n      <v-radio label="shanghai">上海</v-radio>\n      <v-radio label="guangzhou">广州</v-radio>\n      <v-radio label="shenzhen">深圳</v-radio>\n    </v-radio-group>\n    <p>{{ city }}</p>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        city: \'beijing\'\n      };\n    }\n  };\n<\/script>\n',t.a=r},86:function(e,t,n){t=e.exports=n(47)(),t.push([e.i,".source .v-radio+.v-radio{margin-left:10px}",""])},99:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("h2",[e._v("单选框 Radio")]),e._v(" "),n("p",[e._v("在一组备选项中进行单选。")]),e._v(" "),n("h3",[e._v("使用方法")]),e._v(" "),n("p",[e._v("基础的单选框用法。")]),e._v(" "),n("ba-demo",[n("template",{slot:"source"},[n("div",[n("v-radio",{attrs:{label:"apple"},model:{value:e.fruit,callback:function(t){e.fruit=t},expression:"fruit"}},[e._v("苹果")]),e._v(" "),n("v-radio",{attrs:{label:"banana"},model:{value:e.fruit,callback:function(t){e.fruit=t},expression:"fruit"}},[e._v("香蕉")]),e._v(" "),n("v-radio",{attrs:{label:"pear"},model:{value:e.fruit,callback:function(t){e.fruit=t},expression:"fruit"}},[e._v("梨子")]),e._v(" "),n("p",{staticStyle:{"margin-bottom":"0"}},[e._v(e._s(e.fruit))])],1)]),e._v(" "),n("template",{slot:"code"},[e._v(e._s(e.code.default))]),e._v(" "),n("template",{slot:"desc"},[n("p",[e._v("通过设置"),n("code",[e._v("v-model")]),e._v("来设置一组备选项，其中值为"),n("code",[e._v("label")]),e._v("。")])])],2),e._v(" "),n("h3",[e._v("禁用状态")]),e._v(" "),n("p",[e._v("单选框不可用状态。")]),e._v(" "),n("ba-demo",[n("template",{slot:"source"},[n("div",[n("v-radio",{attrs:{label:"apple",disabled:""},model:{value:e.fruit2,callback:function(t){e.fruit2=t},expression:"fruit2"}},[e._v("苹果")]),e._v(" "),n("v-radio",{attrs:{label:"banana",disabled:""},model:{value:e.fruit2,callback:function(t){e.fruit2=t},expression:"fruit2"}},[e._v("香蕉")])],1)]),e._v(" "),n("template",{slot:"code"},[e._v(e._s(e.code.disabled))]),e._v(" "),n("template",{slot:"desc"},[n("p",[e._v("可以使用"),n("code",[e._v("disabled")]),e._v("属性来定义按钮是否可用，它接受一个"),n("code",[e._v("Boolean")]),e._v("值。")])])],2),e._v(" "),n("h3",[e._v("单选框组")]),e._v(" "),e._m(0),e._v(" "),n("ba-demo",[n("template",{slot:"source"},[n("div",[n("v-radio-group",{model:{value:e.city,callback:function(t){e.city=t},expression:"city"}},[n("v-radio",{attrs:{label:"beijing"}},[e._v("北京")]),e._v(" "),n("v-radio",{attrs:{label:"shanghai"}},[e._v("上海")]),e._v(" "),n("v-radio",{attrs:{label:"guangzhou"}},[e._v("广州")]),e._v(" "),n("v-radio",{attrs:{label:"shenzhen"}},[e._v("深圳")])],1),e._v(" "),n("p",{staticStyle:{"margin-bottom":"0"}},[e._v(e._s(e.city))])],1)]),e._v(" "),n("template",{slot:"code"},[e._v(e._s(e.code.group))]),e._v(" "),n("template",{slot:"desc"},[n("p",[e._v("可以通过一个"),n("code",[e._v("Group")]),e._v("来设置一组备选项，其中只需要为"),n("code",[e._v("Group")]),e._v("设置"),n("code",[e._v("v-model")]),e._v("即可。")]),e._v(" "),n("p",{staticStyle:{"margin-top":"10px"}},[e._v("可以通过"),n("code",[e._v("v-for")]),e._v("来循环显示"),n("code",[e._v("v-radio")]),e._v("，但需给其绑定"),n("code",[e._v("key")]),e._v("。")])])],2),e._v(" "),n("h3",[e._v("Props")]),e._v(" "),e._m(1)],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("方便设置单个"),n("code",[e._v("v-model")]),e._v("。")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"api"},[n("table",[n("thead",[n("tr",[n("th",[e._v("属性")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("类型")]),e._v(" "),n("th",[e._v("默认值")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("label")]),e._v(" "),n("td",[e._v("Radio 的值")]),e._v(" "),n("td",[e._v("String | Number")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("disabled")]),e._v(" "),n("td",[e._v("设置单选框为禁用状态")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("false")])])])])])}]}}});