import type { FeaturedImage } from '@typings/FeaturedImage.types'

export interface PodcastIntroProps {
  text: string
  host: {
    name: string
    user: {
      moreInfo: {
        role: string
        profileImage: FeaturedImage
      }
    }
  }
}
