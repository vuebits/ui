<template>
  <Sandbox
    id="example"
    title="Example"
  >
    <Preview style="height: 300px; overflow: auto">
      <div style="height: 1000px">
        <div
          v-for="i in 2"
          :key="i"
        >
          <UiTooltip
            v-for="j in 2"
            :key="j"
            style="width: 50%"
            :bordered="bordered"
            :elevated="elevated"
            :round="round"
            :rounded="rounded"
            :rounded-lg="roundedLg"
            :dark="dark"
            :light="light"
            :color="color"
            :disabled="disabled"
            :clickable="clickable"
            :top="top"
            :right="right"
            :bottom="bottom"
            :left="left"
            :no-wrap="noWrap"
            :show-blend="showBlend"
            :position="position"
          >
            <template #activator="{ on }">
              <UiButton
                block
                hoverable
                bordered
                v-on="on"
              >
                {{ clickable ? 'Click' : 'Hover' }} me to show tooltip
              </UiButton>
            </template>
            <div :style="tooltipStyle">
              <h1>Hello!</h1>
              Tooltip: row {{ i }}, column {{ j }}
            </div>
          </UiTooltip>
        </div>
      </div>
    </Preview>
    <Knobs>
      <KnobBoolean
        v-model="bordered"
        label="Bordered"
      />
      <KnobBoolean
        v-model="elevated"
        label="Elevated"
      />
      <KnobBoolean
        v-model="rounded"
        label="Rounded"
      />
      <KnobBoolean
        v-model="roundedLg"
        label="Rounded lg"
      />
      <KnobBoolean
        v-model="round"
        label="Round"
      />
      <KnobBoolean
        v-model="dark"
        label="Dark"
      />
      <KnobBoolean
        v-model="light"
        label="Light"
      />
      <KnobListItem
        v-model="color"
        :items="colors"
        label="Color"
      />
      <KnobBoolean
        v-model="disabled"
        label="Disabled"
      />
      <KnobBoolean
        v-model="clickable"
        label="Clickable"
      />
      <KnobListItem
        v-model="position"
        :items="positions"
        label="Position"
      />
      <KnobBoolean
        v-model="top"
        label="Top (obsolete)"
      />
      <KnobBoolean
        v-model="right"
        label="Right (obsolete)"
      />
      <KnobBoolean
        v-model="bottom"
        label="Bottom (obsolete)"
      />
      <KnobBoolean
        v-model="left"
        label="Left (obsolete)"
      />
      <KnobBoolean
        v-model="noWrap"
        label="no wrap"
      />
      <KnobBoolean
        v-model="showBlend"
        label="Show blend"
      />
    </Knobs>
  </Sandbox>
</template>

<script>
import { onBeforeUnmount, reactive } from 'vue'
import { Preview, Sandbox, Knobs, KnobListItem, KnobBoolean } from '@/components'
import { UiTooltip, UiButton } from '@vuebits/ui'
import { colors } from '@/helpers/story-params'

export default {
  name: 'TooltipExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    KnobListItem,
    KnobBoolean,
    UiTooltip,
    UiButton,
  },
  setup() {
    const tooltipStyle = reactive({
      padding: '15px',
      width: '200px',
      height: '200px',
    })
    const interval = setInterval(() => {
      tooltipStyle.height = `${200 + Math.round(Math.random() * 200)}px`
      tooltipStyle.width = `${200 + Math.round(Math.random() * 200)}px`
    }, 5000)
    onBeforeUnmount(() => {
      clearInterval(interval)
    })
    return { tooltipStyle }
  },
  data() {
    return {
      bordered: false,
      elevated: false,
      round: false,
      rounded: false,
      roundedLg: false,
      dark: true,
      light: false,
      color: '',
      colors,
      disabled: false,
      clickable: false,
      top: false,
      right: false,
      bottom: true,
      left: false,
      noWrap: false,
      showBlend: false,
      position: null,
      positions: ['bottom', 'right', 'top', 'left'],
    }
  },
}
</script>
