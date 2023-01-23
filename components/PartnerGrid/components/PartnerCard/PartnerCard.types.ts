export interface PartnerCardProps {
  featuredImage: {
    node: {
      sourceUrl: string
    }
  }
  title: string
  clubhousePartners: {
    partnerInformation: {
      website: string
      offer: string
      redeem: string
      termsOfUse: string
    }
  }
  date: string
}
