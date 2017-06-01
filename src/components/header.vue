<template>
  <div id="header">
    <img
      id="logo"
      src="../assets/logo.png"
      title="baggyui"
      @click="handleRoot" />
    <ul id="nav">
      <li @click="handleGithub"><v-icon type="social-github"></v-icon>Github</li>
    </ul>
  </div>
</template>

<script>
  export default {
    methods: {
      handleRoot() {
        this.$router.push('/');
      },

      handleGithub() {
        window.open('https://github.com/baggyui/baggyui');
      }
    }
  };
</script>