export interface BylineProps {
  author: string
  photographer?: string
  additionalBylines?: {
    title: string
    content: string
  }[]
  sponsoredPost?: {
    sponsorLogo: {
      sourceUrl: string
    }
    sponsorDisableLink: boolean
    sponsorName: string
    sponsorUrl: string
  }
}
