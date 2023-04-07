import React, { ReactElement, FC } from 'react'

import * as Styled from './styles/PartnerGrid.style'

import { PartnerGridProps } from './PartnerGrid.types'

import PartnerCard from './components/PartnerCard'

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
