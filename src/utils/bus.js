import Vue from 'vue';

export default new Vue({
  data() {
    return {
      barVisible: false
    };
  },

  methods: {
    setBarVisible(visible) {
      this.barVisible = visible;
    }
  }
});