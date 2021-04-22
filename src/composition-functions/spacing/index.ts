import { computed, PropType, Ref } from 'vue';

export type Spacing = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | null

export const spacingProps = {
  padding: {
    type: String as PropType<Spacing>,
    default: null
  },
  margin: {
    type: String as PropType<Spacing>,
    default: null
  }
};

export function useSpacing (padding: Ref, margin: Ref) {
  return computed(() => ({
    [`has-padding-${padding.value}`]: padding.value,
    [`has-margin-${margin.value}`]: margin.value
  }));
};
