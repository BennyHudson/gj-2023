import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledClubAdvertsProps } from './ClubAdverts.style.types'
import { Content, Section } from '@components/Section/styles/Section.style'

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
      gap: ${props.theme.spacing[4]}px;
    }

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 50%;
      position: absolute;
      top: 50%;
      left: 0;
      background: ${props.theme.colours.lightGrey};
    }
  `,
)
