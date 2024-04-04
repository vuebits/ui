<template>
  <div
    :class="classes"
    :style="style"
    v-bind="$ui.testElName('notification')"
  >
    <div
      :class="$bem({ e: 'content' })"
      v-bind="$ui.testElName('notification-content')"
    >
      <slot>
        <span v-html="message" />
      </slot>
    </div>
    <div :class="$bem({ e: 'close-wrapper' })">
      <UiIconButton
        :icon="$ui.icons.values.close"
        rounded
        hoverable
        :class="$bem({ e: 'close' })"
        v-bind="$ui.testElName('notification-close')"
        @click="remove"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from 'vue'
import { UiIconButton } from '../../components'
import { CssClass } from '../../helpers/css-classes'
import { roundedProps, useRounded } from '../../composables'
import { NotificationTypeName, NotificationType } from './models'

export default defineComponent({
  name: 'UiNotification',
  components: {
    UiIconButton,
  },
  props: {
    type: {
      type: String as PropType<NotificationTypeName>,
      default: NotificationType.DEFAULT,
    },
    message: {
      type: String as PropType<string>,
      required: true,
    },
    size: {
      type: String as PropType<'sm' | 'md' | 'lg'>,
      default: 'md',
      validator: (val: string) => {
        return ['sm', 'md', 'lg'].includes(val)
      },
    },
    width: {
      type: Number as PropType<number | null>,
      default: null,
    },
    ...roundedProps,
  },
  emits: ['remove'],
  setup(props) {
    const { rounded, roundedLg, round } = toRefs(props)

    return {
      roundedClass: useRounded(rounded, roundedLg, round),
    }
  },
  computed: {
    style(): any {
      return this.width ? { width: `${this.width}px` } : {}
    },
    classes(): CssClass[] {
      return [
        ...this.$bem({
          m: {
            [this.size]: true,
            [this.type]: true,
          },
        }),
        this.roundedClass,
      ]
    },
  },
  methods: {
    remove(): void {
      this.$emit('remove')
    },
  },
})
</script>

<style lang="scss">
@import './styles';
</style>
