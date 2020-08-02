import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import NotFoundPage from '@/pages/NotFoundPage.vue';
import ProfilePage from '@/pages/ProfilePage.vue';
import CategoriesPage from '@/pages/CategoriesPage.vue';
import GifsPage from '@/pages/GifsPage.vue';
import NotAuthorizedPage from '@/pages/NotAuthorizedPage.vue';

function isAuthenticated() {
  return false;
}

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    redirect: '/categories',
  },
  {
    path: '/categories',
    name: 'categories',
    component: CategoriesPage,
  },
  {
    path: '/categories/:subcategory',
    component: CategoriesPage,
    props: true,
  },
  {
    path: '/gifs/:searchTerm',
    component: GifsPage,
    props: true,
  },
  {
    path: '/gifs/',
    redirect: '/',
  },
  {
    path: '/my-profile',
    meta: { authRequired: true },
    component: ProfilePage,
  },
  {
    path: '/pageNotFound',
    alias: '*',
    component: NotFoundPage,
  },
  {
    path: '/401',
    component: NotAuthorizedPage,
  },
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
