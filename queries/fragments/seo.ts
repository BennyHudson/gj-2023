export interface Seo {
  breadcrumbs?: {
    text: string
    url: string
  }[]
  canonical: string
  cornerstone: string
  focuskw: string
  metaDesc: string
  metaKeywords: string
  metaRobotsNofollow: string
  metaRobotsNoindex: string
  opengraphAuthor: string
  opengraphDescription: string
  opengraphImage?: {
    sourceUrl: string
  }
  opengraphModifiedTime: string
  opengraphPublishedTime: string
  opengraphPublisher: string
  opengraphSiteName: string
  opengraphTitle: string
  opengraphType: string
  opengraphUrl: string
  readingTime?: string
  schema?: {
    articleType: string
    pageType: string
  }
  title: string
  twitterDescription: string
  twitterImage?: {
    sourceUrl: string
  }
  twitterTitle: string
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
      sourceUrl
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
      sourceUrl
    }
    twitterTitle
  }`
}