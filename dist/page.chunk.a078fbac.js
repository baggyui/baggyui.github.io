webpackJsonp([12],{33:function(t,e,n){var o=n(1)(n(57),n(93),null,null);t.exports=o.exports},38:function(t,e,n){"use strict";var o={};o.default='\n<v-button>默认按钮</v-button>\n<v-button type="primary">主要按钮</v-button>\n<v-button type="text">文字按钮</v-button>\n',o.disabled='\n<v-button :disabled>默认按钮</v-button>\n<v-button type="primary" :disabled>主要按钮</v-button>\n<v-button type="text" :disabled>文字按钮</v-button>\n',o.tip='\n<v-button type="success">成功按钮</v-button>\n<v-button type="warning">警告按钮</v-button>\n<v-button type="danger">危险按钮</v-button>\n<v-button type="info">信息按钮</v-button>\n',o.loading='\n<template>\n  <v-button\n    type="primary"\n    :loading="loading"\n    @click="handleLoading">\n    <span v-if="!loading">点击加载</span>\n    <span v-else>加载中...</span>\n  </v-button>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        loading: false\n      };\n    },\n    methods: {\n      handleLoading() {\n        this.loading = true;\n        setTimeout(() => {\n          this.loading = false;\n        }, 1000);\n      }\n    }\n  };\n<\/script>\n',e.a=o},39:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(4),a=n.n(o);e.default={mounted:function(){var t=this.$refs.code.innerHTML.replace(/\n/,"");this.$refs.code.innerHTML=t,a.a.highlightBlock(this.$refs.code)}}},40:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(4),a=(n.n(o),n(38),n(41)),v=n.n(a);e.default={components:{"ba-code":v.a},data:function(){return{ready:!1,height:0,showCode:!1}},computed:{codeHight:function(){var t={};return this.ready&&(this.showCode?t.height=this.height+"px":t.height="0"),t}},methods:{toggleShowCode:function(){this.showCode=!this.showCode}},mounted:function(){var t=this;this.$nextTick(function(){t.height=t.$refs.meta.clientHeight,t.ready=!0})}}},41:function(t,e,n){var o=n(1)(n(39),n(44),null,null);t.exports=o.exports},42:function(t,e,n){var o=n(1)(n(40),n(43),null,null);t.exports=o.exports},43:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo-block"},[n("div",{staticClass:"source"},[t._t("source")],2),t._v(" "),n("div",{ref:"meta",staticClass:"meta",style:t.codeHight},[n("ba-code",[t._t("code")],2),t._v(" "),n("div",{staticClass:"description"},[t._t("desc")],2)],1),t._v(" "),n("div",{staticClass:"control",on:{click:t.toggleShowCode}},[t._v(t._s(t.showCode?"隐藏代码":"显示代码"))])])},staticRenderFns:[]}},44:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"code"},[n("pre",[n("code",{ref:"code",staticClass:"html"},[t._t("default")],2)])])},staticRenderFns:[]}},57:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(42),a=n.n(o),v=n(70);e.default={components:{"ba-demo":a.a},data:function(){return{code:v.a}},methods:{handlePageChange:function(t){}}}},70:function(t,e,n){"use strict";var o={};o.default='\n<template>\n  <v-page :total="100" @on-change="handlePageChange"></v-page>\n</template>\n\n<script>\n  export default {\n    methods: {\n      handlePageChange(current) {\n        console.log(\'当前页：\', current);\n      }\n    }\n  };\n<\/script>\n',o.size='\n<v-page :total="100" :page-size="20"></v-page>\n',o.total='\n<v-page :total="100" show-total></v-page>\n',e.a=o},93:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("h2",[t._v("分页 Page")]),t._v(" "),n("p",[t._v("分页可以切换显示更多的内容，且不占更多空间。")]),t._v(" "),n("h3",[t._v("使用方法")]),t._v(" "),n("p",[t._v("基础的分页用法。")]),t._v(" "),n("ba-demo",[n("template",{slot:"source"},[n("v-page",{attrs:{total:100},on:{"on-change":t.handlePageChange}})],1),t._v(" "),n("template",{slot:"code"},[t._v(t._s(t.code.default))]),t._v(" "),n("template",{slot:"desc"},[n("p",[t._v("传入"),n("code",[t._v("total")]),t._v("属性告诉"),n("code",[t._v("Page")]),t._v("总共有多少条数据，默认一页显示 10 条数据。")]),t._v(" "),n("p",{staticStyle:{"margin-top":"10px"}},[n("code",[t._v("Page")]),t._v("监听一个"),n("code",[t._v("on-change")]),t._v("事件，一旦切换页码会触发该事件。")])])],2),t._v(" "),n("h3",[t._v("每页显示条数")]),t._v(" "),n("p",[t._v("通过设置可以选择让每页显示多少条数据。")]),t._v(" "),n("ba-demo",[n("template",{slot:"source"},[n("v-page",{attrs:{total:100,"page-size":20}})],1),t._v(" "),n("template",{slot:"code"},[t._v(t._s(t.code.size))]),t._v(" "),n("template",{slot:"desc"},[n("p",[t._v("默认一页显示 10 条数据。可以通过"),n("code",[t._v("page-size")]),t._v("来告知"),n("code",[t._v("Page")]),t._v("一页该显示几条数据。")])])],2),t._v(" "),n("h3",[t._v("总条数")]),t._v(" "),n("p",[t._v("显示总条数。")]),t._v(" "),n("ba-demo",[n("template",{slot:"source"},[n("v-page",{attrs:{total:100,"show-total":""}})],1),t._v(" "),n("template",{slot:"code"},[t._v(t._s(t.code.total))]),t._v(" "),n("template",{slot:"desc"},[n("p",[n("code",[t._v("show-total")]),t._v("属性可以显示出数据总数。")])])],2),t._v(" "),n("h3",[t._v("Props")]),t._v(" "),t._m(0),t._v(" "),n("h3",[t._v("Events")]),t._v(" "),t._m(1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"api"},[n("table",[n("thead",[n("tr",[n("th",[t._v("属性")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("total")]),t._v(" "),n("td",[t._v("数据总数")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("0")])]),t._v(" "),n("tr",[n("td",[t._v("page-size")]),t._v(" "),n("td",[t._v("每页条数")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("10")])]),t._v(" "),n("tr",[n("td",[t._v("show-total")]),t._v(" "),n("td",[t._v("显示数据总数")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"api"},[n("table",[n("thead",[n("tr",[n("th",[t._v("事件名")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("参数")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("on-change")]),t._v(" "),n("td",[t._v("当页码的值改变时触发")]),t._v(" "),n("td",[t._v("切换后的页码")])])])])])}]}}});