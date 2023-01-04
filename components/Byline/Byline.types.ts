export interface BylineProps {
  author: string
  photographer?: string
  additionalBylines?: {
    title: string
    content: string
  }[]
  sponsoredPost?: {
    logo: string
    name: string
    url: string
    disableLink: boolean
  }
}
