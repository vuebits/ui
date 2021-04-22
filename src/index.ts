
import { App } from 'vue';
import {
  Options,
  CustomOptions,
  BemItem
} from './models';
import { install } from './library';
export * from './components';

export function createUI (options: CustomOptions): {install: (T: App) => void} {
  return {
    install: (app: App): void => install(app, options)
  };
}
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $bem: (T: BemItem) => string[];
    $ui: Options;
  }
}
