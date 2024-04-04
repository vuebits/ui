export type CssClass =
  | string
  | null
  | {
      [key in string]: boolean
    }
  | (
      | string
      | {
          [key in string]: boolean
        }
    )[]

export const className = (name: string, value: string | null): string | null =>
  value ? `has-${name}-${value}` : null

export const colorClass = (color: string | null) => className('color', color)
export const bgColorClass = (color: string | null) => className('bg-color', color)
export const hoverColorClass = (color: string | null) => className('hover-color', color)
export const hoverBgColorClass = (color: string | null) => className('hover-bg-color', color)
export const borderColorClass = (color: string | null) => className('border-color', color)
export const gradientClass = (color: string | null) => className('gradient', color)
export const elevationClass = 'is-elevated'
export const hoverableClass = 'is-hoverable'
