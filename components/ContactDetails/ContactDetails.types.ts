export interface ContactDetailsProps {
  contactDetails: {
    officeMap: {
      latitude: number
      longitude: number
    }
    contactInfo: {
      info: string
      title: string
    }[]
  }
}
