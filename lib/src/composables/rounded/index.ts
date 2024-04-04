import { computed, PropType, Ref } from 'vue'

export type RoundedProps = {
  rounded?: boolean
  roundedLg?: boolean
  round?: boolean
}

export const defaultRoundedProps: Partial<RoundedProps> = {
  rounded: false,
  roundedLg: false,
  round: false,
}

export const roundedProps = {
  rounded: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  roundedLg: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  round: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
}

export function useRounded(rounded: Ref, roundedLg: Ref, round?: Ref) {
  return computed(() => ({
    'is-rounded': rounded.value,
    'is-rounded-lg': roundedLg.value,
    'is-round': round?.value || false,
  }))
}
