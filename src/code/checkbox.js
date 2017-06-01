let code = {};

code.default = `
<template>
  <div>
    <v-checkbox v-model="fruit" label="orange">橘子</v-checkbox>
    <v-checkbox v-model="fruit" label="pear">梨</v-checkbox>
    <v-checkbox v-model="fruit" label="banana">香蕉</v-checkbox>
    <p>{{ fruit }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fruit: ['orange']
      };
    }
  }
</script>
`;

code.disabled = `
<template>
  <div>
    <v-checkbox v-model="fruit" label="apple" disabled>苹果</v-checkbox>
    <v-checkbox v-model="fruit" label="banana" disabled>香蕉</v-checkbox>
    <p class="result">{{ fruit }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fruit: ['banana']
      };
    }
  }
</script>
`;

code.group = `
<template>
  <div>
    <v-checkbox-group v-model="fruit">
      <v-checkbox label="apple">苹果</v-checkbox>
      <v-checkbox label="banana">香蕉</v-checkbox>
      <v-checkbox label="pear">梨子</v-checkbox>
    </v-checkbox-group>
    <p>{{ fruit3 }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fruit: ['apple']
      };
    }
  }
</script>
`;
export default code;