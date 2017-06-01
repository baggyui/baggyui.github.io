let radio = {};

radio.default = `
<template>
  <div>
    <v-radio v-model="fruit" label="apple">苹果</v-radio>
    <v-radio v-model="fruit" label="banana">香蕉</v-radio>
    <v-radio v-model="fruit" label="pear">梨子</v-radio>
    <p>{{ fruit }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fruit: 'apple'
      };
    }
  };
</script>
`;

radio.disabled = `
<template>
  <div>
    <v-radio v-model="fruit" label="apple" disabled>苹果</v-radio>
    <v-radio v-model="fruit" label="banana" disabled>香蕉</v-radio>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fruit: 'apple'
      };
    }
  };
</script>
`;

radio.group = `
<template>
  <div>
    <v-radio-group v-model="city">
      <v-radio label="beijing">北京</v-radio>
      <v-radio label="shanghai">上海</v-radio>
      <v-radio label="guangzhou">广州</v-radio>
      <v-radio label="shenzhen">深圳</v-radio>
    </v-radio-group>
    <p>{{ city }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        city: 'beijing'
      };
    }
  };
</script>
`;

export default radio;