import type { FC, ReactElement } from 'react'
import React from 'react'

import type { OverlayProps } from './Overlay.types'
import * as Styled from './styles/Overlay.style'

const Overlay: FC<OverlayProps> = ({ appearance = 'primary', onClick }: OverlayProps): ReactElement => {
  return <Styled.Overlay appearance={appearance} onClick={onClick} />
}

export default Overlay
