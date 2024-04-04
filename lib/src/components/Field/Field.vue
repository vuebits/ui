<template>
  <div :class="bem({})">
    <label
      :for="id"
      :class="bem({ e: 'label' })"
    >
      <slot name="label">
        {{ label }}
      </slot>
    </label>
    <div
      :id="id"
      :class="bem({ e: 'field' })"
    >
      <slot />
    </div>
    <div
      v-if="!noHint"
      :class="hintClasses"
      v-bind="ui.testElName(error ? 'field-error' : 'field-hint')"
    >
      {{ hintText }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CssClass } from '../../helpers/css-classes'
import { computed } from 'vue'
import { defineBem, useUi } from '../../index'
const bem = defineBem('ui-field')
const ui = useUi()

const props = withDefaults(
  defineProps<{
    id: string
    label?: string | null
    error?: string | null
    hint?: string | null
    noHint?: boolean
  }>(),
  {
    label: null,
    error: null,
    hint: null,
    noHint: false,
  },
)
const hintText = computed((): string => props.error || props.hint || '')
const hintClasses = computed((): CssClass[] => [
  ...bem({
    e: 'hint',
    m: {
      error: !!props.error,
    },
  }),
])
</script>

<style lang="scss">
@import './Field';
</style>
