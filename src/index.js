import Vue from 'vue';
import router from './router';
import baggyui from 'baggyui';
import App from './App';
import Bus from './utils/bus';

import 'baggyui/dist/baggyui.css';
import './styles/index.scss';

Vue.use(baggyui);

window.Bus = Bus;

new Vue({
  el: '#app',
  render: h => h(App),
  router
});
