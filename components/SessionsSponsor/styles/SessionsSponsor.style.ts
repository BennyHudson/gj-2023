import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import { Content, Section } from '@components/Section/styles/Section.style'

import respondTo from '@mixins/respondTo'

import type { StyledSessionsSponsorProps } from './SessionsSponsor.style.types'

export const SessionsSponsor = styled.div(
  (props: StyledSessionsSponsorProps): FlattenSimpleInterpolation => css`
    position: relative;
    height: 300px;
    display: flex;
    text-align: center;

    ${respondTo.md(css`
      height: 560px;
    `)}

    ${Section} {
      position: relative;
      z-index: 1;
      background: none;
      display: flex;
    }

    ${Content} {
      justify-content: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: ${props.theme.spacing[2]}px;

      ${respondTo.md(css`
        gap: ${props.theme.spacing[4]}px;
      `)}
    }

    img {
      object-fit: cover;
    }
  `,
)

export const LogoWrapper = styled.div(
  (): FlattenSimpleInterpolation => css`
    ${respondTo.lg(css`
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
    `)}
  `,
)
