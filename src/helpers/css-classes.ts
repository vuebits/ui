export const prefix = 'v--';

export type CssClass =
  string |
  null |
  {
    [key in string]: boolean
  } |
  (
    string |
    {
      [key in string]: boolean
    }
  )[];

export const className = (name: string, value: string | null): string | null => value ? `${prefix}${name}-${value}` : null;

export const colorClass = (color: string | null) => className('color', color);
export const bgColorClass = (color: string | null) => className('bg-color', color);
export const hoverBgColorClass = (color: string | null) => className('hover-bg-color', color);
export const borderColorClass = (color: string | null) => className('border-color', color);
export const fillColorClass = (color: string | null) => className('fill-color', color);
export const elevationClass = `${prefix}elevated`;
export const hoverableClass = `${prefix}hoverable`;
