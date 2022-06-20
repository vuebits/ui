<template>
  <div :class="bem({})">
    <h3 :class="bem({e: 'name'})">
      {{ component.name }}
    </h3>
    <div :class="bem({e: 'props-wrapper'})">
      <h4 :class="bem({e: 'props-header'})">
        Props
      </h4>
      <VTable
        :headers="propsHeaders"
        :items="propsItems"
        bordered
        padding="sm"
        fixed-header
        :class="bem({e: 'table'})"
      />
    </div>
    <div :class="bem({e: 'emits-wrapper'})">
      <h4 :class="bem({e: 'emits-header'})">
        Emits
      </h4>
      <VTable
        :headers="emitsHeaders"
        :items="emitsItems"
        bordered
        padding="sm"
        fixed-header
        :class="bem({e: 'table'})"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue';
import { VTable, createBem } from '@vuebits/ui';

type Props = {
  component: any;
}

const props = withDefaults(defineProps<Props>(), {
  component: null,
});

const {
  component,
} = toRefs(props);

const propsHeaders = [
  {
    label: 'Name',
    for: 'name',
  },
  {
    label: 'Default',
    for: 'default',
  },
];
const emitsHeaders = [
  {
    label: 'Event',
    for: 'event',
  },
  {
    label: 'Validation',
    for: 'validation',
  },
];

const bem = createBem('component-api');

const propsItems = computed(() => {
  const props = component.value.props || {};
  return Object.keys(props).map(key => {
    return {
      name: key,
      default: props[key].default,
    };
  });
});

const emitsItems = computed(() => {
  const emits: string[] = component.value.emits || [];
  return emits.map(e => ({
    event: e,
    validation: '',
  }));
});

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
