export interface ImageBlockProps {
  image: {
    sourceUrl: string
    caption?: string
  }
  imageSize: 'standard' | 'standard--tall' | 'standard--full'
}
