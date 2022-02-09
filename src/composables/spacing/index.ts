import { computed, Ref } from 'vue';
import { marginProps, useMargin } from './margin';
import { paddingProps, usePadding } from './padding';

export const spacingProps = {
  ...marginProps,
  ...paddingProps,
};

export function useSpacing (padding: Ref, margin: Ref) {
  return computed(() => ({
    [`has-padding-${padding.value}`]: padding.value,
    [`has-margin-${margin.value}`]: margin.value,
  }));
};

export {
  marginProps,
  paddingProps,
  useMargin,
  usePadding,
};
