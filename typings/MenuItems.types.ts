export interface MenuItems {
  id: string
  uri: string
  label: string
  children?: MenuItems[]
}

export interface RawMenu {
  key: string
  label: string
  uri: string
  parentId?: string
}
