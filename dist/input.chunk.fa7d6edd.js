webpackJsonp([4],{29:function(t,e,n){n(98);var o=n(1)(n(53),n(84),null,null);t.exports=o.exports},38:function(t,e,n){"use strict";var o={};o.default='\n<v-button>默认按钮</v-button>\n<v-button type="primary">主要按钮</v-button>\n<v-button type="text">文字按钮</v-button>\n',o.disabled='\n<v-button :disabled>默认按钮</v-button>\n<v-button type="primary" :disabled>主要按钮</v-button>\n<v-button type="text" :disabled>文字按钮</v-button>\n',o.tip='\n<v-button type="success">成功按钮</v-button>\n<v-button type="warning">警告按钮</v-button>\n<v-button type="danger">危险按钮</v-button>\n<v-button type="info">信息按钮</v-button>\n',o.loading='\n<template>\n  <v-button\n    type="primary"\n    :loading="loading"\n    @click="handleLoading">\n    <span v-if="!loading">点击加载</span>\n    <span v-else>加载中...</span>\n  </v-button>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        loading: false\n      };\n    },\n    methods: {\n      handleLoading() {\n        this.loading = true;\n        setTimeout(() => {\n          this.loading = false;\n        }, 1000);\n      }\n    }\n  };\n<\/script>\n',e.a=o},39:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(4),s=n.n(o);e.default={mounted:function(){var t=this.$refs.code.innerHTML.replace(/\n/,"");this.$refs.code.innerHTML=t,s.a.highlightBlock(this.$refs.code)}}},40:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(4),s=(n.n(o),n(38),n(41)),a=n.n(s);e.default={components:{"ba-code":a.a},data:function(){return{ready:!1,height:0,showCode:!1}},computed:{codeHight:function(){var t={};return this.ready&&(this.showCode?t.height=this.height+"px":t.height="0"),t}},methods:{toggleShowCode:function(){this.showCode=!this.showCode}},mounted:function(){var t=this;this.$nextTick(function(){t.height=t.$refs.meta.clientHeight,t.ready=!0})}}},41:function(t,e,n){var o=n(1)(n(39),n(44),null,null);t.exports=o.exports},42:function(t,e,n){var o=n(1)(n(40),n(43),null,null);t.exports=o.exports},43:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo-block"},[n("div",{staticClass:"source"},[t._t("source")],2),t._v(" "),n("div",{ref:"meta",staticClass:"meta",style:t.codeHight},[n("ba-code",[t._t("code")],2),t._v(" "),n("div",{staticClass:"description"},[t._t("desc")],2)],1),t._v(" "),n("div",{staticClass:"control",on:{click:t.toggleShowCode}},[t._v(t._s(t.showCode?"隐藏代码":"显示代码"))])])},staticRenderFns:[]}},44:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"code"},[n("pre",[n("code",{ref:"code",staticClass:"html"},[t._t("default")],2)])])},staticRenderFns:[]}},45:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},s=0;s<this.length;s++){var a=this[s][0];"number"==typeof a&&(o[a]=!0)}for(s=0;s<e.length;s++){var r=e[s];"number"==typeof r[0]&&o[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),t.push(r))}},t}},46:function(t,e,n){function o(t){for(var e=0;e<t.length;e++){var n=t[e],o=l[n.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](n.parts[s]);for(;s<n.parts.length;s++)o.parts.push(a(n.parts[s]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var r=[],s=0;s<n.parts.length;s++)r.push(a(n.parts[s]));l[n.id]={id:n.id,refs:1,parts:r}}}}function s(){var t=document.createElement("style");return t.type="text/css",p.appendChild(t),t}function a(t){var e,n,o=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(o){if(_)return h;o.parentNode.removeChild(o)}if(f){var a=u++;o=c||(c=s()),e=r.bind(null,o,a,!1),n=r.bind(null,o,a,!0)}else o=s(),e=v.bind(null,o),n=function(){o.parentNode.removeChild(o)};return e(t),function(o){if(o){if(o.css===t.css&&o.media===t.media&&o.sourceMap===t.sourceMap)return;e(t=o)}else n()}}function r(t,e,n,o){var s=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=m(e,s);else{var a=document.createTextNode(s),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(a,r[e]):t.appendChild(a)}}function v(t,e){var n=e.css,o=e.media,s=e.sourceMap;if(o&&t.setAttribute("media",o),s&&(n+="\n/*# sourceURL="+s.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var d="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!d)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i=n(47),l={},p=d&&(document.head||document.getElementsByTagName("head")[0]),c=null,u=0,_=!1,h=function(){},f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){_=n;var s=i(t,e);return o(s),function(e){for(var n=[],a=0;a<s.length;a++){var r=s[a],v=l[r.id];v.refs--,n.push(v)}e?(s=i(t,e),o(s)):s=[];for(var a=0;a<n.length;a++){var v=n[a];if(0===v.refs){for(var d=0;d<v.parts.length;d++)v.parts[d]();delete l[v.id]}}}};var m=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},47:function(t,e){t.exports=function(t,e){for(var n=[],o={},s=0;s<e.length;s++){var a=e[s],r=a[0],v=a[1],d=a[2],i=a[3],l={id:t+":"+s,css:v,media:d,sourceMap:i};o[r]?o[r].parts.push(l):n.push(o[r]={id:r,parts:[l]})}return n}},53:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(42),s=n.n(o),a=n(66);e.default={components:{"ba-demo":s.a},data:function(){return{code:a.a,input:"",disabledInput:"",errInput:"",password:"",textarea:"",iconInput:"",suggestInput:"",suggestions:["北京市","上海市","广州市","深圳市"],slotInput:""}},methods:{handleFocus:function(t){},handleBlur:function(t){},handleChange:function(){},handleIconClick:function(t){}}}},66:function(t,e,n){"use strict";var o={};o.default='\n<template>\n  <v-input v-model="input" placeholder="请输入内容"></v-input>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        input: \'\',\n      };\n    }\n  };\n<\/script>\n',o.pwd='\n<template>\n  <v-input\n    v-model="password"\n    type="password"\n    placeholder="请输入密码"></v-input>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        password: \'\'\n      };\n    }\n  };\n<\/script>\n',o.textarea='\n<template>\n  <v-input\n    v-model="textarea"\n    type="textarea"\n    placeholder="请输入内容"\n    rows="4"></v-input>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        textarea: \'\',\n      };\n    }\n  };\n<\/script>\n',o.disabled='\n<template>\n  <v-input\n    v-model="disabledInput"\n    placeholder="请输入内容"\n    disabled></v-input>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        disabledInput: \'\'\n      };\n    }\n  };\n<\/script>\n',o.error='\n<template>\n  <v-input\n    v-model="errInput"\n    placeholder="请输入内容"\n    invalid></v-input>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        errInput: \'\'\n      };\n    }\n  };\n<\/script>\n',o.icon='\n<template>\n  <v-input\n    v-model="iconInput"\n    icon="ios-search-strong"\n    placeholder="请输入内容"\n    @on-icon-click="handleIconClick"></v-input>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        iconInput: \'\'\n      };\n    },\n\n    methods: {\n      handleIconClick(val) {\n        console.log(\'Search: \', val);\n      }\n    }\n  };\n<\/script>\n',o.suggestions="\n<template>\n  <v-input\n    v-model=\"suggestInput\"\n    placeholder=\"请输入内容\"\n    :suggestions=\"suggestions\"></v-input>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        suggestInput: '',\n        suggestions: ['北京市', '上海市', '广州市', '深圳市'],\n      };\n    }\n  };\n<\/script>\n",o.factor='\n<template>\n  <v-input\n    v-model="slotInput"\n    placeholder="请输入内容"\n    style="width:400px;">\n    <span slot="prepend">https://</span>\n    <span slot="append">.com</span>\n  </v-input>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        slotInput: \'\',\n      };\n    }\n  };\n<\/script>\n',e.a=o},75:function(t,e,n){e=t.exports=n(45)(),e.push([t.i,".source .v-button+.v-button{margin-left:10px}",""])},84:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("h2",[t._v("输入框 input")]),t._v(" "),n("p",[t._v("常用的输入框。")]),t._v(" "),n("h3",[t._v("使用方法")]),t._v(" "),n("p",[t._v("基础的输入框用法。")]),t._v(" "),n("ba-demo",[n("template",{slot:"source"},[n("v-input",{attrs:{placeholder:"请输入内容"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})],1),t._v(" "),n("template",{slot:"code"},[t._v(t._s(t.code.default))]),t._v(" "),n("template",{slot:"desc"},[n("p",[t._v("Input 通过"),n("code",[t._v("v-model")]),t._v("来赋值和取值。")])])],2),t._v(" "),n("h3",[t._v("密码输入框")]),t._v(" "),n("p",[t._v("密码框输入。")]),t._v(" "),n("ba-demo",[n("template",{slot:"source"},[n("v-input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),n("template",{slot:"code"},[t._v(t._s(t.code.pwd))]),t._v(" "),n("template",{slot:"desc"},[n("p",[t._v("通过"),n("code",[t._v("type")]),t._v("属性来设置类型，设置为"),n("code",[t._v("password")]),t._v("显示密码框。")])])],2),t._v(" "),n("h3",[t._v("文本域")]),t._v(" "),n("p",[t._v("文本域输入。")]),t._v(" "),n("ba-demo",[n("template",{slot:"source"},[n("v-input",{attrs:{type:"textarea",placeholder:"请输入内容",rows:"4"},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}})],1),t._v(" "),n("template",{slot:"code"},[t._v(t._s(t.code.textarea))]),t._v(" "),n("template",{slot:"desc"},[n("p",[t._v("通过"),n("code",[t._v("type")]),t._v("属性来设置类型，设置为"),n("code",[t._v("textarea")]),t._v("显示密码框，通过"),n("code",[t._v("rows")]),t._v("属性来确定文本域的行数。")])])],2),t._v(" "),n("h3",[t._v("禁用状态")]),t._v(" "),n("p",[t._v("输入框不可用状态。")]),t._v(" "),n("ba-demo",[n("template",{slot:"source"},[n("v-input",{attrs:{placeholder:"请输入内容",disabled:""},model:{value:t.disabledInput,callback:function(e){t.disabledInput=e},expression:"disabledInput"}})],1),t._v(" "),n("template",{slot:"code"},[t._v(t._s(t.code.disabled))]),t._v(" "),n("template",{slot:"desc"},[n("p",[t._v("可以使用"),n("code",[t._v("disabled")]),t._v("属性来定义输入框是否可以输入，它接受一个"),n("code",[t._v("Boolean")]),t._v("值。")])])],2),t._v(" "),n("h3",[t._v("错误状态")]),t._v(" "),n("p",[t._v("输入框内容有误或者不符合规范。")]),t._v(" "),n("ba-demo",[n("template",{slot:"source"},[n("v-input",{attrs:{placeholder:"请输入内容",invalid:""},model:{value:t.errInput,callback:function(e){t.errInput=e},expression:"errInput"}})],1),t._v(" "),n("template",{slot:"code"},[t._v(t._s(t.code.error))]),t._v(" "),n("template",{slot:"desc"},[n("p",[t._v("可以使用"),n("code",[t._v("invalid")]),t._v("属性来定义输入框是否有误，它接受一个"),n("code",[t._v("Boolean")]),t._v("值。一般用于表单验证。")])])],2),t._v(" "),n("h3",[t._v("带 Icon")]),t._v(" "),n("p",[t._v("输入框带图标按钮。")]),t._v(" "),n("ba-demo",[n("template",{slot:"source"},[n("v-input",{attrs:{icon:"ios-search-strong",placeholder:"请输入内容"},on:{"on-icon-click":t.handleIconClick},model:{value:t.iconInput,callback:function(e){t.iconInput=e},expression:"iconInput"}})],1),t._v(" "),n("template",{slot:"code"},[t._v(t._s(t.code.icon))]),t._v(" "),n("template",{slot:"desc"},[n("p",[t._v("可以使用"),n("code",[t._v("icon")]),t._v("属性来定义输入框的图标，通过"),n("code",[t._v("on-icon-click")]),t._v("响应 icon 点击。")])])],2),t._v(" "),n("h3",[t._v("带输入建议")]),t._v(" "),n("p",[t._v("输入框带输入建议选项")]),t._v(" "),n("ba-demo",[n("template",{slot:"source"},[n("v-input",{attrs:{placeholder:"请输入内容",suggestions:t.suggestions},model:{value:t.suggestInput,callback:function(e){t.suggestInput=e},expression:"suggestInput"}})],1),t._v(" "),n("template",{slot:"code"},[t._v(t._s(t.code.suggestions))]),t._v(" "),n("template",{slot:"desc"},[n("p",[t._v("提供一组"),n("code",[t._v("suggestions")]),t._v("数组数据供用户选择。")])])],2),t._v(" "),n("h3",[t._v("前置或后置元素")]),t._v(" "),n("p",[t._v("可前置或后置元素。")]),t._v(" "),n("ba-demo",[n("template",{slot:"source"},[n("v-input",{staticStyle:{width:"400px"},attrs:{placeholder:"请输入内容"},model:{value:t.slotInput,callback:function(e){t.slotInput=e},expression:"slotInput"}},[n("span",{slot:"prepend"},[t._v("https://")]),t._v(" "),n("span",{slot:"append"},[t._v(".com")])])],1),t._v(" "),n("template",{slot:"code"},[t._v(t._s(t.code.factor))]),t._v(" "),n("template",{slot:"desc"},[n("p",[t._v("可以添加"),n("code",[t._v("slot")]),t._v("为"),n("code",[t._v("prepend")]),t._v("的前置元素，或为"),n("code",[t._v("append")]),t._v("的后置元素。")])])],2),t._v(" "),n("h3",[t._v("Props")]),t._v(" "),t._m(0),t._v(" "),n("h3",[t._v("Events")]),t._v(" "),t._m(1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"api"},[n("table",[n("thead",[n("tr",[n("th",[t._v("属性")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("type")]),t._v(" "),n("td",[t._v("输入框类型，可选值为"),n("code",[t._v("text")]),t._v("、"),n("code",[t._v("textarea")]),t._v("、"),n("code",[t._v("password")]),t._v("或者不设置")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("text")])]),t._v(" "),n("tr",[n("td",[t._v("placeholder")]),t._v(" "),n("td",[t._v("占位内容")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("icon")]),t._v(" "),n("td",[t._v("设置输入框的图标")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("disabled")]),t._v(" "),n("td",[t._v("设置输入框为禁用状态")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("invalid")]),t._v(" "),n("td",[t._v("设置输入框为错误状态")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("focus")]),t._v(" "),n("td",[t._v("设置输入框是否获取焦点")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("rows")]),t._v(" "),n("td",[t._v("设置文本域的行数，当为"),n("code",[t._v("textarea")]),t._v("时才有效")]),t._v(" "),n("td",[t._v("String, Number")]),t._v(" "),n("td",[t._v("2")])]),t._v(" "),n("tr",[n("td",[t._v("suggestions")]),t._v(" "),n("td",[t._v("设置输入框输入提示项")]),t._v(" "),n("td",[t._v("Array")]),t._v(" "),n("td",[t._v("[ ]")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"api"},[n("table",[n("thead",[n("tr",[n("th",[t._v("事件名")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("参数")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("focus")]),t._v(" "),n("td",[t._v("当 input 获取焦点时触发")]),t._v(" "),n("td",[t._v("输入框的值")])]),t._v(" "),n("tr",[n("td",[t._v("blur")]),t._v(" "),n("td",[t._v("当 input 获取失去焦点时触发")]),t._v(" "),n("td",[t._v("输入框的值")])]),t._v(" "),n("tr",[n("td",[t._v("input")]),t._v(" "),n("td",[t._v("当 input 有输入时触发")]),t._v(" "),n("td",[t._v("输入框的值")])]),t._v(" "),n("tr",[n("td",[t._v("on-icon-click")]),t._v(" "),n("td",[t._v("输入框图标被点击时触发")]),t._v(" "),n("td",[t._v("输入框的值")])])])])])}]}},98:function(t,e,n){var o=n(75);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(46)("97c790f0",o,!0)}});