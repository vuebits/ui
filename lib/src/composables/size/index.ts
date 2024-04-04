import { PropType } from 'vue'

export type SizeProps = {
  size: 'sm' | 'md' | 'lg'
}

export const defaultSizeProps: Partial<SizeProps> = {
  size: 'md',
}

export const sizeProps = {
  size: {
    type: String as PropType<'sm' | 'md' | 'lg'>,
    default: 'md',
  },
}
