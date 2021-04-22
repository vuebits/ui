<template>
  <div
    v-if="modelValue"
    :class="$bem({})"
  >
    <slot name="top" />
    <div :class="$bem({e: 'middle'})">
      <slot name="left" />
      <div
        v-click-outside="onClickOutside"
        :class="cardClasses"
        :style="cardStyle"
      >
        <slot />
      </div>
      <slot name="right" />
    </div>
    <slot name="bottom" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from 'vue';
import { CssClass } from '@/helpers/css-classes';
import {
  borderedProps,
  roundedProps,
  useBordered,
  useRounded
} from '@/composition-functions';
import ClickOutside from '@/directives/click-outside';

export default defineComponent({
  name: 'VModal',
  directives: { ClickOutside },
  props: {
    modelValue: {
      type: Boolean as PropType<boolean>,
      required: true
    },
    persistent: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    size: {
      type: String as PropType<'sm' | 'md' | 'lg' | null>,
      default: null,
      validator: (val: string) => {
        return !val || [
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
    ...borderedProps,
    ...roundedProps
  },
  emits: ['update:modelValue'],
  setup (props) {
    const {
      bordered,
      rounded,
      roundedLg,
      round
    } = toRefs(props);

    return {
      borderedClass: useBordered(bordered),
      roundedClass: useRounded(rounded, roundedLg, round)
    };
  },
  data () {
    return {
      scrollPosition: 0
    };
  },
  computed: {
    cardStyle (): any {
      return this.width ? { width: `${this.width}px` } : {};
    },
    cardClasses (): CssClass[] {
      const mods = this.size ? [this.size] : [];
      return [
        ...this.$bem({ e: 'card', m: mods }),
        this.roundedClass,
        this.borderedClass
      ];
    }
  },
  watch: {
    modelValue (val) {
      this.changeValueHandler(val);
    }
  },
  created (): void {
    if (this.modelValue) this.openHandler();
  },
  unmounted (): void {
    this.enableScrolling();
  },
  methods: {
    enableScrolling (): void {
      document.documentElement.classList.remove('is-scrolling-disabled');
      document.body.classList.remove('is-scrolling-disabled');
      document.body.style.top = 'unset';
      window.scrollTo(0, this.scrollPosition);
    },
    disableScrolling (): void {
      this.scrollPosition = window.pageYOffset;
      document.documentElement.classList.add('is-scrolling-disabled');
      document.body.classList.add('is-scrolling-disabled');
      document.body.style.top = `-${this.scrollPosition}px`;
    },
    openHandler (): void {
      this.disableScrolling();
    },
    closeHandler (): void {
      this.enableScrolling();
    },
    changeValueHandler (val: boolean): void {
      if (val) {
        this.openHandler();
      } else {
        this.closeHandler();
      }
    },
    close (): void {
      this.$emit('update:modelValue', false);
    },
    onClickOutside (): void {
      if (!this.persistent) {
        this.close();
      }
    }
  }
});
</script>

<style lang="scss">
@import './styles';
</style>
