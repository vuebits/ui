export const debounce: (...params: any[]) => any = function (func: (...params: any[]) => any, wait: number, immediate: boolean) {
  let timeout: number | undefined;
  return function (this: any, ...args: any) {
    const later = () => {
      timeout = undefined;
      if (!immediate) func.apply(this, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(this, args);
  };
};
