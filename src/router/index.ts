import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import NotFoundPage from '@/pages/NotFoundPage.vue';
import ProfilePage from '@/pages/ProfilePage.vue';
import NotAuthorizedPage from '@/pages/NotAuthorizedPage.vue';
import categoryRoutes from '@/router/categoryRoutes';

function isAuthenticated() {
  return false;
}

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  { path: '/', redirect: '/categories' },
  ...categoryRoutes,
  { path: '/my-profile', meta: { authRequired: true }, component: ProfilePage },
  { path: '/pageNotFound', alias: '*', component: NotFoundPage },
  { path: '/401', component: NotAuthorizedPage },
];

const router = new VueRouter({ routes });

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.authRequired)) {
    if (isAuthenticated()) {
      next();
    } else {
      next('/401');
    }
  } else {
    next();
  }
});

export default router;
