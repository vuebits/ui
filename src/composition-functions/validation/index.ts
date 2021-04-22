import { computed, PropType, Ref } from 'vue';

export const validationProps = {
  error: {
    type: String as PropType<string | null | undefined>,
    default: null
  },
  hint: {
    type: String as PropType<string | null | undefined>,
    default: null
  },
  noHint: {
    type: Boolean as PropType<boolean>,
    default: false
  }
};

export function useValidation (error: Ref, hint: Ref) {
  const validationBorderClass = computed(() => ({
    'is-bordered': error.value,
    'has-border-color-error': error.value
  }));

  const hintText = computed(() => error.value || hint.value || '');

  const validationHintClass = computed(() => ({
    'has-color-error': error.value
  }));

  return {
    validationBorderClass,
    hintText,
    validationHintClass
  };
};
