import { App, inject } from 'vue'
import { Options, CustomOptions, BemItem } from './models'
import { install, uiSymbol } from './core'
export * from './components'
export * from './directives'
export { defineBem } from './helpers/bem'

export function createUI(options: CustomOptions): {
  install: (T: App) => void
} {
  return {
    install: (app: App): void => install(app, options),
  }
}

export function useUi() {
  const uiInstance = inject<Options>(uiSymbol)
  if (!uiSymbol || !uiInstance) throw new Error('No ui provided')

  return uiInstance
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $bem: (T: BemItem) => string[]
    $ui: Options
  }
}
