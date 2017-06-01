<template>
  <div class="content">
    <h2>树形控件 Tree</h2>
    <p>使用树形控件可以清晰地展示目录结构，组织结构等层级关系。</p>

    <h3>使用方法</h3>
    <p>基础的树形控件用法。</p>
    <ba-demo>
      <template slot="source">
        <v-tree :data="data" @on-toggle="handleToggle"></v-tree>
      </template>
      <template slot="code">{{ code.default }}</template>
      <template slot="desc">
        <p>通过特殊的对象<code>data</code>来给<code>Tree</code>赋值，其中分别有<code>label</code>和<code>children</code>属性，具体用法参考代码。</p>
        <p style="margin-top:10px;"><code>Tree</code>监听一个<code>on-toggle</code>事件，一旦一整行树节点被点击就会触发，返回这一行的<code>data</code>数据。</p>
      </template>
    </ba-demo>

    <h3>箭头触发折叠</h3>
    <p>可以只允许箭头点击才能触发折叠。</p>
    <ba-demo>
      <template slot="source">
        <v-tree
          :data="data"
          :expand-on-click-node="false"
          @on-toggle="handleToggle2"
          @on-arrow-toggle="handleArrowToggle"></v-tree>
      </template>
      <template slot="code">{{ code.arrow }}</template>
      <template slot="desc">
        <p>通过将<code>expand-on-click-node</code>设置成<code>false</code>可以只允许箭头点击才能触发折叠。</p>
        <p style="margin-top:10px;"><code>on-toggle</code>事件跟之前一样，只不过箭头的点击不会触发，而是触发<code>on-arrow-toggle</code>事件。</p>
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
            <td>data</td>
            <td>嵌套的节点属性的数组，生成 tree 的数据</td>
            <td>Array</td>
            <td>[ ]</td>
          </tr>
          <tr>
            <td>expand-on-click-node</td>
            <td>整行节点是否可以点击触发折叠</td>
            <td>Boolean</td>
            <td>true</td>
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
            <td>on-toggle</td>
            <td>点击树节点时触发</td>
            <td>当前选中的节点</td>
          </tr>
          <tr>
            <td>on-arrow-toggle</td>
            <td>点击树节点箭头时触发，只在设置了<code>expand-on-click-node</code>为<code>false</code>时触发</td>
            <td>当前选中的节点</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import Demo from '../components/demo';
  import code from '../code/tree';

  export default {
    components: {
      'ba-demo': Demo
    },

    data() {
      return {
        code,
        data: [{
          label: '海贼',
          children: [{
            label: '草帽海贼团',
            children: [{
              label: '路飞'
            }, {
              label: '娜美'
            }]
          }]
        }, {
          label: '海军',
          children: [{
            label: '卡普'
          }]
        }]
      };
    },

    methods: {
      handleToggle(data) {
        console.log('节点被点击了: ', data);
      },

      handleToggle2(data) {
        console.log('节点被点击了: ', data);
      },

      handleArrowToggle(data) {
        console.log('节点箭头被点击了: ', data);
      }
    }
  };
</script>