<template>
  <Sandbox
    id="example"
    title="Example"
  >
    <Preview>
      <UiNotificator
        :items="items"
        :round="round"
        :rounded="rounded"
        :rounded-lg="roundedLg"
        :size="size"
        :width="width"
        @remove-notification="removeNotification"
      />
      <UiButton
        class="has-margin-top-lg"
        color="primary"
        rounded
        dark
        @click="addNotification"
      >
        Add notification
      </UiButton>
    </Preview>
    <template #controls>
      <Knobs>
        <KnobBoolean
          v-model="rounded"
          label="Rounded"
        />
        <KnobBoolean
          v-model="roundedLg"
          label="Rounded large"
        />
        <KnobBoolean
          v-model="round"
          label="Round"
        />
        <KnobListItem
          v-model="size"
          :items="sizes"
          label="Size"
        />
        <KnobNumber
          v-model="width"
          label="Width"
        />
      </Knobs>
    </template>
  </Sandbox>
</template>

<script>
import { Preview, Sandbox, Knobs, KnobListItem, KnobBoolean, KnobNumber } from '@/components'
import { UiNotificator, UiButton } from '@vuebits/ui'
import { sizes } from '@/helpers/story-params'

export default {
  name: 'NotificatorExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    KnobListItem,
    KnobBoolean,
    KnobNumber,
    UiNotificator,
    UiButton,
  },
  data() {
    return {
      round: false,
      rounded: true,
      roundedLg: false,
      width: null,
      size: 'sm',
      sizes,
      types: ['default', 'success', 'info', 'warning', 'error'],
      items: [
        {
          id: '1',
          message: 'Success!',
          type: 'success',
        },
        {
          id: '2',
          message: 'Something went wrong!',
          type: 'error',
        },
        {
          id: '3',
          message: 'Are you sure?',
          type: 'warning',
        },
        {
          id: '4',
          message: 'Network error!',
          type: 'error',
        },
      ],
      id: 4,
    }
  },
  methods: {
    removeNotification(notification) {
      this.items = this.items.filter((i) => i.id !== notification.id)
    },
    addNotification() {
      this.id++
      this.items.push({
        id: this.id,
        message: 'Lorem ipsum...',
        type: this.types[Math.floor(Math.random() * this.types.length)],
      })
    },
  },
}
</script>

<style lang="scss"></style>
