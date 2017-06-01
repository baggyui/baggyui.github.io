<template>
  <div class="content">
    <h2>单选框 Radio</h2>
    <p>在一组备选项中进行单选。</p>

    <h3>使用方法</h3>
    <p>基础的单选框用法。</p>
    <ba-demo>
      <template slot="source">
        <div>
          <v-radio v-model="fruit" label="apple">苹果</v-radio>
          <v-radio v-model="fruit" label="banana">香蕉</v-radio>
          <v-radio v-model="fruit" label="pear">梨子</v-radio>
          <p style="margin-bottom:0;">{{ fruit }}</p>
        </div>
      </template>
      <template slot="code">{{ code.default }}</template>
      <template slot="desc">
        <p>通过设置<code>v-model</code>来设置一组备选项，其中值为<code>label</code>。</p>
      </template>
    </ba-demo>

    <h3>禁用状态</h3>
    <p>单选框不可用状态。</p>
    <ba-demo>
      <template slot="source">
        <div>
          <v-radio v-model="fruit2" label="apple" disabled>苹果</v-radio>
          <v-radio v-model="fruit2" label="banana" disabled>香蕉</v-radio>
        </div>
      </template>
      <template slot="code">{{ code.disabled }}</template>
      <template slot="desc">
        <p>可以使用<code>disabled</code>属性来定义按钮是否可用，它接受一个<code>Boolean</code>值。</p>
      </template>
    </ba-demo>

    <h3>单选框组</h3>
    <p>方便设置单个<code>v-model</code>。</p>
    <ba-demo>
      <template slot="source">
        <div>
          <v-radio-group v-model="city">
            <v-radio label="beijing">北京</v-radio>
            <v-radio label="shanghai">上海</v-radio>
            <v-radio label="guangzhou">广州</v-radio>
            <v-radio label="shenzhen">深圳</v-radio>
          </v-radio-group>
          <p style="margin-bottom:0;">{{ city }}</p>
        </div>
      </template>
      <template slot="code">{{ code.group }}</template>
      <template slot="desc">
        <p>可以通过一个<code>Group</code>来设置一组备选项，其中只需要为<code>Group</code>设置<code>v-model</code>即可。</p>
        <p style="margin-top:10px;">可以通过<code>v-for</code>来循环显示<code>v-radio</code>，但需给其绑定<code>key</code>。</p>
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
            <td>Radio 的值</td>
            <td>String | Number</td>
            <td>-</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>设置单选框为禁用状态</td>
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
  import code from '../code/radio';

  export default {
    components: {
      'ba-demo': Demo
    },

    data() {
      return {
        code,
        fruit: 'apple',
        fruit2: 'apple',
        city: 'beijing',
      };
    },
  };
</script>

<style lang="sass">
  .source .v-radio + .v-radio {
    margin-left: 10px;
  }
</style>