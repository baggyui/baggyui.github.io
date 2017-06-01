let code = {};

code.default = `
<template>
  <v-table :columns="columns" :data="data"></v-table>
</template>

<script>
  export default {
    data() {
      return {
        columns: [{
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
        }],

        data: [{
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
        }]
      };
    }
  };
</script>
`;

code.stripe = `
<template>
  <v-table :columns="columns" :data="data" stripe></v-table>
</template>

<script>
  export default {
    data() {
      return {
        columns: [{
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
        }],

        data: [{
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
        }]
      };
    }
  };
</script>
`;

code.border = `
<template>
  <v-table :columns="columns" :data="data" border></v-table>
</template>

<script>
  export default {
    data() {
      return {
        columns: [{
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
        }],

        data: [{
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
        }]
      };
    }
  };
</script>
`;

code.height = `
<template>
  <v-table
    :columns="columns"
    :data="data"
    height="150"
    stripe></v-table>
</template>

<script>
  export default {
    data() {
      return {
        columns: [{
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
        }],

        data: [{
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
        }]
      };
    }
  };
</script>`;

code.selection = `
<template>
  <v-table
    :columns="columns"
    :data="data"
    border
    @selection-change="handleSelectionChange"></v-table>
</template>

<script>
  export default {
    data() {
      return {
        columns: [{
          type: 'selection',
          width: 60
        }, {
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
        }],

        data: [{
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
        }]
      };
    },

    methods: {
      handleSelectionChange(val) {
        let arr = [];

        val.forEach((value) => {
          arr.push(value.name);
        });

        console.log(arr);
      }
    }
  };
</script>`;

export default code;