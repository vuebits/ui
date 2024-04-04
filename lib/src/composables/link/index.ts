import { computed, PropType, Ref } from 'vue'

export type LinkProps = {
  to?: any
  href?: string | null
  newWindow?: boolean
}

export const defaultLinkProps: Partial<LinkProps> = {
  to: null,
  href: null,
  newWindow: false,
}

export const linkProps = {
  to: {
    type: [Object, String],
    default: null,
  },
  href: {
    type: String as PropType<string | null>,
    default: null,
  },
  newWindow: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
}

export function useLink(to: Ref, href: Ref<string | null>, newWindow: Ref<boolean>) {
  return {
    component: computed(() => (to.value ? 'RouterLink' : href.value ? 'a' : 'span')),
    target: computed(() => (newWindow.value ? '_blank' : '_self')),
  }
}
