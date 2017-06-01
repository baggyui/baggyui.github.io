let code = {};

code.default = `
<template>
  <v-tree :data="data" @on-toggle="handleToggle"></v-tree>
</template>

<script>
  export default {
    data() {
      return {
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
      }
    }
  };
</script>
`;

code.arrow = `
<template>
  <v-tree
    :data="data"
    :expand-on-click-node="false"
    @on-toggle="handleToggle2"
    @on-arrow-toggle="handleArrowToggle"></v-tree>
</template>

<script>
  export default {
    data() {
      return {
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
      handleToggle2(data) {
        console.log('节点被点击了: ', data);
      },

      handleArrowToggle(data) {
        console.log('节点箭头被点击了: ', data);
      }
    }
  };
</script>
`;

export default code;