<template>
  <div
    :class="classes"
    :style="style"
    data-test="notification"
  >
    <div :class="$bem({e: 'content'})">
      <span v-html="message" />
    </div>
    <DmIconButton
      icon="times"
      rounded
      :class="$bem({e: 'close'})"
      @click="remove"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { DmIconButton } from '@/components';
import { CssClass } from '@/helpers/css-classes';
import { NotificationTypeName, NotificationType } from './models';

export default defineComponent({
  name: 'VNotification',
  components: {
    DmIconButton
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
    rounded: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  },
  emits: ['remove'],
  computed: {
    style (): any {
      return this.width ? { width: `${this.width}px` } : {};
    },
    classes (): CssClass[] {
      return [
        ...this.$bem({
          m: {
            [this.size]: true,
            rounded: this.rounded,
            [this.type]: true
          }
        })
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
