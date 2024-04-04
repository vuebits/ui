import { computed, PropType, Ref } from 'vue'

export type ElevatedProps = {
  elevated?: boolean
}

export const defaultElevatedProps: Partial<ElevatedProps> = {
  elevated: false,
}

export const elevatedProps = {
  elevated: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
}

export function useElevated(elevated: Ref) {
  return computed(() => ({
    'is-elevated': elevated.value,
  }))
}
