<template>
  <Sandbox
    id="example"
    title="Example"
  >
    <Preview>
      <div
        v-for="i in 5"
        :key="i"
      >
        <VTooltip
          v-for="j in 5"
          :key="j"
          style="width: 20%"
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
        >
          <template #activator>
            <VButton
              block
              hoverable
              bordered
            >
              {{ clickable ? 'Click' : 'Hover' }} me to show tooltip
            </VButton>
          </template>
          <div style="width: 200px;">
            <h1>Hello!</h1>
            Tooltip: row {{ i }}, column {{ j }}
          </div>
        </VTooltip>
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
      <KnobBoolean
        v-model="top"
        label="top"
      />
      <KnobBoolean
        v-model="right"
        label="right"
      />
      <KnobBoolean
        v-model="bottom"
        label="bottom"
      />
      <KnobBoolean
        v-model="left"
        label="left"
      />
      <KnobBoolean
        v-model="noWrap"
        label="no wrap"
      />
    </Knobs>
  </Sandbox>
</template>

<script>
import {
  Preview,
  Sandbox,
  Knobs,
  KnobListItem,
  KnobBoolean
} from '@/docs/components';
import {
  VTooltip,
  VButton
} from '@/components';
import { colors } from '@/docs/helpers/story-params';

export default {
  name: 'TooltipExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    KnobListItem,
    KnobBoolean,
    VTooltip,
    VButton
  },
  data () {
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
      bottom: false,
      left: false,
      noWrap: false
    };
  }
};
</script>
