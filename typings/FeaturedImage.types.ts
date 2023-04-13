export interface FeaturedImage {
  fullSize: string
  postThumb: string
  squareThumb: string
  medium: string
  large: string
}

export interface Image extends FeaturedImage {
  caption?: string
}
