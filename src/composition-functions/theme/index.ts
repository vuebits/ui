import { computed, PropType, Ref } from 'vue';
import { prefix } from '@/helpers/css-classes';

export const themeProps = {
  dark: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  light: {
    type: Boolean as PropType<boolean>,
    default: false
  }
};

export function useTheme (dark: Ref, light: Ref) {
  return computed(() => ({
    [`${prefix}theme-dark`]: dark.value,
    [`${prefix}theme-light`]: light.value
  }));
};
