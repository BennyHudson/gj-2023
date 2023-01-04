export interface MenuItems {
  id: string
  uri: string
  label: string
  children?: {
    id: string
    uri: string
    label: string
  }[]
}

export interface RawMenu {
  key: string
  label: string
  uri: string
  parentId?: string
}