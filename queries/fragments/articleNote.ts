import { FeaturedImage } from '@typings/FeaturedImage.types'

import { media } from './media'

export interface ArticleNote {
  content: string
  image: FeaturedImage
  link: {
    title: string
    url: string
  }
}

export const articleNote = () => {
  return `gjOptions {
    articleNote {
      content
      image {
        ${media()}
      }
      link {
        title
        url
      }
    }
  }`
}
