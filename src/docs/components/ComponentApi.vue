<template>
  <div :class="$bem({})">
    <h3 :class="$bem({e: 'name'})">
      {{ component.name }}
    </h3>
    <VTile
      ref="tile"
      bordered
      rounded
      :class="$bem({e: 'content'})"
    >
      <div :class="$bem({e: 'props-wrapper'})">
        <h4 :class="$bem({e: 'props-header'})">
          Props
        </h4>
        <VTable
          :headers="propsHeaders"
          :items="propsItems"
        />
      </div>
      <div :class="$bem({e: 'emits-wrapper'})">
        <h4 :class="$bem({e: 'emits-header'})">
          Emits
        </h4>
        <VTable
          :headers="emitsHeaders"
          :items="emitsItems"
        />
      </div>
    </VTile>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, DefineComponent } from 'vue';
import {
  VTile,
  VTable
} from '@/components';

export default defineComponent({
  name: 'ComponentApi',
  components: {
    VTile,
    VTable
  },
  props: {
    component: {
      type: Object as PropType<DefineComponent>,
      required: true
    }
  },
  data () {
    return {
      propsHeaders: [
        {
          text: 'Name',
          name: 'name'
        },
        {
          text: 'Default',
          name: 'default'
        }
      ],
      emitsHeaders: [
        {
          text: 'Event',
          name: 'event'
        },
        {
          text: 'Validation',
          name: 'validation'
        }
      ]
    };
  },
  computed: {
    propsItems (): {name: string; default: any}[] {
      const props = this.component.props || {};
      return Object.keys(props).map(key => {
        return {
          name: key,
          default: props[key].default
        };
      });
    },
    emitsItems (): {event: string; validation: any}[] {
      const emits: {[key in string]: any} = (this.component as any).__emits;
      return emits ? Object.keys(emits).map(key => {
        return {
          event: key,
          validation: emits[key]
        };
      }) : [];
    }
  }
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
}
</style>
