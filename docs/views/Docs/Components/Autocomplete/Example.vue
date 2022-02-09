<template>
  <Sandbox
    id="example"
    title="Example"
  >
    <Preview
      height="200px"
    >
      <VAutocomplete
        v-model="value"
        :items="items"
        :bordered="bordered"
        :round="round"
        :rounded="rounded"
        :rounded-lg="roundedLg"
        :dark="dark"
        :light="light"
        :disabled="disabled"
        :left-icon="leftIcon !== 'none' ? leftIcon : null"
        :right-icon="rightIcon !== 'none' ? rightIcon : null"
        :error="error"
        :textarea="textarea"
        :multiple="multiple"
        :depressed="depressed"
        :placeholder="placeholder"
        :size="size"
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
          v-model="leftIcon"
          :items="icons"
          label="Left icon"
        />
        <KnobListItem
          v-model="rightIcon"
          :items="icons"
          label="Right icon"
        />
        <KnobListItem
          v-model="size"
          :items="sizes"
          label="Size"
        />
        <KnobBoolean
          v-model="error"
          label="Error"
        />
        <KnobBoolean
          v-model="textarea"
          label="Textarea"
        />
        <KnobBoolean
          v-model="multiple"
          label="Multiple"
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
import {
  Preview,
  Sandbox,
  Knobs,
  KnobListItem,
  KnobBoolean,
  KnobString,
} from '@/components';
import {
  VAutocomplete,
} from '@vuebits/ui';
import { icons, sizes } from '@/helpers/story-params';

export default {
  name: 'AutocompleteExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    KnobListItem,
    KnobBoolean,
    KnobString,
    VAutocomplete,
  },
  data () {
    return {
      items: [
        {
          header: 'Header 1',
        },
        {
          key: 1,
          text: 'Item 1',
        },
        {
          key: 2,
          text: 'Item 2',
        },
        {
          header: 'Header 2',
        },
        {
          key: 3,
          text: 'Item 3',
        },
      ],
      value: null,
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
      error: false,
      textarea: false,
      multiple: false,
      depressed: true,
      placeholder: 'Search',
      sizes,
      size: 'md',
    };
  },
};
</script>
