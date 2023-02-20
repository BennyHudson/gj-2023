import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledClubVideoProps } from './ClubVideo.style.types'
import respondTo from '@mixins/respondTo'

export const ClubVideo = styled.video((props: StyledClubVideoProps): FlattenSimpleInterpolation => css`
  width: 100%;
  object-fit: cover;
  margin: 0;
  padding: 0;
  display: block;

  ${respondTo.md(css`
    height: calc(100vh - ${props.headerHeight}px);
  `)}
`)
