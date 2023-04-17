import type { Image } from '@typings/FeaturedImage.types'

import { media } from '../media'

export interface ButtonInfoBlock {
  callToAction: string
  fieldGroupName: string
  image: Image
  link: string
  title: string
}

export const buttonInfoBlock = (postType: string): string => {
  return `... on ${postType}_Articleacf_ContentBuilder_ButtonInfoBlock {
    callToAction
    fieldGroupName
    image {
      caption
      ${media()}
    }
    link
    title
  }`
}
