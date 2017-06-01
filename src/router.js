import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/icon'
  },
  {
    path: '/icon',
    component: r => require.ensure([], () => r(require('./page/icon.vue')), 'icon')
  },
  {
    path: '/button',
    component: r => require.ensure([], () => r(require('./page/button.vue')), 'button')
  },
  {
    path: '/checkbox',
    component: r => require.ensure([], () => r(require('./page/checkbox.vue')), 'checkbox')
  },
  {
    path: '/select',
    component: r => require.ensure([], () => r(require('./page/select.vue')), 'select')
  },
  {
    path: '/radio',
    component: r => require.ensure([], () => r(require('./page/radio.vue')), 'radio')
  },
  {
    path: '/tree',
    component: r => require.ensure([], () => r(require('./page/tree.vue')), 'tree')
  },
  {
    path: '/input',
    component: r => require.ensure([], () => r(require('./page/input.vue')), 'input')
  },
  {
    path: '/datepicker',
    component: r => require.ensure([], () => r(require('./page/datepicker.vue')), 'datepicker')
  },
  {
    path: '/page',
    component: r => require.ensure([], () => r(require('./page/page.vue')), 'page')
  },
  {
    path: '/message',
    component: r => require.ensure([], () => r(require('./page/message.vue')), 'message')
  },
  {
    path: '/notification',
    component: r => require.ensure([], () => r(require('./page/notification.vue')), 'notification')
  },
  {
    path: '/dialog',
    component: r => require.ensure([], () => r(require('./page/dialog.vue')), 'dialog')
  },
  {
    path: '/modal',
    component: r => require.ensure([], () => r(require('./page/modal.vue')), 'modal')
  },
  {
    path: '/table',
    component: r => require.ensure([], () => r(require('./page/table.vue')), 'table')
  }
];

const router = new VueRouter({
  routes
});

router.afterEach(route => {
  window.scrollTo(0, 0);
});

export default router;