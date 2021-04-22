import { computed, PropType, Ref } from 'vue';

export const roundedProps = {
  rounded: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  roundedLg: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  round: {
    type: Boolean as PropType<boolean>,
    default: false
  }
};

export function useRounded (rounded: Ref, roundedLg: Ref, round: Ref) {
  return computed(() => ({
    'is-rounded': rounded.value,
    'is-rounded-lg': roundedLg.value,
    'is-round': round.value
  }));
};
