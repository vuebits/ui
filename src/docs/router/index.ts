import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import {
  Docs,
  Home,
  DocsComponents
} from '@/docs/views';
import {
  RouteName
} from './models';
import components from './components';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: RouteName.HOME,
    component: Home
  },
  {
    path: '/docs',
    name: RouteName.DOCS,
    component: Docs,
    children: [
      {
        path: 'components',
        name: RouteName.COMPONENTS,
        component: DocsComponents,
        children: components
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
