export interface PodcastIntroProps {
  text: string
  host: {
    name: string
    user: {
      moreInfo: {
        role: string
        profileImage: {
          sourceUrl: string
        }
      }
    }
  }
}
