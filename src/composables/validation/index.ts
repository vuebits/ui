import { computed, PropType, Ref } from 'vue';

export const validationProps = {
  error: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
};

export function useValidation (error: Ref) {
  const validationBorderClass = computed(() => ({
    'is-bordered': error.value,
    'has-border-color-error': error.value,
  }));

  return {
    validationBorderClass,
  };
};
