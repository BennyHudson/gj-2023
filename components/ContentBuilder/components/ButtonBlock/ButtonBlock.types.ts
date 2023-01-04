export interface ButtonBlockProps {
  title: string
  callToAction?: string
  link: string
  price?: number
  image?: {
    sourceUrl: string
    caption?: string
  }
}
