import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { Content, Section } from '@components/Section/styles/Section.style'

import { StyledClubHeroProps } from './ClubHero.style.types'
import respondTo from '@mixins/respondTo'

export const ClubHero = styled.div(
  (props: StyledClubHeroProps): FlattenSimpleInterpolation => css`
    background: #202020;
    padding-top: ${props.headerHeight}px;
    position: relative;

    ${Section} {
      background: none;
      display: flex;
      position: relative;

      ${respondTo.md(css`
        height: 80vh;
      `)}
    }

    ${Content} {
      display: flex;
      align-items: center;
      width: 90%;

      ${respondTo.md(css`
        width: 100%;
      `)}
    }
  `,
)

export const HeroContent = styled.div(
  (): FlattenSimpleInterpolation => css`
    ${respondTo.md(css`
      width: 40%;
    `)}
  `,
)

export const BackgroundImage = styled.div(
  (): FlattenSimpleInterpolation => css`
    display: none;

    ${respondTo.md(css`
      display: block;
      height: 80vh;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
    `)}
  `,
)
