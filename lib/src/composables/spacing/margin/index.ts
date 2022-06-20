import { computed, PropType, Ref } from 'vue';
import { Spacing } from '../models';

export const marginProps = {
  margin: {
    type: String as PropType<Spacing>,
    default: null,
  },
};

export function useMargin (margin: Ref) {
  return computed(() => ({
    [`has-margin-${margin.value}`]: margin.value,
  }));
};
