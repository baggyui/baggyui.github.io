let code = {};

code.default = `
<template>
  <v-page :total="100" @on-change="handlePageChange"></v-page>
</template>

<script>
  export default {
    methods: {
      handlePageChange(current) {
        console.log('当前页：', current);
      }
    }
  };
</script>
`;

code.size = `
<v-page :total="100" :page-size="20"></v-page>
`;

code.total = `
<v-page :total="100" show-total></v-page>
`;

export default code;