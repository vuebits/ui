<template>
  <div
    :class="$bem({})"
    v-bind="$ui.testElName('tab-switch')"
  >
    <div
      v-for="(tab, index) in tabs"
      :key="index"
      :button-selector="`${rand}-${index}`"
      class="tab-item"
      :class="$bem({e: 'item', m: isActive(index) ? 'active' : '' })"
      v-bind="$ui.testElName('tab-switch-item')"
      @click="selectTab(index)"
    >
      <p>{{ tab.label }}</p>
    </div>
    <div
      :class="$bem({e: 'slider'})"
      :slider-selector="rand"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, PropType } from 'vue';

type Tab = {
  label: string;
  value: string;
}

export default defineComponent({
  name: 'VTabSwitch',
  props: {
    modelValue: {
      type: String as PropType<string>,
      default: '',
    },
    tabs: {
      type: Array as PropType<Array<Tab>>,
      required: true,
    },
  },
  emits: [
    'update:modelValue',
    'select',
    'change',
  ],
  data () {
    return {
      activeTab: 0,
      rand: '',
      sliderDOM: null as null | HTMLDivElement,
    };
  },
  watch: {
    value () {
      this.findActiveTab();
    },
    tabs: {
      handler () {
        this.setActiveTab(this.activeTab);
      },
      deep: true,
    },
  },
  created () {
    this.init();
    window.addEventListener('resize', this.resizeListener, true);
  },
  beforeUnmount () {
    window.removeEventListener('resize', this.resizeListener, true);
  },
  methods: {

    init () {
      this.rand = this.generateRand(5);

      nextTick(() => {
        this.sliderDOM = document.querySelector(`[slider-selector="${this.rand}"]`);
        this.findActiveTab();
      });
    },

    findActiveTab () {
      const tabIndex = this.tabs.findIndex(tab => tab.value === this.modelValue);

      if (tabIndex > -1) {
        this.setActiveTab(tabIndex);
        return;
      }

      this.setActiveTab(0);
    },

    setActiveTab (index: number) {
      this.activeTab = index;
      this.emitValue(index);
      nextTick(() => {
        this.setSliderPossition(index);
      });
    },
    selectTab (index: number): void {
      this.setActiveTab(index);
      this.$emit('select', this.tabs[index]);
    },
    setSliderPossition (index: number) {
      const button = document.querySelector(`[button-selector="${this.rand}-${index}"]`) as HTMLDivElement;
      if (!button) return;

      const btnWidth = button.offsetWidth;
      const btnLeft = button.offsetLeft;

      if (!this.sliderDOM) return;
      this.sliderDOM.style.width = `${btnWidth}px`;
      this.sliderDOM.style.left = `${btnLeft}px`;
    },

    isActive (index: number) {
      return this.activeTab === index;
    },

    generateRand (length: number) {
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;

      for (let i = 0; i < length; i += 1) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }

      return result;
    },

    emitValue (index: number) {
      this.$emit('update:modelValue', this.tabs[index].value);
      this.$emit('change', this.tabs[index]);
    },

    resizeListener () {
      this.tabs.forEach((_, index) => {
        this.findActiveTab();
        this.setSliderPossition(index);
      });
    },

  },
});
</script>

<style lang="scss">
@import './styles';
</style>
