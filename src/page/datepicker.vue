<template>
  <div class="content">
    <h2>日期选择器 Datepicker</h2>
    <p>用于选择或输入日期。</p>

    <h3>使用方法</h3>
    <p>基础的日期选择器用法。</p>
    <ba-demo>
      <template slot="source">
        <v-datepicker placeholder="选择日期" @on-change="handleChange"></v-datepicker>
      </template>
      <template slot="code">{{ code.default }}</template>
      <template slot="desc">
        <p><code>placeholder</code>可以用来设置输入框的输入提示。一旦选择日期发生改变会触发<code>on-change</code>事件。</p>
      </template>
    </ba-demo>

    <h3>带 Icon</h3>
    <p>输入框右侧带上日历 Icon。</p>
    <ba-demo>
      <template slot="source">
        <v-datepicker placeholder="选择日期" icon></v-datepicker>
      </template>
      <template slot="code">{{ code.icon }}</template>
      <template slot="desc">
        <p>设置了<code>icon</code>属性可以在输入框的右侧显示日历 Icon。</p>
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
            <td>placeholder</td>
            <td>占位内容</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>icon</td>
            <td>日历图标</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>Events</h3>
    <div class="api">
      <table>
        <thead>
          <tr>
            <th>事件名</th>
            <th>说明</th>
            <th>参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>on-change</td>
            <td>当 input 的值改变时触发，返回值和文本框一致</td>
            <td>格式化后的值</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import Demo from '../components/demo';
  import code from '../code/datepicker';

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
      handleChange(val) {
        console.log('选择了日期：', val);
      }
    }
  };
</script>
