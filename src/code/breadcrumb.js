let code = {};

code.default = `
<v-breadcrumb>
  <v-breadcrumb-item to="/">首页</v-breadcrumb-item>
  <v-breadcrumb-item :to="{ path: '/button' }">按钮</v-breadcrumb-item>
  <v-breadcrumb-item to="/table">表格</v-breadcrumb-item>
  <v-breadcrumb-item>面包屑</v-breadcrumb-item>
</v-breadcrumb>
`;

code.separator = `
<v-breadcrumb separator=">">
  <v-breadcrumb-item to="/">首页</v-breadcrumb-item>
  <v-breadcrumb-item :to="{ path: '/button' }">按钮</v-breadcrumb-item>
  <v-breadcrumb-item to="/table">表格</v-breadcrumb-item>
  <v-breadcrumb-item>面包屑</v-breadcrumb-item>
</v-breadcrumb>
`;

export default code;