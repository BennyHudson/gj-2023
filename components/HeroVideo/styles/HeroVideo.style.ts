import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledHeroVideoProps } from './HeroVideo.style.types'

export const HeroVideo = styled.div(
  (props: StyledHeroVideoProps): FlattenSimpleInterpolation => css`
    background: ${props.theme.colours.black};
    height: calc(100vh - ${props.headerHeight}px);
    padding: ${props.theme.spacing[8]}px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
)

export const VideoWrapper = styled.div(
  (props: StyledHeroVideoProps): FlattenSimpleInterpolation => css`
    aspect-ratio: 16 / 9;
    position: relative;
    grid-column: col-start 3 / span 7;
    height: 100%;

    &::after {
      content: '';
      display: block;
      border: 1px solid ${props.theme.colours.grey};
      width: calc(100% + ${props.theme.spacing[2]}px);
      height: calc(100% + ${props.theme.spacing[2]}px);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
  `,
)
