export interface AutocompleteItem {
  key?: string | number
  text?: string
  disabled?: boolean
  header?: string
  divider?: boolean
  metadata?: any
}
export interface AutocompleteSelectedItem {
  key: string | number
  text: string
  disabled?: boolean
  header?: string
  divider?: boolean
  metadata?: any
}
