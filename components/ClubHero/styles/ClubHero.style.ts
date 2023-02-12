import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { Content } from '@components/Section/styles/Section.style'

import respondTo from '@mixins/respondTo'

export const ClubHero = styled.div(
  (): FlattenSimpleInterpolation => css`
    ${Content} {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 90%;

      ${respondTo.lg(css`
        width: 100%;
      `)}
    }
  `,
)

export const HeroContent = styled.div(
  (): FlattenSimpleInterpolation => css`
    text-align: center;

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
