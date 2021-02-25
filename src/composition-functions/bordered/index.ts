import { computed, PropType, Ref } from 'vue';
import { prefix } from '@/helpers/css-classes';

export const borderedProps = {
  bordered: {
    type: Boolean as PropType<boolean>,
    default: false
  }
};

export function useBordered (bordered: Ref) {
  return computed(() => ({
    [`${prefix}bordered`]: bordered.value
  }));
};
