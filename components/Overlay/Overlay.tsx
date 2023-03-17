import React, { ReactElement, FC } from 'react'

import * as Styled from './styles/Overlay.style'

import { OverlayProps } from './Overlay.types'

const Overlay: FC<OverlayProps> = ({ appearance = 'primary', onClick }: OverlayProps): ReactElement => {
  return <Styled.Overlay appearance={appearance} onClick={onClick} />
}

export default Overlay
