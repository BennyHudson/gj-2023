import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledHeroImageProps } from './HeroImage.style.types'
import respondTo from '@mixins/respondTo'

export const HeroImage = styled.div((props: StyledHeroImageProps): FlattenSimpleInterpolation => css`
  height: ${props.height === 2 ? '50vh' : '40vh'};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  ${respondTo.md(css`
    height: ${props.height === 2 ? '100vh' : '80vh'};
  `)}

  img {
    object-fit: cover;
  }
`)
