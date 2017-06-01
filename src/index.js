import Vue from 'vue';
import router from './router';
import baggyui from 'baggyui';
import App from './App';

import 'baggyui/dist/baggyui.css';
import './styles/index.scss';

Vue.use(baggyui);

new Vue({
  el: '#app',
  render: h => h(App),
  router
});
