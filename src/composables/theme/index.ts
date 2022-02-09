import { computed, PropType, Ref } from 'vue';

export const themeProps = {
  dark: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  light: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
};

export function useTheme (dark: Ref, light: Ref) {
  return computed(() => ({
    'is-dark': dark.value,
    'is-light': light.value,
  }));
};
