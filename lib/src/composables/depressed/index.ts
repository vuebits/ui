import { computed, PropType, Ref } from 'vue'

export type DepressedProps = {
  depressed: boolean
}

export const defaultDepressedProps: Partial<DepressedProps> = {
  depressed: false,
}

export const depressedProps = {
  depressed: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
}

export function useDepressed(depressed: Ref) {
  return computed(() => ({
    'is-depressed': depressed.value,
  }))
}
