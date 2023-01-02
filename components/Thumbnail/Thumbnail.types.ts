export interface ThumbnailProps {
  type?: 'rectangle' | 'circle' | 'square'
  to?: string
  size?: 1 | 2 | 3
  requestThumbnail?: boolean
  showTitle?: boolean
  title?: string
  categories?: {
    
  }
  date?: string
  featuredImage: string
}