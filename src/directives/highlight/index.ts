import { Directive } from 'vue';

let originalContent: any;
const textColorDefault = '#fff';
const bgColorDefault = '#009688';
const paddingDefault = '0px 0px';

function selectPattern (word: string|string[], liveHighlighting = true): string {
  let result = '';
  const explodedWord = Array.isArray(word) ? word.map(w => w).join('|') : word;
  if (!liveHighlighting) {
    result = '\\b(' + explodedWord + ')\\b';
  } else {
    result = '(' + explodedWord + ')';
  }
  return result;
}

function testColor (color: string): boolean {
  let result = false;
  const isAColor = /(^#[0-9a-zA-F]{8}$)|(^#[0-9a-zA-F]{6}$)|(^#[0-a-z9A-F]{4}$)|(^#[0-9a-zA-F]{3}$)/i.test(color);
  const isAString = /^[a-zA-Z]+$/.test(color);
  if (isAColor || isAString) {
    result = true;
  }
  return result;
}

function testTextColor (color: string = textColorDefault): string {
  let result = textColorDefault;
  if (testColor(color)) {
    result = color;
  }
  return result;
}

function testBgColor (color: string = bgColorDefault): string {
  let result = bgColorDefault;
  if (testColor(color)) {
    result = color;
  }
  return result;
}

function testPadding (padding: string): string {
  let result = paddingDefault;
  const isAValidValue = /^(\d+(cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%)\s?){1,4}$/i.test(padding);
  if (isAValidValue) {
    result = padding;
  }
  return result;
}

function highlight (
  content: string,
  word: string|string[],
  patternSelected: string,
  color: string,
  bgColor: string,
  padding: string
): string {
  const spanStart =
    '<span style=\'padding:' + padding + '; background-color:' + bgColor + '; color:' + color + ';\'>';
  const spanEnd = '</span>';
  let result = content;
  if (word !== '') {
    const regex = new RegExp(patternSelected, 'gi');
    result = content.replace(regex, spanStart + '$&' + spanEnd);
  }
  return result;
}

const vueHighlighter: Directive = {
  mounted (el, binding) {
    originalContent = el.innerHTML;
    let pattern = '';
    let word = '';
    let color = textColorDefault;
    let bgColor = bgColorDefault;
    let padding = paddingDefault;
    if (binding.value.word !== undefined) {
      word = binding.value.word;
    }
    pattern = selectPattern(word, binding.value.live);
    if (binding.value.style !== undefined) {
      color = testTextColor(binding.value.style.color);
      bgColor = testBgColor(binding.value.style.bgColor);
      padding = testPadding(binding.value.style.padding);
    }
    el.innerHTML = highlight(originalContent, word, pattern, color, bgColor, padding);
  },
  updated (el, binding, vnode) {
    let pattern = '';
    let color = textColorDefault;
    let bgColor = bgColorDefault;
    let padding = paddingDefault;
    if (binding.value.style !== undefined) {
      color = testTextColor(binding.value.style.color);
      bgColor = testBgColor(binding.value.style.bgColor);
      padding = testPadding(binding.value.style.padding);
    }
    if (binding.value.live) {
      pattern = selectPattern(binding.value.word, binding.value.live);
      el.innerHTML = highlight(vnode.children as string, binding.value.word, pattern, color, bgColor, padding);
    } else {
      pattern = selectPattern(binding.value.word);
      el.innerHTML = highlight(originalContent, binding.value.word, pattern, color, bgColor, padding);
    }
  },
  unmounted (el) {
    el.innerHTML = originalContent;
  }
};

export default vueHighlighter
;
