import '@/router/class-component-hooks';
import Vue from 'vue';
import VueRouter from 'vue-router';
import CategoryPage from '@/pages/CategoryPage.vue';
import App from '@/App.vue';

import '@/registerServiceWorker';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: '/:category', component: CategoryPage, props: true },
];

const router = new VueRouter({ routes });

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
