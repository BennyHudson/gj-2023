import type { Seo } from '@queries/fragments/seo'
import type { FeaturedImage } from '@typings/FeaturedImage.types'


export interface HeadTagsProps {
  seo: Seo
  siteOptions: {
    gjOptions: {
      faviconImages: {
        favicons: {
          faviconLarge: FeaturedImage
          faviconMedium: FeaturedImage
          faviconSmall: FeaturedImage
        }
      }
    }
  }
}
