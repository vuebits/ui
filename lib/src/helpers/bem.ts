export type BemModifiers = string | string[] | { [key in string]: boolean }
export interface BemItem {
  b?: string;
  e?: string;
  m?: BemModifiers;
}

export const getClassName = (b: string, e?: string, m?: string): string => {
  return `${b}${e ? `__${e}` : ''}${m ? `--${m}` : ''}`;
};

export const getModifiers = (m?: BemModifiers): string[] => {
  if (!m) return [];
  if (typeof m === 'string') return [m];
  if (Array.isArray(m)) return m;
  return Object.keys(m).filter((key) => m[key]);
};

export function createBem (name: string) {
  function bem (bemItem?: BemItem): string[] {
    const { b, e, m } = bemItem ?? {};
    const block = b ?? name;
    const modifiers = getModifiers(m);
    const elementClass = getClassName(block, e);
    const modifiersClasses = modifiers.map((m) => getClassName(block, e, m));
    return [
      elementClass,
      ...modifiersClasses,
    ];
  }
  return bem;
}
