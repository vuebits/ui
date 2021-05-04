<template>
  <div
    :class="classes"
    :style="style"
    data-test="notification"
  >
    <div :class="$bem({e: 'content'})">
      <slot>
        <span v-html="message" />
      </slot>
    </div>
    <div :class="$bem({e: 'close-wrapper'})">
      <VIconButton
        icon="times"
        rounded
        hoverable
        :class="$bem({e: 'close'})"
        @click="remove"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from 'vue';
import { VIconButton } from '@/components';
import { CssClass } from '@/helpers/css-classes';
import {
  roundedProps,
  useRounded
} from '@/composition-functions';
import { NotificationTypeName, NotificationType } from './models';

export default defineComponent({
  name: 'VNotification',
  components: {
    VIconButton
  },
  props: {
    type: {
      type: String as PropType<NotificationTypeName>,
      default: NotificationType.DEFAULT
    },
    message: {
      type: String as PropType<string>,
      required: true
    },
    size: {
      type: String as PropType<'sm' | 'md' | 'lg'>,
      default: 'md',
      validator: (val: string) => {
        return [
          'sm',
          'md',
          'lg'
        ].includes(val);
      }
    },
    width: {
      type: Number as PropType<number | null>,
      default: null
    },
    ...roundedProps
  },
  emits: ['remove'],
  setup (props) {
    const {
      rounded,
      roundedLg,
      round
    } = toRefs(props);

    return {
      roundedClass: useRounded(rounded, roundedLg, round)
    };
  },
  computed: {
    style (): any {
      return this.width ? { width: `${this.width}px` } : {};
    },
    classes (): CssClass[] {
      return [
        ...this.$bem({
          m: {
            [this.size]: true,
            [this.type]: true
          }
        }),
        this.roundedClass
      ];
    }
  },
  methods: {
    remove (): void {
      this.$emit('remove');
    }
  }
});
</script>

<style lang="scss">
@import './styles';
</style>
