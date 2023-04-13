import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

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
