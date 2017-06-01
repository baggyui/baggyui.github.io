let code = {};

code.default = `
<template>
  <div>
    <v-select v-model="city">
      <v-option label="北京市" value="Beijing"></v-option>
      <v-option label="上海市" value="Shanghai"></v-option>
      <v-option label="广州市" value="Guangzhou"></v-option>
      <v-option label="深圳市" value="Shenzhen"></v-option>
    </v-select>
    <p>{{ city }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        city: 'Beijing'
      };
    }
  }
</script>
`;

code.disabled = `
<template>
  <v-select v-model="city" disabled>
    <v-option label="北京市" value="Beijing"></v-option>
    <v-option label="上海市" value="Shanghai"></v-option>
    <v-option label="广州市" value="Guangzhou"></v-option>
    <v-option label="深圳市" value="Shenzhen"></v-option>
  </v-select>
</template>

<script>
  export default {
    data() {
      return {
        city: 'Beijing'
      };
    }
  }
</script>
`;

export default code;