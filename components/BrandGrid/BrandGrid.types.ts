import { ReactNode } from 'react'

export interface BrandGridProps {
  brands: {
    name: string
    image: {
      sourceUrl: string
    }
    link: string
  }[]
}
