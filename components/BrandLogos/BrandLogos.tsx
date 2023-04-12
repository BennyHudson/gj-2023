import React from 'react'
import type { ReactElement, FC } from 'react'

import type { BrandLogosProps } from './BrandLogos.types'

import * as Styled from './styles/BrandLogos.style'

const BrandLogos: FC<BrandLogosProps> = ({
  // add props
}: BrandLogosProps): ReactElement => {
  return (
    <Styled.BrandLogos>
      Component BrandLogos
    </Styled.BrandLogos>
  )
}

export default BrandLogos
