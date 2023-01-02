import React, { ReactElement, FC } from 'react'

import * as Styled from './styles/VerticalSpacer.style'

import { VerticalSpacerProps } from './VerticalSpacer.types'

const VerticalSpacer: FC<VerticalSpacerProps> = ({
  spacingLevel,
}: VerticalSpacerProps): ReactElement => {
  return (
    <Styled.VerticalSpacer spacingLevel={spacingLevel} />
  )
}

export default VerticalSpacer
