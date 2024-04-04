<template>
  <div :class="bem({})">
    <h3 :class="bem({ e: 'name' })">
      {{ component.name }}
    </h3>
    <div :class="bem({ e: 'props-wrapper' })">
      <h4 :class="bem({ e: 'props-header' })">Props</h4>
      <UiTable
        :headers="propsHeaders"
        :items="propsItems"
        bordered
        padding="sm"
        fixed-header
        :class="bem({ e: 'table' })"
      />
    </div>
    <div :class="bem({ e: 'emits-wrapper' })">
      <h4 :class="bem({ e: 'emits-header' })">Emits</h4>
      <UiTable
        :headers="emitsHeaders"
        :items="emitsItems"
        bordered
        padding="sm"
        fixed-header
        :class="bem({ e: 'table' })"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { UiTable, defineBem } from '@vuebits/ui'

type Props = {
  component: any
}

const props = withDefaults(defineProps<Props>(), {
  component: null,
})

const { component } = toRefs(props)

const propsHeaders = [
  {
    label: 'Name',
    for: 'name',
  },
  {
    label: 'Type',
    for: 'type',
  },
  {
    label: 'Required',
    for: 'required',
  },
  {
    label: 'Default',
    for: 'default',
  },
]
const emitsHeaders = [
  {
    label: 'Event name',
    for: 'name',
  },
]

const bem = defineBem('ComponentApi')

const propsItems = computed(() => {
  const props = component.value.props || {}
  return Object.keys(props).map((key) => {
    const type = props[key].type
    const getTypeString = (t: any) => (typeof t === 'function' ? t.name : JSON.stringify(t))
    const typeString = Array.isArray(type)
      ? type.map((t: any) => getTypeString(t)).join(', ')
      : getTypeString(type)
    return {
      name: key,
      type: typeString,
      default: JSON.stringify(props[key].default),
      required: props[key].required ?? false,
    }
  })
})

const emitsItems = computed(() => {
  const emits: string[] = component.value.emits || []
  return emits.map((e) => ({
    name: e,
  }))
})
</script>

<style lang="scss">
.component-api {
  margin: 4 * $sp;
  overflow-y: auto;

  &__name {
    margin-bottom: 4 * $sp;
  }

  &__props-wrapper {
    padding: 2 * $sp;
    margin-bottom: 3 * $sp;
  }

  &__props-header {
    margin-bottom: 3 * $sp;
  }

  &__emits-wrapper {
    padding: 2 * $sp;
    margin-bottom: 3 * $sp;
  }

  &__emits-header {
    margin-bottom: 3 * $sp;
  }

  &__table {
    max-height: 30rem;
  }
}
</style>
