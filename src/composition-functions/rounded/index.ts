import { computed, PropType, Ref } from 'vue';
import { prefix } from '@/helpers/css-classes';

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
    [`${prefix}rounded`]: rounded.value,
    [`${prefix}rounded-lg`]: roundedLg.value,
    [`${prefix}round`]: round.value
  }));
};
