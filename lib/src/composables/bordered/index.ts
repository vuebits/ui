import { computed, PropType, Ref } from 'vue';

export const borderedProps = {
  bordered: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
};

export function useBordered (bordered: Ref) {
  return computed(() => ({
    'is-bordered': bordered.value,
  }));
};
