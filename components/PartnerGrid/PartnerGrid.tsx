import React, { ReactElement, FC } from 'react'
import Masonry from 'react-masonry-css'

import * as Styled from './styles/PartnerGrid.style'

import { PartnerGridProps } from './PartnerGrid.types'

import PartnerCard from './components/PartnerCard'

const PartnerGrid: FC<PartnerGridProps> = ({ partners }: PartnerGridProps): ReactElement => {
  const breakpointColumnsObj = {
    default: 3,
    700: 2,
    500: 1,
  }

  return (
    <Styled.PartnerGrid>
      {partners.map((partner, index) => {
        return <PartnerCard key={index} {...partner} />
      })}
    </Styled.PartnerGrid>
  )
}

export default PartnerGrid
