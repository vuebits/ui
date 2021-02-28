import { RouteRecordRaw } from 'vue-router';
import { RouteName } from './models';

export const components = [
  'Button',
  'Tile',
  'AsyncContent'
];

const routes: RouteRecordRaw[] = components.map(c => {
  return {
    path: `components/${c}`,
    name: `${RouteName.COMPONENTS}${c}`,
    component: () => import(`../views/Docs/Components/${c}/Component.vue`)
  };
});
export default routes;
