import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { Content, Section } from '@components/Section/styles/Section.style'

import { StyledClubHeroProps } from './ClubHero.style.types'
import respondTo from '@mixins/respondTo'

export const ClubHero = styled.div(
  (props: StyledClubHeroProps): FlattenSimpleInterpolation => css`
    background: #202020;
    padding-top: ${props.headerHeight}px;
    position: relative;

    ${respondTo.lg(css`
      padding-top: 0;
    `)}

    ${Section} {
      background: none;
      display: flex;
      position: relative;
      z-index: 10;

      ${respondTo.lg(css`
        height: 100vh;
        padding-top: ${props.headerHeight + props.theme.spacing[8]}px;
      `)}
    }

    ${Content} {
      display: flex;
      align-items: center;
      width: 90%;

      ${respondTo.lg(css`
        width: 100%;
      `)}
    }
  `,
)

export const HeroContent = styled.div(
  (): FlattenSimpleInterpolation => css`
    ${respondTo.lg(css`
      width: 40%;
    `)}
  `,
)

export const BackgroundImage = styled.div(
  (): FlattenSimpleInterpolation => css`
    // display: none;

    img {
      object-fit: cover;
    }

    ${respondTo.lg(css`
      display: block;
      height: 100vh;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
    `)}
  `,
)
