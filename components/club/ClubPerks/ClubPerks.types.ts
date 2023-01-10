export interface ClubPerksProps {
  perks: {
    backgroundImage: {
      sourceUrl: string
    }
    title: string
    content: string
    hasLink: boolean
    link?: {
      title: string
      url: string
    }
  }[]
}
