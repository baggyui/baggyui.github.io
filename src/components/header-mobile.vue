<template>
  <div id="header-mobile">
    <span class="menu" @click="handleToggle">
      <v-icon type="navicon"></v-icon>
    </span>
    <a id="logo-mobile" href="/">
      <img src="../assets/logo.png" />
    </a>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showSidebar: false
      };
    },

    methods: {
      handleToggle() {
        this.showSidebar = !this.showSidebar;
        this.$emit('toggle-sidebar', this.showSidebar);
      }
    }
  };
</script>