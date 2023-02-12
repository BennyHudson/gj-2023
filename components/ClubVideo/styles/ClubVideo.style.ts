import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledClubVideoProps } from './ClubVideo.style.types'

export const ClubVideo = styled.video((props: StyledClubVideoProps): FlattenSimpleInterpolation => css`
  width: 100%;
  height: calc(100vh - ${props.headerHeight}px);
  object-fit: cover;
  margin: 0;
  padding: 0;
  display: block;
`)
