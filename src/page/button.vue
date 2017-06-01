<template>
  <div class="content">
    <h2>按钮 Button</h2>
    <p>常用的操作按钮。</p>

    <h3>使用方法</h3>
    <p>基础的按钮用法。</p>
    <ba-demo>
      <template slot="source">
        <v-button>默认按钮</v-button>
        <v-button type="primary">主要按钮</v-button>
        <v-button type="text">文字按钮</v-button>
      </template>
      <template slot="code">{{ code.default }}</template>
      <template slot="desc">
        <p>Button 组件提供<code>type</code>属性来设置主题，默认为<code>default</code>，可省略。</p>
      </template>
    </ba-demo>

    <h3>禁用状态</h3>
    <p>按钮不可用状态。</p>
    <ba-demo>
      <template slot="source">
        <v-button disabled>默认按钮</v-button>
        <v-button type="primary" disabled>主要按钮</v-button>
        <v-button type="text" disabled>文字按钮</v-button>
      </template>
      <template slot="code">{{ code.disabled }}</template>
      <template slot="desc">
        <p>可以使用<code>disabled</code>属性来定义按钮是否可用，它接受一个<code>Boolean</code>值。</p>
      </template>
    </ba-demo>

    <h3>倾向提示</h3>
    <p>不同的颜色倾向代表不同的提示。</p>
    <ba-demo>
      <template slot="source">
        <v-button type="success">成功按钮</v-button>
        <v-button type="warning">警告按钮</v-button>
        <v-button type="danger">危险按钮</v-button>
        <v-button type="info">信息按钮</v-button>
      </template>
      <template slot="code">{{ code.tip }}</template>
      <template slot="desc">
        <p>可以使用<code>type</code>属性来定义倾向提示。</p>
      </template>
    </ba-demo>

    <h3>加载中</h3>
    <p>点击按钮后进行数据加载操作，在按钮上显示加载状态。</p>
    <ba-demo>
      <template slot="source">
        <v-button
          type="primary"
          :loading="loading"
          @click="handleLoading">
          <span v-if="!loading">点击加载</span>
          <span v-else>加载中...</span>
        </v-button>
      </template>
      <template slot="code">{{ code.loading }}</template>
      <template slot="desc">
        <p>可以使用<code>loading</code>属性来定义按钮的加载状态，它接受一个<code>Boolean</code>值。</p>
      </template>
    </ba-demo>

    <h3>Props</h3>
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
            <td>type</td>
            <td>按钮类型，可选值为<code>primary</code>、<code>text</code>、<code>success</code>、<code>warning</code>、<code>danger</code>、<code>info</code>或者不设置</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>设置按钮为禁用状态</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>loading</td>
            <td>设置按钮为加载中状态</td>
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
  import code from '../code/button';

  export default {
    components: {
      'ba-demo': Demo
    },

    data() {
      return {
        code,
        loading: false
      };
    },

    methods: {
      handleLoading() {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      }
    }
  };
</script>

<style lang="sass">
  .source .v-button + .v-button {
    margin-left: 10px;
  }
</style>