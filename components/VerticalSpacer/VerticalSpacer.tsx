import type { FC, ReactElement } from 'react'
import React from 'react'

import * as Styled from './styles/VerticalSpacer.style'
import type { VerticalSpacerProps } from './VerticalSpacer.types'

const VerticalSpacer: FC<VerticalSpacerProps> = ({ spacingLevel }: VerticalSpacerProps): ReactElement => {
  return <Styled.VerticalSpacer spacingLevel={spacingLevel} />
}

export default VerticalSpacer
