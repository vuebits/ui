<template>
  <Sandbox
    id="example"
    title="Example"
  >
    <Preview>
      <UiTextarea
        ref="textarea"
        v-model="text"
        :bordered="bordered"
        :round="round"
        :rounded="rounded"
        :rounded-lg="roundedLg"
        :size="size"
        :dark="dark"
        :light="light"
        :disabled="disabled"
        :left-icon="leftIcon !== 'none' ? leftIcon : null"
        :right-icon="rightIcon !== 'none' ? rightIcon : null"
        right-icon-clickable
        :error="error"
        :type="type"
        :readonly="readonly"
        :depressed="depressed"
        :label="label"
        :placeholder="placeholder"
        @enter-no-shift="submit"
      />
    </Preview>
    <template #controls>
      <Knobs>
        <KnobBoolean
          v-model="dark"
          label="Dark"
        />
        <KnobBoolean
          v-model="light"
          label="Light"
        />
        <KnobBoolean
          v-model="bordered"
          label="Bordered"
        />
        <KnobBoolean
          v-model="depressed"
          label="Depressed"
        />
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
        <KnobBoolean
          v-model="disabled"
          label="Disabled"
        />
        <KnobListItem
          v-model="size"
          :items="sizes"
          label="Size"
        />
        <KnobListItem
          v-model="leftIcon"
          :items="icons"
          label="Left icon"
        />
        <KnobListItem
          v-model="rightIcon"
          :items="icons"
          label="Right icon"
        />
        <KnobBoolean
          v-model="error"
          label="Error"
        />
        <KnobBoolean
          v-model="readonly"
          label="Readonly"
        />
        <KnobString
          v-model="label"
          label="Label"
        />
        <KnobString
          v-model="placeholder"
          label="Placeholder"
        />
      </Knobs>
    </template>
  </Sandbox>
</template>

<script>
import { Preview, Sandbox, Knobs, KnobListItem, KnobBoolean, KnobString } from '@/components'
import { UiTextarea } from '@vuebits/ui'
import { icons, sizes } from '@/helpers/story-params'

export default {
  name: 'TextareaExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    KnobListItem,
    KnobBoolean,
    KnobString,
    UiTextarea,
  },
  data() {
    return {
      icons,
      text: 'some text...',
      bordered: false,
      round: true,
      rounded: false,
      roundedLg: false,
      dark: false,
      light: true,
      disabled: false,
      leftIcon: 'none',
      rightIcon: 'none',
      label: 'Some label',
      error: false,
      placeholder: '',
      depressed: true,
      readonly: false,
      sizes,
      size: 'md',
    }
  },
  mounted() {
    this.$refs.textarea.focus()
  },
  methods: {
    submit(e) {
      e.preventDefault()
      console.log('submit')
    },
  },
}
</script>
