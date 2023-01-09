export interface ImageBlock {
  [P: string]: {
    fieldGroupName: string
    image: {
      sourceUrl: string
      caption?: string
    }
    hasLink: boolean
    imageSize: string
    internalExternal?: string
    externalLink?: string
    internalLink?: {
      [P: string]: {
        uri: string
      }
    }
  }
}

export const imageBlock = (postType: string): string => {
  return `... on ${postType}_Articleacf_ContentBuilder_Image {
    fieldGroupName
    image {
      sourceUrl
      caption
    }
    hasLink
    imageSize
    internalExternal
    externalLink
    internalLink {
      ... on Article {
        id
        uri
      }
      ... on Post {
        id
        uri
      }
      ... on Page {
        id
        uri
      }
    }
  }`
}