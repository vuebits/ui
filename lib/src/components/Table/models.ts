export interface TableHeader {
  label: string
  for: string
  width?: number
  align?: 'left' | 'right' | 'center'
  strong?: boolean
  color?: (value: any, item: any) => string
}

export type TableItem = { [key in string]: any }
