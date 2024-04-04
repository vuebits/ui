import { BemItem } from '../models'
import { getClassName } from '../core/helpers'

export function defineBem(name: string, hyphenate = true) {
  function bem({ b, e, m }: BemItem): string[] {
    const pascalToKebabCase = (s: string) =>
      s
        .replace(/([A-Z])([A-Z])/g, '$1-$2')
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/[\s_]+/g, '-')
        .toLowerCase()
    const n = name
    const block: string = b || hyphenate ? pascalToKebabCase(n) : n
    const modifiers: string[] = m
      ? typeof m === 'string'
        ? [m]
        : Array.isArray(m)
          ? m
          : Object.keys(m).filter((key) => m[key])
      : []
    const elementClass = getClassName(block, e)
    const modifiersClasses = modifiers.map((m) => getClassName(block, e, m))
    return [elementClass, ...modifiersClasses]
  }
  return bem
}
