webpackJsonp([12],{36:function(t,e,o){var a=o(1)(o(60),o(98),null,null);t.exports=a.exports},41:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o(4),n=o.n(a);e.default={mounted:function(){var t=this.$refs.code.innerHTML.replace(/\n/,"");this.$refs.code.innerHTML=t,n.a.highlightBlock(this.$refs.code)}}},42:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o(43),n=o.n(a);e.default={components:{"ba-code":n.a},data:function(){return{ready:!1,height:0,showCode:!1}},computed:{codeHight:function(){var t={};return this.ready&&(this.showCode?t.height=this.height+"px":t.height="0"),t}},methods:{toggleShowCode:function(){this.showCode=!this.showCode}},mounted:function(){var t=this;this.$nextTick(function(){t.height=t.$refs.meta.clientHeight,t.ready=!0})}}},43:function(t,e,o){var a=o(1)(o(41),o(46),null,null);t.exports=a.exports},44:function(t,e,o){var a=o(1)(o(42),o(45),null,null);t.exports=a.exports},45:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"demo-block"},[o("div",{staticClass:"source"},[t._t("source")],2),t._v(" "),o("div",{ref:"meta",staticClass:"meta",style:t.codeHight},[o("ba-code",[t._t("code")],2),t._v(" "),o("div",{staticClass:"description"},[t._t("desc")],2)],1),t._v(" "),o("div",{staticClass:"control",on:{click:t.toggleShowCode}},[t._v(t._s(t.showCode?"隐藏代码":"显示代码"))])])},staticRenderFns:[]}},46:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"code"},[o("pre",[o("code",{ref:"code",staticClass:"html"},[t._t("default")],2)])])},staticRenderFns:[]}},60:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o(44),n=o.n(a),s=o(75);e.default={components:{"ba-demo":n.a},data:function(){return{code:s.a}},methods:{handlePageChange:function(t){}}}},75:function(t,e,o){"use strict";var a={};a.default='\n<template>\n  <v-page :total="100" @on-change="handlePageChange"></v-page>\n</template>\n\n<script>\n  export default {\n    methods: {\n      handlePageChange(current) {\n        console.log(\'当前页：\', current);\n      }\n    }\n  };\n<\/script>\n',a.size='\n<v-page :total="100" :page-size="20"></v-page>\n',a.total='\n<v-page :total="100" show-total></v-page>\n',e.a=a},98:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"content"},[o("h2",[t._v("分页 Page")]),t._v(" "),o("p",[t._v("分页可以切换显示更多的内容，且不占更多空间。")]),t._v(" "),o("h3",[t._v("使用方法")]),t._v(" "),o("p",[t._v("基础的分页用法。")]),t._v(" "),o("ba-demo",[o("template",{slot:"source"},[o("v-page",{attrs:{total:100},on:{"on-change":t.handlePageChange}})],1),t._v(" "),o("template",{slot:"code"},[t._v(t._s(t.code.default))]),t._v(" "),o("template",{slot:"desc"},[o("p",[t._v("传入"),o("code",[t._v("total")]),t._v("属性告诉"),o("code",[t._v("Page")]),t._v("总共有多少条数据，默认一页显示 10 条数据。")]),t._v(" "),o("p",{staticStyle:{"margin-top":"10px"}},[o("code",[t._v("Page")]),t._v("监听一个"),o("code",[t._v("on-change")]),t._v("事件，一旦切换页码会触发该事件。")])])],2),t._v(" "),o("h3",[t._v("每页显示条数")]),t._v(" "),o("p",[t._v("通过设置可以选择让每页显示多少条数据。")]),t._v(" "),o("ba-demo",[o("template",{slot:"source"},[o("v-page",{attrs:{total:100,"page-size":20}})],1),t._v(" "),o("template",{slot:"code"},[t._v(t._s(t.code.size))]),t._v(" "),o("template",{slot:"desc"},[o("p",[t._v("默认一页显示 10 条数据。可以通过"),o("code",[t._v("page-size")]),t._v("来告知"),o("code",[t._v("Page")]),t._v("一页该显示几条数据。")])])],2),t._v(" "),o("h3",[t._v("总条数")]),t._v(" "),o("p",[t._v("显示总条数。")]),t._v(" "),o("ba-demo",[o("template",{slot:"source"},[o("v-page",{attrs:{total:100,"show-total":""}})],1),t._v(" "),o("template",{slot:"code"},[t._v(t._s(t.code.total))]),t._v(" "),o("template",{slot:"desc"},[o("p",[o("code",[t._v("show-total")]),t._v("属性可以显示出数据总数。")])])],2),t._v(" "),o("h3",[t._v("Props")]),t._v(" "),t._m(0),t._v(" "),o("h3",[t._v("Events")]),t._v(" "),t._m(1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"api"},[o("table",[o("thead",[o("tr",[o("th",[t._v("属性")]),t._v(" "),o("th",[t._v("说明")]),t._v(" "),o("th",[t._v("类型")]),t._v(" "),o("th",[t._v("默认值")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("total")]),t._v(" "),o("td",[t._v("数据总数")]),t._v(" "),o("td",[t._v("Number")]),t._v(" "),o("td",[t._v("0")])]),t._v(" "),o("tr",[o("td",[t._v("page-size")]),t._v(" "),o("td",[t._v("每页条数")]),t._v(" "),o("td",[t._v("Number")]),t._v(" "),o("td",[t._v("10")])]),t._v(" "),o("tr",[o("td",[t._v("show-total")]),t._v(" "),o("td",[t._v("显示数据总数")]),t._v(" "),o("td",[t._v("Boolean")]),t._v(" "),o("td",[t._v("false")])])])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"api"},[o("table",[o("thead",[o("tr",[o("th",[t._v("事件名")]),t._v(" "),o("th",[t._v("说明")]),t._v(" "),o("th",[t._v("参数")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("on-change")]),t._v(" "),o("td",[t._v("当页码的值改变时触发")]),t._v(" "),o("td",[t._v("切换后的页码")])])])])])}]}}});