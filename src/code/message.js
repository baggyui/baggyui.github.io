let code = {};

code.default = `
<template>
  <v-button @click="openMessage">打开消息提示</v-button>
</template>

<script>
  export default {
    methods: {
      openMessage() {
        this.$message({
          message: '这是一条消息提示'
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
      @click="openSuccessMessage">成功消息</v-button>
    <v-button
      type="warning"
      @click="openWarnMessage">警告消息</v-button>
    <v-button
      type="danger"
      @click="openFailMessage">失败消息</v-button>
    <v-button
      type="info"
      @click="openInfoMessage">信息消息</v-button>
  </div>
</template>

<script>
  export default {
    methods: {
      openSuccessMessage() {
        this.$message({
          message: '这是一条成功的消息提示',
          type: 'success'
        });
      },

      openWarnMessage() {
        this.$message({
          message: '这是一条警告的消息提示',
          type: 'warning'
        });
      },

      openFailMessage() {
        this.$message.error({
          message: '这是一条错误的消息提示'
        });
      },

      openInfoMessage() {
        this.$message({
          message: '这是一条消息提示',
          type: 'info'
        });
      }
    }
  }
</script>
`;

export default code;