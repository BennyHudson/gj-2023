import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledVideoBlockProps } from './VideoBlock.style.types'

export const VideoBlock = styled.div(
  (props: StyledVideoBlockProps): FlattenSimpleInterpolation => css`
    aspect-ratio: 16 / 9;
    width: 100%;
    position: relative;
    margin-bottom: ${props.theme.spacing[4]}px;
    grid-column: col-start 3 / span 7;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `,
)
