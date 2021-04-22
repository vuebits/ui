import { App } from 'vue';
import {
  CustomOptions,
  BemItem
} from '@/models';
import { getClassName } from './helpers';
import { defaultOptions } from './config';

export function install (Vue: App, options: CustomOptions): void {
  const bemOptions = options.bem || defaultOptions.bem;
  Vue.mixin({
    name: 'BemMixin',
    methods: {
      $bem ({ b, e, m }: BemItem): string[] {
        const pascalToKebabCase = (s: string) => s
          .replace(/([A-Z])([A-Z])/g, '$1-$2')
          .replace(/([a-z])([A-Z])/g, '$1-$2')
          .replace(/[\s_]+/g, '-')
          .toLowerCase();
        const n = this.$options.name;
        const block: string = b || bemOptions.hyphenate ? pascalToKebabCase(n) : n;
        const modifiers: string[] = m ? (typeof m === 'string' ? [m] : (Array.isArray(m) ? m : Object.keys(m).filter(key => m[key]))) : [];
        const elementClass = getClassName(block, e);
        const modifiersClasses = modifiers.map(m => getClassName(block, e, m));
        return [elementClass, ...modifiersClasses];
      }
    }
  });

  const ui = {
    ...defaultOptions,
    ...options
  };

  Vue.config.globalProperties.$ui = ui;
}
