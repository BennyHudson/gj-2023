export interface ClubPerksProps {
  title?: string
  subtitle?: string
  perks: {
    textAlignement: 'Right' | 'Left'
    textColor: 'Light' | 'Dark'
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
