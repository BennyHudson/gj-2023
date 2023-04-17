import type { FeaturedImage } from '@typings/FeaturedImage.types'

import { media } from './media'

export interface Seo {
  breadcrumbs?: {
    text: string
    url: string
  }[]
  canonical?: string
  cornerstone?: string
  focuskw?: string
  metaDesc?: string
  metaKeywords?: string
  metaRobotsNofollow?: string
  metaRobotsNoindex?: string
  opengraphAuthor?: string
  opengraphDescription?: string
  opengraphImage?: FeaturedImage
  opengraphModifiedTime?: string
  opengraphPublishedTime?: string
  opengraphPublisher?: string
  opengraphSiteName?: string
  opengraphTitle?: string
  opengraphType?: string
  opengraphUrl?: string
  readingTime?: string
  schema?: {
    articleType: string
    pageType: string
  }
  title: string
  twitterDescription?: string
  twitterImage?: FeaturedImage
  twitterTitle?: string
}

export const seo = () => {
  return `seo {
    breadcrumbs {
      text
      url
    }
    canonical
    cornerstone
    focuskw
    metaDesc
    metaKeywords
    metaRobotsNofollow
    metaRobotsNoindex
    opengraphAuthor
    opengraphDescription
    opengraphImage {
      ${media()}
    }
    opengraphModifiedTime
    opengraphPublishedTime
    opengraphPublisher
    opengraphSiteName
    opengraphTitle
    opengraphType
    opengraphUrl
    readingTime
    schema {
      articleType
      pageType
    }
    title
    twitterDescription
    twitterImage {
      ${media()}
    }
    twitterTitle
  }`
}
