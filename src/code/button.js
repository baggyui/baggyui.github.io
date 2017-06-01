let code = {};

code.default = `
<v-button>默认按钮</v-button>
<v-button type="primary">主要按钮</v-button>
<v-button type="text">文字按钮</v-button>
`;

code.disabled = `
<v-button :disabled>默认按钮</v-button>
<v-button type="primary" :disabled>主要按钮</v-button>
<v-button type="text" :disabled>文字按钮</v-button>
`;

code.tip = `
<v-button type="success">成功按钮</v-button>
<v-button type="warning">警告按钮</v-button>
<v-button type="danger">危险按钮</v-button>
<v-button type="info">信息按钮</v-button>
`;

code.loading = `
<template>
  <v-button
    type="primary"
    :loading="loading"
    @click="handleLoading">
    <span v-if="!loading">点击加载</span>
    <span v-else>加载中...</span>
  </v-button>
</template>

<script>
  export default {
    data() {
      return {
        loading: false
      };
    },
    methods: {
      handleLoading() {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      }
    }
  };
</script>
`;

export default code;