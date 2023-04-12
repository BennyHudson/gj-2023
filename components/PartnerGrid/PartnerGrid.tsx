import type { FC, ReactElement } from 'react'
import React from 'react'

import PartnerCard from './components/PartnerCard'
import type { PartnerGridProps } from './PartnerGrid.types'
import * as Styled from './styles/PartnerGrid.style'

const PartnerGrid: FC<PartnerGridProps> = ({ partners }: PartnerGridProps): ReactElement => {
  return (
    <Styled.PartnerGrid>
      {partners.map((partner, index) => {
        return <PartnerCard key={index} {...partner} />
      })}
    </Styled.PartnerGrid>
  )
}

export default PartnerGrid
