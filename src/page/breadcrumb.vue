<template>
  <div class="content">
    <h2>面包屑 Breadcrumb</h2>
    <p>方便找到当前位置，并能够快速返回上一级页面。</p>

    <h3>使用方法</h3>
    <p>基础的面包屑用法。</p>
    <ba-demo>
      <template slot="source">
        <v-breadcrumb>
          <v-breadcrumb-item to="/">首页</v-breadcrumb-item>
          <v-breadcrumb-item :to="{ path: '/button' }">按钮</v-breadcrumb-item>
          <v-breadcrumb-item to="/table">表格</v-breadcrumb-item>
          <v-breadcrumb-item>面包屑</v-breadcrumb-item>
        </v-breadcrumb>
      </template>
      <template slot="code">{{ code.default }}</template>
      <template slot="desc">
        <p>Breadcrumb 使用<code>v-breadcrumb-item</code>来表示每一项。如果该项有链接，则使用<code>to</code>来表示。</p>
        <p style="margin-top:10px"><code>to</code>的写法与<code>vue-router</code>的写法一致，如果没使用<code>vue-router</code>则会用<code>href</code>跳转。</p>
      </template>
    </ba-demo>

    <h3>自定义分隔符</h3>
    <p>可以传入自定义的字符串当做分隔符。</p>
    <ba-demo>
      <template slot="source">
        <v-breadcrumb separator=">">
          <v-breadcrumb-item to="/">首页</v-breadcrumb-item>
          <v-breadcrumb-item :to="{ path: '/button' }">按钮</v-breadcrumb-item>
          <v-breadcrumb-item to="/table">表格</v-breadcrumb-item>
          <v-breadcrumb-item>面包屑</v-breadcrumb-item>
        </v-breadcrumb>
      </template>
      <template slot="code">{{ code.separator }}</template>
      <template slot="desc">
        <p>Breadcrumb 默认使用<code>/</code>来分割，设置<code>separator</code>属性可自定义分隔符。</p>
      </template>
    </ba-demo>

    <h3>Breadcrumb Props</h3>
    <div class="api">
      <table>
        <thead>
          <tr>
            <th>属性</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>separator</td>
            <td>分隔符</td>
            <td>String</td>
            <td>/</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>Breadcrumb Item Props</h3>
    <div class="api">
      <table>
        <thead>
          <tr>
            <th>属性</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>to</td>
            <td>链接</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>replace</td>
            <td>使用<code>vue-router</code>时生效，路由跳转时不会向<code>history</code>添加记录</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import Demo from '../components/demo';
  import code from '../code/breadcrumb';

  export default {
    components: {
      'ba-demo': Demo
    },

    data() {
      return {
        code
      };
    }
  };
</script>