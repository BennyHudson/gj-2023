import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import respondTo from '@mixins/respondTo'

import type { StyledHeroImageProps } from './HeroImage.style.types'

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
      height: ${props.height === 2 ? `calc(100vh - ${props.headerHeight}px)` : '80vh'};

      ${props.hasVideo &&
      css`
        height: calc(100vh - ${props.headerHeight}px);
      `}
    `)}

    img {
      object-fit: cover;
    }
  `,
)

type ThemeProps = Pick<StyledHeroImageProps, 'theme'>
export const VideoWrapper = styled.div(
  (props: ThemeProps): FlattenSimpleInterpolation => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props.theme.colours.black};
    z-index: 1;
    padding: ${props.theme.spacing[4]}px 0;
    display: flex;
    align-items: center;
    justify-content: center;

    ${respondTo.md(css`
      padding: ${props.theme.spacing[8]}px 0;
    `)}
  `,
)

export const Video = styled.div(
  (props: ThemeProps): FlattenSimpleInterpolation => css`
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
