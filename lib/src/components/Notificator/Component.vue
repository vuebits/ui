<template>
  <div
    :class="$bem({})"
    v-bind="$ui.testElName('notificator')"
  >
    <UiNotification
      v-for="item in items"
      :key="item.id"
      :message="item.message"
      :type="item.type"
      :size="size"
      :width="width"
      :rounded="rounded"
      :class="$bem({ e: 'item' })"
      @remove="removeNotification(item)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { UiNotification } from '../Notification'
import { NotificationTypeName } from '../Notification/models'

export interface Notification {
  id: number
  message: string
  type?: NotificationTypeName
}

export default defineComponent({
  name: 'UiNotificator',
  components: {
    UiNotification,
  },
  props: {
    items: {
      type: Array as PropType<Notification[]>,
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
    rounded: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  emits: ['remove-notification'],
  methods: {
    removeNotification(item: Notification): void {
      this.$emit('remove-notification', item)
    },
  },
})
</script>

<style lang="scss">
@import './styles';
</style>
