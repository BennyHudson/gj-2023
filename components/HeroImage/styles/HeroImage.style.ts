import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledHeroImageProps } from './HeroImage.style.types'
import respondTo from '@mixins/respondTo'

export const HeroImage = styled.div(
  (props: StyledHeroImageProps): FlattenSimpleInterpolation => css`
    height: ${props.height === 2 ? '50vh' : '40vh'};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: url('${props.backgroundImage}') center center no-repeat;
    background-size: cover;

    ${respondTo.lg(css`
      height: ${props.height === 2 ? '100vh' : '80vh'};
    `)}

    img {
      object-fit: cover;
    }
  `,
)

export const VideoWrapper = styled.div(
  (props: StyledHeroImageProps): FlattenSimpleInterpolation => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(20px);
    z-index: 1;
    padding: ${props.headerHeight + props.theme.spacing[4]}px 0 ${props.theme.spacing[4]}px;
    display: flex;
    align-items: center;
    justify-content: center;

    ${respondTo.md(css`
      padding: ${props.headerHeight + props.theme.spacing[8]}px 0 ${props.theme.spacing[8]}px;
    `)}
  `,
)

export const Video = styled.div(
  (props: StyledHeroImageProps): FlattenSimpleInterpolation => css`
    border: 1px solid ${props.theme.colours.white};
    background: ${props.theme.colours.black};
    padding: ${props.theme.spacing[2]}px;
    width: 90%;
    max-width: ${props.theme.containerWidth}px;
    max-height: 100%;
    aspect-ratio: 3 / 2;

    .video-wrapper {
      width: 100%;
      height: 100%;
    }

    iframe {
      display: block;
      width: 100%;
      height: 100%;
    }
  `,
)
