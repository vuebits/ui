import { App } from 'vue';

const assetLibrary = (filename: string) => {
  const svg = import.meta.globEager('/src/assets/**/*.svg');
  const png = import.meta.globEager('/src/assets/**/*.png');
  const modules = {
    ...svg,
    ...png,
  };
  return modules[`/src/assets/${filename}`].default;
};

export const asset = (Vue: App) => {
  // eslint-disable-next-line no-param-reassign
  Vue.config.globalProperties.$asset = assetLibrary;
};

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $asset: ReturnType<typeof assetLibrary>;
  }
}
