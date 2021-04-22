import { Directive } from 'vue';
import { debounce } from '@/helpers/debounce';

const isElementEnd = (element: HTMLElement, tolerance: number): boolean => {
  return (element.scrollTop + element.offsetHeight + tolerance > element.scrollHeight);
};

const getTolerance = (tolerance: string | undefined): number => {
  return tolerance && parseInt(tolerance) ? parseInt(tolerance) : 100;
};

let handleScroll = () => { /* */ };

const directive: Directive = {
  mounted (el, binding) {
    if (typeof binding.value === 'function') {
      binding.value(isElementEnd(el, getTolerance(binding.arg)));
      handleScroll = debounce(() => {
        binding.value(isElementEnd(el, getTolerance(binding.arg)));
      }, 100);
      el.addEventListener('scroll', handleScroll);
    }
  },
  updated (el, binding) {
    if (typeof binding.value === 'function') {
      binding.value(isElementEnd(el, getTolerance(binding.arg)));
    }
  },
  unmounted (el) {
    el.removeEventListener('scroll', handleScroll);
  }
};

export default directive;
