export interface MagazineGridProps {
  magazines: {
    node: {
      name: string
      image: {
        sourceUrl: string
      }
    }
  }[]
}
