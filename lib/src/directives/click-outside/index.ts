import { Directive } from 'vue'

const HANDLERS_PROPERTY = '__v-click-outside'
const HAS_WINDOWS = typeof window !== 'undefined'
const HAS_NAVIGATOR = typeof navigator !== 'undefined'
const IS_TOUCH =
  HAS_WINDOWS &&
  ('ontouchstart' in window || (HAS_NAVIGATOR && (navigator as any).msMaxTouchPoints > 0))
const EVENTS = IS_TOUCH ? ['touchstart'] : ['click']

function processDirectiveArguments(bindingValue: any) {
  const isFunction = typeof bindingValue === 'function'
  if (!isFunction && typeof bindingValue !== 'object') {
    throw new Error('v-click-outside: Binding value must be a function or an object')
  }

  return {
    handler: isFunction ? bindingValue : bindingValue.handler,
    middleware: bindingValue.middleware || ((item: any) => item),
    events: bindingValue.events || EVENTS,
    isActive: !(bindingValue.isActive === false),
  }
}

function onEvent({ el, event, handler, middleware }: any) {
  // Note: composedPath is not supported on IE and Edge, more information here:
  //       https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath
  //       In the meanwhile, we are using el.contains for those browsers, not
  //       the ideal solution, but using IE or EDGE is not ideal either.
  const path = event.path || (event.composedPath && event.composedPath())
  const isClickOutside = path ? path.indexOf(el) < 0 : !el.contains(event.target)

  if (!isClickOutside) {
    return
  }

  if (middleware(event)) {
    handler(event)
  }
}

function beforeMount(el: any, { value }: any): void {
  const { events, handler, middleware, isActive } = processDirectiveArguments(value)
  if (!isActive) {
    return
  }

  el[HANDLERS_PROPERTY] = events.map((eventName: any) => ({
    event: eventName,
    handler: (event: any) => onEvent({ event, el, handler, middleware }),
  }))

  el[HANDLERS_PROPERTY].forEach(({ event, handler }: any) =>
    setTimeout(() => {
      // Note: More info about this implementation can be found here:
      //       https://github.com/ndelvalle/v-click-outside/issues/137
      if (!el[HANDLERS_PROPERTY]) {
        return
      }
      document.documentElement.addEventListener(event, handler, false)
    }, 0),
  )
}

function unmounted(el: any) {
  const handlers = el[HANDLERS_PROPERTY] || []
  handlers.forEach(({ event, handler }: any) =>
    document.documentElement.removeEventListener(event, handler, false),
  )
  delete el[HANDLERS_PROPERTY]
}

function updated(el: any, { value, oldValue }: any) {
  if (JSON.stringify(value) === JSON.stringify(oldValue)) {
    return
  }
  unmounted(el)
  beforeMount(el, { value })
}

const directive: Directive = {
  beforeMount,
  updated,
  unmounted,
}

export default directive
