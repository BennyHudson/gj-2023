import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledOverlayProps } from './Overlay.style.types'

export const Overlay = styled.div(
  (props: StyledOverlayProps): FlattenSimpleInterpolation => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, ${props.appearance === 'primary' ? 0.2 : 0.6});
    z-index: 1;
  `,
)
