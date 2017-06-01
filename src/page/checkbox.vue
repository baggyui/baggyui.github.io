<template>
  <div class="content">
    <h2>多选框 CheckBox</h2>
    <p>一组备选项中进行多选。</p>

    <h3>使用方法</h3>
    <p>基础的多选框用法。</p>
    <ba-demo>
      <template slot="source">
        <div>
          <v-checkbox v-model="fruit" label="orange">橘子</v-checkbox>
          <v-checkbox v-model="fruit" label="pear">梨</v-checkbox>
          <v-checkbox v-model="fruit" label="banana">香蕉</v-checkbox>
          <p style="margin-bottom:0;">{{ fruit }}</p>
        </div>
      </template>
      <template slot="code">{{ code.default }}</template>
      <template slot="desc">
        <p>CheckBox 组件通过<code>v-model</code>来绑定组件最终的值, 通过<code>label</code>属性给单个选择框赋值。</p>
      </template>
    </ba-demo>

    <h3>禁用状态</h3>
    <p>选择框不可用状态。</p>
    <ba-demo>
      <template slot="source">
        <div>
          <v-checkbox v-model="fruit2" label="apple" disabled>苹果</v-checkbox>
          <v-checkbox v-model="fruit2" label="banana" disabled>香蕉</v-checkbox>
        </div>
      </template>
      <template slot="code">{{ code.disabled }}</template>
      <template slot="desc">
        <p>可以使用<code>disabled</code>属性来定义多选框是否可用，它接受一个<code>Boolean</code>值。</p>
      </template>
    </ba-demo>

    <h3>多选框组</h3>
    <p>提供多个选择项选择</p>
    <ba-demo>
      <template slot="source">
        <div>
          <v-checkbox-group v-model="fruit3">
            <v-checkbox label="apple">苹果</v-checkbox>
            <v-checkbox label="banana">香蕉</v-checkbox>
            <v-checkbox label="pear">梨子</v-checkbox>
          </v-checkbox-group>
          <p style="margin-bottom:0;">{{ fruit3 }}</p>
        </div>
      </template>
      <template slot="code">{{ code.group }}</template>
      <template slot="desc">
        <p>使用<code>v-checkbox-group</code>将多选框包括起来，统一使用<code>v-model</code>。</p>
        <p style="margin-top:10px;">可以通过<code>v-for</code>来循环显示<code>v-checkbox</code>，但需给其绑定<code>key</code>。</p>
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
            <td>label</td>
            <td>单个选框的值</td>
            <td>String | Number</td>
            <td>-</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>设置多选框为禁用状态</td>
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
            <td>点击 Checkbox 时触发</td>
            <td>选中的值</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import Demo from '../components/demo';
  import code from '../code/checkBox';

  export default {
    components: {
      'ba-demo': Demo
    },

    data() {
      return {
        code,
        checked: false,
        fruit: ['orange'],
        fruit2: ['banana'],
        fruit3: ['apple']
      };
    },
  };
</script>

<style lang="sass">
  .source .v-checkbox + .v-checkbox {
    margin-left: 10px;
  }
</style>