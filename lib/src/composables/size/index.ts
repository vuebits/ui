import { PropType } from 'vue';

export const sizeProps = {
  size: {
    type: String as PropType<'sm' | 'md' | 'lg'>,
    default: 'md',
  },
};
