<template>
  <span
    :disabled="disabled"
    :class="classes"
    v-bind="ui.testElName('badge')"
  >
    <slot />
  </span>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue'
import { bgColorClass, colorClass, CssClass } from '../../helpers/css-classes'
import {
  useBordered,
  useElevated,
  useTheme,
  useRounded,
  RoundedProps,
  BorderedProps,
  ThemeProps,
  ElevatedProps,
  defaultThemeProps,
  defaultBorderedProps,
  defaultElevatedProps,
  defaultRoundedProps,
} from '../../composables'
import { defineBem, useUi } from '../../index'
const props = withDefaults(
  defineProps<
    {
      color?: string | null
      disabled?: boolean
      size?: string
    } & ThemeProps &
      BorderedProps &
      RoundedProps &
      ElevatedProps
  >(),
  {
    color: null,
    disabled: false,
    size: 'md',
    ...defaultThemeProps,
    ...defaultBorderedProps,
    ...defaultElevatedProps,
    ...defaultRoundedProps,
  },
)
const bem = defineBem('ui-badge')
const ui = useUi()
const { dark, light, bordered, rounded, roundedLg, elevated } = toRefs(props)

const themeClass = useTheme(dark, light)
const borderedClass = useBordered(bordered)
const elevatedClass = useElevated(elevated)
const roundedClass = useRounded(rounded, roundedLg)
const classes = computed((): CssClass[] => {
  const colorClasses = props.color ? [bgColorClass(props.color), colorClass('white')] : []
  return [
    ...colorClasses,
    ...bem({
      m: {
        [props.size]: true,
        disabled: props.disabled,
        round: props.round,
      },
    }),
    themeClass.value,
    borderedClass.value,
    elevatedClass.value,
    roundedClass.value,
  ]
})
</script>

<style lang="scss">
@import './Badge';
</style>
