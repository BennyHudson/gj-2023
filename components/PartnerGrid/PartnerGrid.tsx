import React, { ReactElement, FC } from 'react'
import Masonry from 'react-masonry-css'
import dayjs from 'dayjs'

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
      <Masonry breakpointCols={breakpointColumnsObj} className='my-masonry-grid' columnClassName='my-masonry-grid_column'>
        {partners.map((partner, index) => {
          return <PartnerCard key={index} {...partner} />
        })}
      </Masonry>
    </Styled.PartnerGrid>
  )
}

export default PartnerGrid
