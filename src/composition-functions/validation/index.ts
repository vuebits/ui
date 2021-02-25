import { computed, PropType, Ref } from 'vue';
import { prefix } from '@/helpers/css-classes';

export const validationProps = {
  error: {
    type: String as PropType<string | null | undefined>,
    default: null
  },
  hint: {
    type: String as PropType<string | null | undefined>,
    default: null
  }
};

export function useValidation (error: Ref, hint: Ref) {
  const validationBorderClass = computed(() => ({
    [`${prefix}bordered`]: true,
    [`${prefix}border-color-error`]: error.value
  }));

  const hintText = computed(() => error.value || hint.value || '');

  const validationHintClass = computed(() => ({
    [`${prefix}color-error`]: error.value
  }));

  return {
    validationBorderClass,
    hintText,
    validationHintClass
  };
};
