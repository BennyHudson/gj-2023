import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import { Content, Section } from '@components/Section/styles/Section.style'

import respondTo from '@mixins/respondTo'

import type { StyledClubAdvertsProps } from './ClubAdverts.style.types'

export const ClubAdverts = styled.div(
  (props: StyledClubAdvertsProps): FlattenSimpleInterpolation => css`
    position: relative;
    background: ${props.theme.colours.white};

    ${Section} {
      position: relative;
      z-index: 1;
      background: none;
    }

    ${Content} {
      display: flex;
      gap: ${props.theme.spacing[2]}px;
      flex-direction: column;
      width: 90%;
      margin: 0 auto;

      ${respondTo.md(css`
        gap: ${props.theme.spacing[4]}px;
        flex-direction: row;
      `)}

      ${respondTo.lg(css`
        width: 100%;
      `)}
    }

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 25%;
      position: absolute;
      top: 75%;
      left: 0;
      background: ${props.theme.colours.lightGrey};

      ${respondTo.md(css`
        height: 50%;
        top: 50%;
      `)}
    }
  `,
)
