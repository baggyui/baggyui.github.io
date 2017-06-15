<template>
  <div class="content">
    <h2>分页 Page</h2>
    <p>分页可以切换显示更多的内容，且不占更多空间。</p>

    <h3>使用方法</h3>
    <p>基础的分页用法。</p>
    <ba-demo>
      <template slot="source">
        <v-page :total="100" @on-change="handlePageChange"></v-page>
      </template>
      <template slot="code">{{ code.default }}</template>
      <template slot="desc">
        <p>传入<code>total</code>属性告诉<code>Page</code>总共有多少条数据，默认一页显示 10 条数据。</p>
        <p style="margin-top:10px;"><code>Page</code>监听一个<code>on-change</code>事件，一旦切换页码会触发该事件。</p>
      </template>
    </ba-demo>

    <h3>每页显示条数</h3>
    <p>通过设置可以选择让每页显示多少条数据。</p>
    <ba-demo>
      <template slot="source">
        <v-page :total="100" :page-size="20"></v-page>
      </template>
      <template slot="code">{{ code.size }}</template>
      <template slot="desc">
        <p>默认一页显示 10 条数据。可以通过<code>page-size</code>来告知<code>Page</code>一页该显示几条数据。</p>
      </template>
    </ba-demo>

    <h3>总条数</h3>
    <p>显示总条数。</p>
    <ba-demo>
      <template slot="source">
        <v-page :total="100" show-total></v-page>
      </template>
      <template slot="code">{{ code.total }}</template>
      <template slot="desc">
        <p><code>show-total</code>属性可以显示出数据总数。</p>
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
            <td>current</td>
            <td>当前页码</td>
            <td>Number</td>
            <td>1</td>
          </tr>
          <tr>
            <td>total</td>
            <td>数据总数</td>
            <td>Number</td>
            <td>0</td>
          </tr>
          <tr>
            <td>page-size</td>
            <td>每页条数</td>
            <td>Number</td>
            <td>10</td>
          </tr>
          <tr>
            <td>show-total</td>
            <td>显示数据总数</td>
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
            <td>当页码的值改变时触发</td>
            <td>切换后的页码</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import Demo from '../components/demo';
  import code from '../code/page';

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
      handlePageChange(current) {
        console.log('当前页：', current);
      },
    }
  };
</script>