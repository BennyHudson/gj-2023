import { media } from './media'

export const categorySeo = () => {
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
    title
    twitterDescription
    twitterImage {
      ${media()}
    }
    twitterTitle
  }`
}
