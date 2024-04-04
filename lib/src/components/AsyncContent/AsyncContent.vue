<template>
  <div
    :class="bem({})"
    v-bind="ui.testElName('async-content')"
  >
    <div
      v-if="loading"
      :class="bem({ e: 'loading-wrapper' })"
    >
      <slot name="loader">
        <UiSpinner
          :class="bem({ e: 'loader' })"
          :size="spinnerSize"
        />
      </slot>
      <p :class="bem({ e: 'loading-text' })">
        {{ loadingText }}
      </p>
    </div>
    <div
      v-else-if="error"
      :class="bem({ e: 'error-wrapper' })"
    >
      <UiIcon
        :class="bem({ e: 'error-icon' })"
        size="3x"
        :name="ui.icons.values.error"
      />
      <p :class="bem({ e: 'error-text' })">
        {{ computedErrorText }}
      </p>
      <UiButton
        v-if="reloadable"
        color="primary"
        rounded
        dark
        :class="bem({ e: 'reload-button' })"
        v-bind="ui.testElName('async-content-reload')"
        @click="reload"
      >
        {{ computedReloadText }}
      </UiButton>
    </div>
    <transition name="slide">
      <div v-if="!loading && !error">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { UiSpinner } from '../Spinner'
import { UiIcon } from '../Icon'
import { UiButton } from '../Button'
import { useUi } from '../../index'
import { defineBem } from '../../helpers/bem'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    loading: boolean
    spinnerSize?:
      | 'lg'
      | 'xs'
      | 'sm'
      | '1x'
      | '2x'
      | '3x'
      | '4x'
      | '5x'
      | '6x'
      | '7x'
      | '8x'
      | '9x'
      | '10x'
      | null
    loadingText?: string
    error?: boolean
    errorText?: string
    reloadable?: boolean
    reloadText?: string
  }>(),
  {
    spinnerSize: '2x',
    loadingText: '',
    error: false,
    errorText: '',
    reloadable: false,
    reloadText: '',
  },
)

const emit = defineEmits<{
  reload: []
}>()

const ui = useUi()
const bem = defineBem('ui-async-content')

const computedErrorText = computed(() => props.errorText || ui.t().asyncContent.errorText)
const computedReloadText = computed(() => props.reloadText || ui.t().asyncContent.reloadText)

const reload = () => {
  emit('reload')
}
</script>

<style lang="scss">
@import './AsyncContent';
</style>
