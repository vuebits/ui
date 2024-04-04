<template>
  <div
    :class="bem({})"
    v-bind="ui.testElName('switcher')"
  >
    <p
      v-if="offLabel"
      :class="bem({ e: 'label', m: 'off' })"
    >
      {{ offLabel }}
    </p>
    <div
      :class="containerClasses"
      v-bind="ui.testElName('switcher-slider')"
      @click="checkValue"
    >
      <div :class="sliderClasses" />
    </div>
    <p
      v-if="onLabel"
      :class="bem({ e: 'label', m: 'on' })"
    >
      {{ onLabel }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue'
import {
  useBordered,
  useRounded,
  useElevated,
  BorderedProps,
  ElevatedProps,
  RoundedProps,
  SizeProps,
  defaultBorderedProps,
  defaultElevatedProps,
  defaultRoundedProps,
  defaultSizeProps,
  defaultThemeProps,
  ThemeProps,
  useTheme,
} from '../../composables'
import { defineBem, useUi } from '../../index'
import { bgColorClass, CssClass, gradientClass } from '../../helpers/css-classes'

const bem = defineBem('ui-switcher')
const ui = useUi()

const isChecked = defineModel<boolean>('modelValue', { required: true })

const props = withDefaults(
  defineProps<
    {
      color?: string
      falseColor?: string
      disabled?: boolean
      loading?: boolean
      leftIcon?: string | null
      rightIcon?: string | null
      title?: string | null
      gradient?: string | null
      offLabel?: string
      onLabel?: string
    } & ThemeProps &
      BorderedProps &
      RoundedProps &
      ElevatedProps &
      SizeProps
  >(),
  {
    color: 'primary',
    disabled: false,
    loading: false,
    gradient: null,
    ...defaultThemeProps,
    ...defaultBorderedProps,
    ...defaultRoundedProps,
    ...defaultElevatedProps,
    ...defaultSizeProps,
  },
)

const emit = defineEmits<{
  change: []
}>()
const { dark, light, bordered, rounded, roundedLg, round, elevated } = toRefs(props)

const themeClass = useTheme(dark, light)
const borderedClass = useBordered(bordered)
const roundedClass = useRounded(rounded, roundedLg, round)
const elevatedClass = useElevated(elevated)

const colorClass = computed((): string | null => {
  if (!isChecked.value && props.falseColor) return bgColorClass(props.falseColor)
  const gradient = gradientClass(props.gradient)
  if (gradient) return gradient
  return bgColorClass(props.color)
})

const containerClasses = computed((): CssClass[] => [
  ...bem({
    e: 'container',
    m: {
      [props.size]: true,
      checked: isChecked.value,
      disabled: props.disabled,
    },
  }),
  themeClass.value,
  borderedClass.value,
  roundedClass.value,
])

const sliderClasses = computed((): CssClass[] => [
  ...bem({
    e: 'slider',
    m: {
      [props.size]: true,
      checked: isChecked.value,
    },
  }),
  roundedClass.value,
  elevatedClass.value,
  colorClass.value,
])

const checkValue = () => {
  if (props.disabled) return

  if (isChecked.value) {
    isChecked.value = false
  } else {
    isChecked.value = true
  }
  emit('change')
}
</script>

<style lang="scss">
@import './styles';
</style>
