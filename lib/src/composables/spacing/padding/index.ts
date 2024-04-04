import { computed, PropType, Ref } from 'vue'
import { Spacing } from '../models'

export const paddingProps = {
  padding: {
    type: String as PropType<Spacing>,
    default: null,
  },
}

export function usePadding(padding: Ref) {
  return computed(() => ({
    [`has-padding-${padding.value}`]: padding.value,
  }))
}
