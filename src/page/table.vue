<template>
  <div class="content">
    <h2>表格 Table</h2>
    <p>用于展示多条结构类似的数据。</p>

    <h3>基础用法</h3>
    <p>基础的表格用法。</p>
    <ba-demo>
      <template slot="source">
        <v-table :columns="columns1" :data="data1"></v-table>
      </template>
      <template slot="code">{{ code.default }}</template>
      <template slot="desc">
        <p><code>columns</code>属性需是一个对象数组，代表表格的页头。其中<code>title</code>是标题，<code>key</code>对应着<code>data</code>属性里对象的键。<code>width</code>可选，表示每一列的宽度。</p>
        <p style="margin-top:10px;"><code>data</code>属性需是一个对象数组，代表表格的内容。对象中的键来自于<code>columns</code>中的<code>key</code>。</p>
      </template>
    </ba-demo>

    <h3>斑马纹</h3>
    <p>使用斑马纹可以更清晰地区分不同的行。</p>
    <ba-demo>
      <template slot="source">
        <v-table :columns="columns1" :data="data1" stripe></v-table>
      </template>
      <template slot="code">{{ code.stripe }}</template>
      <template slot="desc">
        <p>设置<code>stripe</code>属性可以显示斑马纹。</p>
      </template>
    </ba-demo>

    <h3>带边框表格</h3>
    <p>每一个单元格都用边框分隔开。</p>
    <ba-demo>
      <template slot="source">
        <v-table :columns="columns1" :data="data1" border></v-table>
      </template>
      <template slot="code">{{ code.border }}</template>
      <template slot="desc">
        <p>设置<code>border</code>属性可以显示单元格边框。</p>
      </template>
    </ba-demo>

    <h3>固定表头</h3>
    <p>当数据过多时，可以考虑使用固定表头来展示。</p>
    <ba-demo>
      <template slot="source">
        <v-table
          :columns="columns3"
          :data="data2"
          stripe
          height="150"></v-table>
      </template>
      <template slot="code">{{ code.height }}</template>
      <template slot="desc">
        <p>设置<code>height</code>固定了表格的高度，内容超出表格高度会显示滚动条。</p>
      </template>
    </ba-demo>

    <h3>多选</h3>
    <p>用于需要操作选择的场景。</p>
    <ba-demo>
      <template slot="source">
        <v-table
          :columns="columns2"
          :data="data1"
          border
          @selection-change="handleSelectionChange"></v-table>
      </template>
      <template slot="code">{{ code.selection }}</template>
      <template slot="desc">
        <p>给<code>columns</code>中的对象设置了<code>selection</code>会显示多选框。给<code>data</code>中的对象设置<code>_checked</code>为<code>true</code>时会默认选中。</p>
        <p style="margin-top:10px;">Table 监听<code>selection-change</code>事件，选中 Checkbox 时触发，返回选中的数据集。</p>
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
            <td>columns</td>
            <td>表格列的配置描述，具体见下文</td>
            <td>Array</td>
            <td>[ ]</td>
          </tr>
          <tr>
            <td>data</td>
            <td>表格内容</td>
            <td>Array</td>
            <td>[ ]</td>
          </tr>
          <tr>
            <td>stripe</td>
            <td>是否显示斑马纹</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>border</td>
            <td>是否显示纵向边框</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>height</td>
            <td>表格高度，如果表格内容大于此值，会固定表头</td>
            <td>Number</td>
            <td>-</td>
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
            <td>selection-change</td>
            <td>点击 Checkbox 时触发</td>
            <td>选中的数据集</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>columns</h3>
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
            <td>title</td>
            <td>列表显示的文字</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>key</td>
            <td>列表对应内容的字段名</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>width</td>
            <td>列宽</td>
            <td>String | Number</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import Demo from '../components/demo';
  import code from '../code/table';

  export default {
    components: {
      'ba-demo': Demo
    },

    data() {
      return {
        code,

        columns1: [
          {
            title: '姓名',
            key: 'name',
            width: '33%'
          }, {
            title: '年龄',
            key: 'age',
            width: '33%'
          }, {
            title: '地址',
            key: 'address'
          }
        ],

        columns2: [
          {
            type: 'selection',
            width: 60,
          }, {
            title: '姓名',
            key: 'name',
            width: '30%'
          }, {
            title: '年龄',
            key: 'age',
            width: '30%'
          }, {
            title: '地址',
            key: 'address'
          }
        ],

        columns3: [
          {
            title: '姓名',
            key: 'name',
            width: 200
          }, {
            title: '年龄',
            key: 'age',
            width: 200
          }, {
            title: '地址',
            key: 'address'
          }
        ],

        data1: [
          {
            name: '路飞',
            age: 18,
            address: '东海风车村'
          }, {
            name: '娜美',
            age: 17,
            address: '东海可可亚西村'
          }, {
            name: '索隆',
            age: 18,
            address: '东海霜月村'
          }, {
            name: '乌索布',
            age: 17,
            address: '东海西罗普村'
          }
        ],

        data2: [
          {
            name: '路飞',
            age: 18,
            address: '东海风车村'
          }, {
            name: '娜美',
            age: 17,
            address: '东海可可亚西村'
          }, {
            name: '索隆',
            age: 18,
            address: '东海霜月村'
          }, {
            name: '乌索布',
            age: 17,
            address: '东海西罗普村'
          }, {
            name: '山治',
            age: 18,
            address: '东海巴拉蒂耶海上餐厅'
          }, {
            name: '乔巴',
            age: 15,
            address: '伟大航路樱花王国'
          }, {
            name: '罗宾',
            age: 20,
            address: '西海奥哈拉'
          }, {
            name: '弗兰奇',
            age: 21,
            address: '伟大航路水之都'
          }, {
            name: '布鲁克',
            age: 100,
            address: '魔之海域'
          }
        ],
      };
    },

    methods: {
      // 多选 action
      handleSelectionChange(val) {
        let arr = [];

        val.forEach((value) => {
          arr.push(value.name);
        });

        console.log(arr);
      }
    }
  };
</script>
