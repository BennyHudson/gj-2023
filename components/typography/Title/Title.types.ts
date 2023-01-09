export interface TitleProps {
  title: string
  subtitle?: string
  links?: {
    text: string
    url: string
    showIcon?: boolean
  }[]
  inverse?: boolean
}
