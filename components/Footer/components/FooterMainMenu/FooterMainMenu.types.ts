export interface FooterMainMenuProps {
  menu: {
    label: string
    uri: string
    children?: {
      label: string
      uri: string
    }[]
  }[]
}
