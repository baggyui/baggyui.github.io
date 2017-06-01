<template>
  <div class="content">
    <h2>下拉选择框 Select</h2>
    <p>下拉项进行选择</p>

    <h3>使用方法</h3>
    <p>基础用法</p>
    <ba-demo>
      <template slot="source">
        <div>
          <v-select v-model="city">
            <v-option label="北京市" value="Beijing"></v-option>
            <v-option label="上海市" value="Shanghai"></v-option>
            <v-option label="广州市" value="Guangzhou"></v-option>
            <v-option label="深圳市" value="Shenzhen"></v-option>
          </v-select>
          <p style="margin-bottom:0;">{{ city }}</p>
        </div>
      </template>
      <template slot="code">{{ code.default }}</template>
      <template slot="desc">
        <p><code>v-model</code>表示选择框选中的值。可以通过<code>v-for</code>来循环显示<code>v-option</code>，但需给其绑定<code>key</code>。</p>
      </template>
    </ba-demo>

    <h3>禁用状态</h3>
    <p>选择框不可用状态。</p>
    <ba-demo>
      <template slot="source">
        <v-select v-model="city" disabled>
          <v-option label="北京市" value="Beijing"></v-option>
          <v-option label="上海市" value="Shanghai"></v-option>
          <v-option label="广州市" value="Guangzhou"></v-option>
          <v-option label="深圳市" value="Shenzhen"></v-option>
        </v-select>
      </template>
      <template slot="code">{{ code.disabled }}</template>
      <template slot="desc">
        <p>可以使用<code>disabled</code>属性来定义选择框是否可用，它接受一个<code>Boolean</code>值。</p>
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
            <td>请选择</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>设置选择框为禁用状态</td>
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
  import code from '../code/select';

  export default {
    components: {
      'ba-demo': Demo
    },

    data() {
      return {
        code,
        city: 'Beijing'
      };
    },
  };
</script>