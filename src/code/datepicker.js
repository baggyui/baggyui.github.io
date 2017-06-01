let code = {};

code.default = `
<template>
  <v-datepicker
    placeholder="选择日期"
    @on-change="handleChange"></v-datepicker>
</template>

<script>
  export default {
    methods: {
      handleChange(val) {
        console.log('选择了日期：', val);
      }
    }
  };
</script>
`;

code.icon = `
<v-datepicker placeholder="选择日期" icon></v-datepicker>
`;

export default code;