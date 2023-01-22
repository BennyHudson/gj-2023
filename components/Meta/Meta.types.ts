export interface MetaProps {
  date?: string
  categories?: {
    nodes: {
      name: string
    }[]
  }
  inverse?: boolean
}
