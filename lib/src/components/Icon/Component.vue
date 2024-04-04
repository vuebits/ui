<template>
  <i
    :class="classes"
    v-bind="$ui.testElName('icon')"
  >
    <slot>
      <svg
        v-if="ui.icons.format === 'js'"
        :width="svgSize"
        :height="svgSize"
        :viewBox="ui.icons.viewbox"
        :class="bem({ e: 'svg' })"
      >
        <path
          :d="computedPath"
          :class="bem({ e: 'path' })"
        />
      </svg>
    </slot>
  </i>
</template>

<script lang="ts">
export default {
  name: 'UiIcon',
}
</script>

<script lang="ts" setup>
import { CssClass } from '../../helpers/css-classes'
import { computed } from 'vue'
import { defineBem } from '../../helpers/bem'
import { useUi } from '../../index'
import { IconSize } from '../../types'

type Props = {
  name?: string
  prefix?: string
  type?: string
  path?: string
  size?: IconSize | null
  rotate?: '90' | '180' | '270' | null
  flip?: 'horizontal' | 'vertical' | 'both' | null
  pulse?: boolean
  spin?: boolean
}

const svgSize = computed(() => {
  if (ui.icons.format !== 'js') return 1
  const svgSizeFactors: Record<IconSize, number> = {
    lg: 4 / 3,
    sm: 0.875,
    xs: 0.75,
    '1x': 1,
    '2x': 2,
    '3x': 3,
    '4x': 4,
    '5x': 5,
    '6x': 6,
    '7x': 7,
    '8x': 8,
    '9x': 9,
    '10x': 10,
  }
  const sizeFactor = props.size ? svgSizeFactors[props.size] : 1
  return ui.icons.size * sizeFactor
})

const props = withDefaults(defineProps<Props>(), {
  name: '',
  prefix: '',
  type: '',
  path: '',
  size: null,
  rotate: null,
  flip: null,
  pulse: false,
  spin: false,
})
const bem = defineBem('ui-icon')

const ui = useUi()

const isJsFormat = computed(() => ui.icons.format === 'js')

const computedPrefix = computed((): string => {
  if (ui.icons.format === 'js') return ''
  return props.prefix || ui.icons.prefix
})

const computedType = computed((): string => {
  if (ui.icons.format === 'js') return ''
  return props.type || ui.icons.type
})

const computedPath = computed((): string => props.path || props.name)

const classes = computed((): CssClass[] => {
  let iconClasses: string[] = []
  iconClasses = isJsFormat.value
    ? []
    : [`${computedPrefix.value}${props.name}`, computedType.value]
  return [
    ...bem({
      m: {
        [`size-${props.size}`]: !!props.size,
        [`rotate-${props.rotate}`]: !!props.rotate,
        [`flip-${props.flip}`]: !!props.flip,
        pulse: props.pulse,
        spin: props.spin,
      },
    }),
    ...iconClasses,
  ]
})
</script>

<style lang="scss">
@import './styles';
</style>
