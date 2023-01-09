import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledHeroImageProps } from './HeroImage.style.types'

export const HeroImage = styled.div((props: StyledHeroImageProps): FlattenSimpleInterpolation => css`
  // background: ${props.theme.colours.black};
  height: ${props.height === 2 ? '100vh' : '80vh'};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    object-fit: cover;
  }
`)
