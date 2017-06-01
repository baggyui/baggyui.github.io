let code = {};

code.default = `
<template>
  <v-input v-model="input" placeholder="请输入内容"></v-input>
</template>

<script>
  export default {
    data() {
      return {
        input: '',
      };
    }
  };
</script>
`;

code.pwd = `
<template>
  <v-input
    v-model="password"
    type="password"
    placeholder="请输入密码"></v-input>
</template>

<script>
  export default {
    data() {
      return {
        password: ''
      };
    }
  };
</script>
`;

code.textarea = `
<template>
  <v-input
    v-model="textarea"
    type="textarea"
    placeholder="请输入内容"
    rows="4"></v-input>
</template>

<script>
  export default {
    data() {
      return {
        textarea: '',
      };
    }
  };
</script>
`;

code.disabled = `
<template>
  <v-input
    v-model="disabledInput"
    placeholder="请输入内容"
    disabled></v-input>
</template>

<script>
  export default {
    data() {
      return {
        disabledInput: ''
      };
    }
  };
</script>
`;

code.error = `
<template>
  <v-input
    v-model="errInput"
    placeholder="请输入内容"
    invalid></v-input>
</template>

<script>
  export default {
    data() {
      return {
        errInput: ''
      };
    }
  };
</script>
`;

code.icon = `
<template>
  <v-input
    v-model="iconInput"
    icon="ios-search-strong"
    placeholder="请输入内容"
    @on-icon-click="handleIconClick"></v-input>
</template>

<script>
  export default {
    data() {
      return {
        iconInput: ''
      };
    },

    methods: {
      handleIconClick(val) {
        console.log('Search: ', val);
      }
    }
  };
</script>
`;

code.suggestions = `
<template>
  <v-input
    v-model="suggestInput"
    placeholder="请输入内容"
    :suggestions="suggestions"></v-input>
</template>

<script>
  export default {
    data() {
      return {
        suggestInput: '',
        suggestions: ['北京市', '上海市', '广州市', '深圳市'],
      };
    }
  };
</script>
`;

code.factor = `
<template>
  <v-input
    v-model="slotInput"
    placeholder="请输入内容"
    style="width:400px;">
    <span slot="prepend">https://</span>
    <span slot="append">.com</span>
  </v-input>
</template>

<script>
  export default {
    data() {
      return {
        slotInput: '',
      };
    }
  };
</script>
`;

export default code;