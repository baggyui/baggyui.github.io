<template>
  <div class="content">
    <h2>图标 Icon</h2>
    <p>图标使用的是开源的 <v-button type="text" @click="handleIonicons">ionicons</v-button> 。</p>

    <h3>使用方法</h3>
    <p>基础的图标用法。</p>
    <ba-demo>
      <template slot="source">
        <span style="font-size:35px;color:#8492a6;">
          <v-icon type="checkmark-circled"></v-icon>
          <v-icon type="android-alert"></v-icon>
          <v-icon type="information-circled"></v-icon>
          <v-icon type="close-circled"></v-icon>
        </span>
      </template>
      <template slot="code">{{ code.default }}</template>
      <template slot="desc">
        <p>通过设置<code>type</code>属性来定义显示想要的图标。同时可以给图标设置字体和颜色。</p>
      </template>
    </ba-demo>

    <h3>单独设置</h3>
    <p>也可以单独设置图标的字体和颜色。</p>
    <ba-demo>
      <template slot="source">
        <span style="font-size:35px;">
          <v-icon
            type="checkmark-circled"
            size="35"
            color="#13ce66"></v-icon>
          <v-icon
            type="android-alert"
            size="35"
            color="#f7ba2a"></v-icon>
          <v-icon
            type="close-circled"
            size="35"
            color="#ff4949"></v-icon>
          <v-icon
            type="information-circled"
            size="35"
            color="#50bfff"></v-icon>
        </span>
      </template>
      <template slot="code">{{ code.setting }}</template>
      <template slot="desc">
        <p>通过<code>size</code>属性可以定义图标的字体大小，通过<code>color</code>属性可以定义图标的颜色。</p>
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
            <td>图标类型</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>size</td>
            <td>设置图标字体大小</td>
            <td>Number</td>
            <td>0</td>
          </tr>
          <tr>
            <td>color</td>
            <td>设置图标的颜色</td>
            <td>String</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import Demo from '../components/demo';
  import code from '../code/icon';

  export default {
    components: {
      'ba-demo': Demo
    },

    data() {
      return {
        code
      };
    },

    methods: {
      handleIonicons() {
        window.open('http://ionicons.com/');
      }
    }
  };
</script>

<style lang="sass">
  .source .v-icon + .v-icon {
    margin-left: 10px;
  }
</style>