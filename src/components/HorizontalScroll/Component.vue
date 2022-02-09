<script lang="ts">
import { defineComponent, PropType, VNode, h } from 'vue';
import animatedScroll from '../../helpers/animated-scroll';
import { debounce } from '../../helpers/debounce';
import { VIconButton } from '../IconButton';

const widthToBeAbleToClick = 0.6;
const childDisabledClass = 'ls-horizontal-scroll__child--disabled';

export default defineComponent({
  name: 'VHorizontalScroll',
  props: {
    factor: {
      type: Number as PropType<number>,
      default: 1,
    },
    scrollAnimationTime: {
      type: Number as PropType<number>,
      default: 100,
    },
    scrollForTouch: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    disableNotVisible: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    scrollId: {
      type: Number as PropType<number>,
      default: 0,
    },
  },
  data () {
    return {
      isLeftArrowDisabled: true,
      isRightArrowDisabled: false,
    };
  },
  watch: {
    scrollId () {
      this.setRootDynamicClasses();
      this.resetScroll();
    },
  },
  mounted () {
    this.setRootDynamicClasses();
    if (this.disableNotVisible) {
      this.setChildrenClass();
    }
    window.addEventListener('resize', debounce(this.setRootDynamicClasses, 250));
  },
  unmounted () {
    window.removeEventListener('resize', debounce(this.setRootDynamicClasses, 250));
  },
  methods: {
    // set root dynamic classes
    setRootDynamicClasses (): void {
      const container = this.$refs.container as HTMLElement;
      const root = this.$refs.root as HTMLElement;
      if (root) {
        if (container && container.offsetWidth >= container.scrollWidth) {
          root.classList.add('ls-horizontal-scroll--no-arrows');
          root.classList.add('ls-horizontal-scroll--no-scroll');
        } else {
          root.classList.remove('ls-horizontal-scroll--no-arrows');
          root.classList.remove('ls-horizontal-scroll--no-scroll');
        }
      }
    },
    // scroll handling
    scroll (factor: number): void {
      const container = this.$refs.container as HTMLDivElement;
      if (this.$slots.default) {
        const childNumber = this.$slots.default().length;
        const currentPosition: number = container.scrollLeft;
        const jump: number = container.scrollWidth / childNumber * factor;
        animatedScroll.scrollToPositionX(container, currentPosition + jump, this.scrollAnimationTime);
      }
    },
    scrollLeft (): void {
      this.scroll(-this.factor);
    },
    scrollRight (): void {
      this.scroll(this.factor);
    },
    resetScroll (): void {
      const container = this.$refs.container as HTMLDivElement;
      container.scrollLeft = 0;
    },
    // setting class for disable arrows
    setLeftArrowClass (): void {
      const container = this.$refs.container as HTMLDivElement;
      const currentPosition: number = container.scrollLeft;
      (currentPosition > 0) ? this.isLeftArrowDisabled = false : this.isLeftArrowDisabled = true;
    },
    setRightArrowClass (): void {
      const container = this.$refs.container as HTMLDivElement;
      const currentPosition: number = container.scrollLeft;
      const endPosition: number = container.scrollWidth - container.offsetWidth;
      (currentPosition < endPosition) ? this.isRightArrowDisabled = false : this.isRightArrowDisabled = true;
    },
    // setting class for disable children
    setChildrenClass (): void {
      const container = this.$refs.container as HTMLElement;
      const children = this.$refs.child as HTMLElement[];
      if (children) {
        children.forEach((child) => {
          const toFarRight: number = container.scrollLeft + container.offsetWidth - (widthToBeAbleToClick) * child.offsetWidth;
          const toFarLeft: number = container.scrollLeft - (1 - widthToBeAbleToClick) * child.offsetWidth;

          if (child.offsetLeft < toFarLeft || child.offsetLeft > toFarRight) {
            child.classList.add(childDisabledClass);
          } else {
            child.classList.remove(childDisabledClass);
          }
        });
      }
    },
    // update classes after scroll
    updateClasses: debounce(function (this: any) {
      this.setLeftArrowClass();
      this.setRightArrowClass();
      if (this.disableNotVisible) {
        this.setChildrenClass();
      }
    }, 250),
  },
  render (): VNode {
    const items = this.$slots.default ? this.$slots.default() : [];
    const container: VNode = h('div', {
      class: 'ls-horizontal-scroll__container',
      ref: 'container',
      onScroll: this.updateClasses,
    }, items.map((element) => {
      return h('div', {
        class: ['ls-horizontal-scroll__child'],
        ref: 'child',
        refInFor: true,
      }, [element]);
    }));
    const arrowLeft: VNode = h(VIconButton, {
      class: this.$bem({
        e: 'arrow',
        m: {
          left: true,
          disabled: this.isLeftArrowDisabled,
        },
      }),
      ref: 'leftArrow',
      icon: 'chevron-left',
      elevated: true,
      onClick: this.scrollLeft,
    });
    const arrowRight: VNode = h(VIconButton, {
      class: this.$bem({
        e: 'arrow',
        m: {
          right: true,
          disabled: this.isRightArrowDisabled,
        },
      }),
      ref: 'rightArrow',
      icon: 'chevron-right',
      elevated: true,
      onClick: this.scrollRight,
    });

    return h('div', {
      class: this.$bem({
        m: {
          touch: this.scrollForTouch,
        },
      }),
      ref: 'root',
    }, [
      container,
      arrowLeft,
      arrowRight,
    ],
    );
  },
});
</script>

<style lang="scss">
@import './styles';
</style>
