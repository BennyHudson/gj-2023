import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { Content, Section } from '@components/Section/styles/Section.style'

import { StyledClubHeroProps } from './ClubHero.style.types'

export const ClubHero = styled.div(
  (props: StyledClubHeroProps): FlattenSimpleInterpolation => css`
    background: #202020;
    padding-top: ${props.headerHeight}px;
    position: relative;

    ${Section} {
      background: none;
      height: 80vh;
      display: flex;
      position: relative;
    }

    ${Content} {
      display: flex;
      align-items: center;
    }
  `,
)

export const HeroContent = styled.div(
  (): FlattenSimpleInterpolation => css`
    width: 40%;
  `,
)

export const BackgroundImage = styled.div(
  (): FlattenSimpleInterpolation => css`
    height: 80vh;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  `,
)
