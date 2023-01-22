export interface JobsListProps {
  content: string
  jobs: {
    position: string
    shortDescription?: string
    jobSpec: {
      mediaItemUrl: string
    }
  }[]
}
