import { computed, PropType, Ref } from 'vue';
import { prefix } from '@/helpers/css-classes';

export const elevatedProps = {
  elevated: {
    type: Boolean as PropType<boolean>,
    default: false
  }
};

export function useElevated (elevated: Ref) {
  return computed(() => ({
    [`${prefix}elevated`]: elevated.value
  }));
};
