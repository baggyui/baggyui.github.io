<template>
  <div class="code">
    <pre><code class="html" ref="code"><slot></slot></code></pre>
  </div>
</template>

<script>
  import hljs from 'highlightjs/highlight.pack.js';

  export default {
    mounted() {
      let code = this.$refs.code.innerHTML.replace(/\n/, '');
      this.$refs.code.innerHTML = code;
      hljs.highlightBlock(this.$refs.code);
    }
  };
</script>