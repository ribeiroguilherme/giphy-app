import { RouteConfig } from 'vue-router';
import CategoriesPage from '@/pages/CategoriesPage.vue';

const categoryRoutes: RouteConfig[] = [
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
];

export default categoryRoutes;
