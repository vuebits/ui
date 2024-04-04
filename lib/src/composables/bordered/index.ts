import { computed, PropType, Ref } from 'vue'

export type BorderedProps = {
  bordered: boolean
}

export const defaultBorderedProps: Partial<BorderedProps> = {
  bordered: false,
}

export const borderedProps = {
  bordered: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
}

export function useBordered(bordered: Ref) {
  return computed(() => ({
    'is-bordered': bordered.value,
  }))
}
