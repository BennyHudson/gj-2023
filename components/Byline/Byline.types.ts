export interface BylineProps {
  author: string
  photographer?: string
  additionalBylines?: {
    title: string
    content: string
  }[]
  sponsoredPost?: {
    logoId: number
    name: string
    url: string
    disableLink: boolean
  }
}
