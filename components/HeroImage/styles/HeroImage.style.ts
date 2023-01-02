import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledHeroImageProps } from './HeroImage.style.types'

export const HeroImage = styled.div((props: StyledHeroImageProps): FlattenSimpleInterpolation => css`
  background: url('${props.backgroundImage}') center center no-repeat ${props.theme.colours.black};
  background-size: cover;
  height: ${props.height === 2 ? `calc(100vh - ${props.headerHeight}px)` : `calc(80vh - ${props.headerHeight}px)`};
  display: flex;
  align-items: center;
  justify-content: center;
`)
