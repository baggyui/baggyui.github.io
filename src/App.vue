<template>
  <div id="app">
    <ba-header></ba-header>
    <ba-header-mobile @toggle-sidebar="handleToggle"></ba-header-mobile>
    <div id="main">
      <ba-sidebar :visible="visible"></ba-sidebar>
      <div id="article">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './components/header';
  import HeaderMobile from './components/header-mobile';
  import Sidebar from './components/sidebar';

  export default {
    name: 'app',

    components: {
      'ba-header': Header,
      'ba-header-mobile': HeaderMobile,
      'ba-sidebar': Sidebar
    },

    data() {
      return {
        visible: false
      };
    },

    methods: {
      handleToggle(val) {
        this.visible = val;
      }
    }
  };
</script>