import '@/router/class-component-hooks';
import Vue from 'vue';
import router from '@/router';
import store from '@/store';
import initializeThemeListener from '@/utils/initialize-theme-listener';
import App from '@/App.vue';

Vue.config.productionTip = false;

initializeThemeListener();

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
