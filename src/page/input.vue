<template>
  <div class="content">
    <h2>输入框 input</h2>
    <p>常用的输入框。</p>

    <h3>使用方法</h3>
    <p>基础的输入框用法。</p>
    <ba-demo>
      <template slot="source">
        <v-input v-model="input" placeholder="请输入内容"></v-input>
      </template>
      <template slot="code">{{ code.default }}</template>
      <template slot="desc">
        <p>Input 通过<code>v-model</code>来赋值和取值。</p>
      </template>
    </ba-demo>

    <h3>密码输入框</h3>
    <p>密码框输入。</p>
    <ba-demo>
      <template slot="source">
        <v-input
          v-model="password"
          type="password"
          placeholder="请输入密码"></v-input>
      </template>
      <template slot="code">{{ code.pwd }}</template>
      <template slot="desc">
        <p>通过<code>type</code>属性来设置类型，设置为<code>password</code>显示密码框。</p>
      </template>
    </ba-demo>

    <h3>文本域</h3>
    <p>文本域输入。</p>
    <ba-demo>
      <template slot="source">
        <v-input
          v-model="textarea"
          type="textarea"
          placeholder="请输入内容"
          rows="4"></v-input>
      </template>
      <template slot="code">{{ code.textarea }}</template>
      <template slot="desc">
        <p>通过<code>type</code>属性来设置类型，设置为<code>textarea</code>显示密码框，通过<code>rows</code>属性来确定文本域的行数。</p>
      </template>
    </ba-demo>

    <h3>禁用状态</h3>
    <p>输入框不可用状态。</p>
    <ba-demo>
      <template slot="source">
        <v-input
          v-model="disabledInput"
          placeholder="请输入内容"
          disabled></v-input>
      </template>
      <template slot="code">{{ code.disabled }}</template>
      <template slot="desc">
        <p>可以使用<code>disabled</code>属性来定义输入框是否可以输入，它接受一个<code>Boolean</code>值。</p>
      </template>
    </ba-demo>

    <h3>错误状态</h3>
    <p>输入框内容有误或者不符合规范。</p>
    <ba-demo>
      <template slot="source">
        <v-input
          v-model="errInput"
          placeholder="请输入内容"
          invalid></v-input>
      </template>
      <template slot="code">{{ code.error }}</template>
      <template slot="desc">
        <p>可以使用<code>invalid</code>属性来定义输入框是否有误，它接受一个<code>Boolean</code>值。一般用于表单验证。</p>
      </template>
    </ba-demo>

    <h3>带 Icon</h3>
    <p>输入框带图标按钮。</p>
    <ba-demo>
      <template slot="source">
        <v-input
          v-model="iconInput"
          icon="ios-search-strong"
          placeholder="请输入内容"
          @on-icon-click="handleIconClick"></v-input>
      </template>
      <template slot="code">{{ code.icon }}</template>
      <template slot="desc">
        <p>可以使用<code>icon</code>属性来定义输入框的图标，通过<code>on-icon-click</code>响应 icon 点击。</p>
      </template>
    </ba-demo>

    <h3>带输入建议</h3>
    <p>输入框带输入建议选项</p>
    <ba-demo>
      <template slot="source">
        <v-input
          v-model="suggestInput"
          placeholder="请输入内容"
          :suggestions="suggestions"></v-input>
      </template>
      <template slot="code">{{ code.suggestions }}</template>
      <template slot="desc">
        <p>提供一组<code>suggestions</code>数组数据供用户选择。</p>
      </template>
    </ba-demo>

    <h3>前置或后置元素</h3>
    <p>可前置或后置元素。</p>
    <ba-demo>
      <template slot="source">
        <v-input
          v-model="slotInput"
          placeholder="请输入内容"
          style="width:400px;">
          <span slot="prepend">https://</span>
          <span slot="append">.com</span>
        </v-input>
      </template>
      <template slot="code">{{ code.factor }}</template>
      <template slot="desc">
        <p>可以添加<code>slot</code>为<code>prepend</code>的前置元素，或为<code>append</code>的后置元素。</p>
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
            <td>输入框类型，可选值为<code>text</code>、<code>textarea</code>、<code>password</code>或者不设置</td>
            <td>String</td>
            <td>text</td>
          </tr>
          <tr>
            <td>placeholder</td>
            <td>占位内容</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>icon</td>
            <td>设置输入框的图标</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>设置输入框为禁用状态</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>invalid</td>
            <td>设置输入框为错误状态</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>focus</td>
            <td>设置输入框是否获取焦点</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>rows</td>
            <td>设置文本域的行数，当为<code>textarea</code>时才有效</td>
            <td>String, Number</td>
            <td>2</td>
          </tr>
          <tr>
            <td>suggestions</td>
            <td>设置输入框输入提示项</td>
            <td>Array</td>
            <td>[ ]</td>
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
            <td>focus</td>
            <td>当 input 获取焦点时触发</td>
            <td>输入框的值</td>
          </tr>
          <tr>
            <td>blur</td>
            <td>当 input 获取失去焦点时触发</td>
            <td>输入框的值</td>
          </tr>
          <tr>
            <td>input</td>
            <td>当 input 有输入时触发</td>
            <td>输入框的值</td>
          </tr>
          <tr>
            <td>on-icon-click</td>
            <td>输入框图标被点击时触发</td>
            <td>输入框的值</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import Demo from '../components/demo';
  import code from '../code/input';

  export default {
    components: {
      'ba-demo': Demo
    },

    data() {
      return {
        code,
        input: '',
        disabledInput: '',
        errInput: '',
        password: '',
        textarea: '',
        iconInput: '',
        suggestInput: '',
        suggestions: ['北京市', '上海市', '广州市', '深圳市'],
        slotInput: ''
      };
    },

    methods: {
      handleFocus(val) {
        console.log('focus,', val);
      },

      handleBlur(val) {
        console.log('blur,', val);
      },

      handleChange() {
        console.log(this.password);
      },

      handleIconClick(val) {
        console.log('Search: ', val);
      }
    }
  };
</script>

<style lang="sass">
  .source .v-button+.v-button {
    margin-left: 10px;
  }
</style>