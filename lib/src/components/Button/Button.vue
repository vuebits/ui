<template>
  <button
    :title="title ?? undefined"
    :class="classes"
    type="button"
    :disabled="disabled || loading"
    v-bind="ui.testElName('button')"
  >
    <component
      :is="component"
      :to="to"
      :href="href"
      :target="target"
      :rel="newWindow ? 'noopener' : ''"
      :class="bem({ e: 'container', m: { 'with-icons': !!leftIcon || !!rightIcon } })"
    >
      <slot name="container">
        <UiIcon
          v-if="leftIcon"
          :name="leftIcon"
          :class="bem({ e: 'icon' })"
        />
        <span :class="bem({ e: 'content' })">
          <slot />
          <UiSpinner
            v-if="loading"
            :color="dark ? 'white' : 'default'"
            :class="bem({ e: 'loader' })"
            size="1x"
          />
        </span>
        <UiIcon
          v-if="rightIcon"
          :name="rightIcon"
          :class="bem({ e: 'icon' })"
        />
      </slot>
    </component>
  </button>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue'
import {
  colorClass,
  bgColorClass,
  hoverColorClass,
  hoverBgColorClass,
  hoverableClass,
  CssClass,
} from '../../helpers/css-classes'
import {
  useBordered,
  useTheme,
  useRounded,
  useLink,
  useElevated,
  ThemeProps,
  BorderedProps,
  RoundedProps,
  LinkProps,
  ElevatedProps,
  SizeProps,
  defaultThemeProps,
  defaultBorderedProps,
  defaultRoundedProps,
  defaultLinkProps,
  defaultElevatedProps,
  defaultSizeProps,
} from '../../composables'
import { UiSpinner } from '../Spinner'
import { UiIcon } from '../Icon'
import { defineBem, useUi } from '../../index'

const props = withDefaults(
  defineProps<
    {
      color?: string
      disabled?: boolean
      loading?: boolean
      leftIcon?: string | null
      rightIcon?: string | null
      title?: string | null
      block?: boolean
      plain?: boolean
      hoverable?: boolean
      uppercase?: boolean
      gradient?: string | null
      theme?: string | null
    } & ThemeProps &
      BorderedProps &
      RoundedProps &
      LinkProps &
      ElevatedProps &
      SizeProps
  >(),
  {
    color: 'default',
    disabled: false,
    loading: false,
    leftIcon: null,
    rightIcon: null,
    title: null,
    block: false,
    plain: false,
    hoverable: false,
    uppercase: false,
    gradient: null,
    theme: null,
    ...defaultThemeProps,
    ...defaultBorderedProps,
    ...defaultRoundedProps,
    ...defaultLinkProps,
    ...defaultElevatedProps,
    ...defaultSizeProps,
  },
)
const { dark, light, bordered, rounded, roundedLg, round, to, href, newWindow, elevated } =
  toRefs(props)

const { component, target } = useLink(to, href, newWindow)

const themeClass = useTheme(dark, light)
const borderedClass = useBordered(bordered)
const roundedClass = useRounded(rounded, roundedLg, round)
const elevatedClass = useElevated(elevated)
const bem = defineBem('ui-button')
const ui = useUi()

const classes = computed((): CssClass[] => {
  let colorClasses: Array<string | null> = []
  if (props.color && props.color !== 'default') {
    if (props.plain) {
      colorClasses = [colorClass(props.color), hoverColorClass(`${props.color}-darken-1`)]
    } else {
      colorClasses = [bgColorClass(props.color), hoverBgColorClass(`${props.color}-darken-1`)]
    }
  }
  return [
    ...colorClasses,
    ...bem({
      m: {
        [props.size]: true,
        disabled: props.disabled || props.loading,
        block: props.block,
        [`gradient-${props.gradient}`]: !!props.gradient,
        uppercase: props.uppercase,
        [`theme-${props.theme}`]: !!props.theme,
      },
    }),
    {
      [hoverableClass]: props.hoverable,
    },
    themeClass.value,
    borderedClass.value,
    roundedClass.value,
    elevatedClass.value,
  ]
})
</script>

<style lang="scss">
@import './Button';
</style>
