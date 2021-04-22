import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import {
  Docs,
  Home
} from '@/docs/views';
import {
  RouteName
} from './models';
import { componentsRoutes } from './components';
import { gettingStartedRoutes } from './getting-started';
import { stylesRoutes } from './styles';

const docsRoutes = (parent: string, routes: {name: string; label: string}[]): RouteRecordRaw[] => {
  return routes.map(r => {
    return {
      path: r.name,
      name: `${parent}${r.name}`,
      component: () => import(`../views/Docs/${parent}/${r.name}/Component.vue`)
    };
  });
};

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
        path: 'getting-started',
        name: RouteName.GETTING_STARTED,
        component: () => import(/* webpackChunkName: "getting-started" */ '../views/Docs/GettingStarted/Component.vue'),
        children: docsRoutes(RouteName.GETTING_STARTED, gettingStartedRoutes)
      },
      {
        path: 'styles',
        name: RouteName.STYLES,
        component: () => import(/* webpackChunkName: "styles" */ '../views/Docs/Styles/Component.vue'),
        children: docsRoutes(RouteName.STYLES, stylesRoutes)
      },
      {
        path: 'components',
        name: RouteName.COMPONENTS,
        component: () => import(/* webpackChunkName: "components" */ '../views/Docs/Components/Component.vue'),
        children: docsRoutes(RouteName.COMPONENTS, componentsRoutes)
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
