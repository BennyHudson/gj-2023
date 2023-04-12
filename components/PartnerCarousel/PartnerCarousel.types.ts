export interface PartnerCarouselProps {
  title: string
  partners: {
    title: string
    featuredImage: {
      node: {
        sourceUrl: string
      }
    }
    clubhousePartners: {
      partnerInformation: {
        offer: string
      }
    }
  }[]
}
