export type SelectItemKey = string | number | null

export interface SelectItem {
  key: SelectItemKey
  text: string
  disabled?: boolean
  metadata?: any
}

export type SelectValue = SelectItemKey | SelectItemKey[]
