<template>
  <div class="demo-block">
    <div class="source">
      <slot name="source"></slot>
    </div>
    <div class="meta" ref="meta" :style="codeHight">
      <ba-code><slot name="code"></slot></ba-code>
      <div class="description">
        <slot name="desc"></slot>
      </div>
    </div>
    <div class="control" @click="toggleShowCode">{{ showCode ? '隐藏代码' : '显示代码' }}</div>
  </div>
</template>

<script>
  import Code from './code';

  export default {
    components: {
      'ba-code': Code
    },

    data() {
      return {
        ready: false,
        height: 0,
        showCode: false
      };
    },

    computed: {
      codeHight() {
        let style = {};

        if (this.ready) {
          if (this.showCode) {
            style.height = `${this.height}px`;
          } else {
            style.height = '0';
          }
        }

        return style;
      }
    },

    methods: {
      toggleShowCode() {
        this.showCode = !this.showCode;
      }
    },

    mounted() {
      this.$nextTick(() => {
        this.height = this.$refs.meta.clientHeight;
        this.ready = true;
      });
    }
  };
</script>