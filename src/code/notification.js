let code = {};

code.default = `
<template>
  <div>
    <v-button @click="openNotify">打开通知</v-button>
    <v-button @click="openNotify2">打开通知（仅标题）</v-button>
    <v-button @click="openNotify3">打开通知（不会关闭）</v-button>
  </div>
</template>

<script>
  export default {
    methods: {
      openNotify() {
        this.$notify({
          title: '通知',
          message: '这是一条通知消息，这是一条通知消息',
        });
      },

      openNotify2() {
        this.$notify({
          title: '仅标题的通知'
        });
      },

      openNotify3() {
        this.$notify({
          title: '通知',
          message: '这是一条不会自动关闭的通知消息',
          duration: 0
        });
      }
    }
  }
</script>
`;

code.multi = `
<template>
  <div>
    <v-button
      type="success"
      @click="openNotify4">成功通知</v-button>
    <v-button
      type="warning"
      @click="openNotify5">警告通知</v-button>
    <v-button
      type="danger"
      @click="openNotify6">失败通知</v-button>
    <v-button
      type="info"
      @click="openNotify7">信息通知</v-button>
  </div>
</template>
<script>
  export default {
    methods: {
      openNotify4() {
        this.$notify({
          title: '成功',
          message: '这是一条成功的消息',
          type: 'success'
        });
      },

      openNotify5() {
        this.$notify({
          title: '警告',
          message: '这是一条警告的消息',
          type: 'warning'
        });
      },

      openNotify6() {
        this.$notify.error({
          title: '失败',
          message: '这是一条失败的消息'
        });
      },

      openNotify7() {
        this.$notify({
          title: '信息',
          message: '这是一条信息的消息',
          type: 'info'
        });
      }
    }
  }
</script>
`;

export default code;