import { computed, PropType, Ref } from 'vue'

export type ValidationProps = {
  error: boolean
}

export const defaultValidationProps: Partial<ValidationProps> = {
  error: false,
}

export const validationProps = {
  error: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
}

export function useValidation(error: Ref) {
  const validationBorderClass = computed(() => ({
    'is-bordered': error.value,
    'has-border-color-error': error.value,
  }))

  return {
    validationBorderClass,
  }
}
