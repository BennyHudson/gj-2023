import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledClubBuyProps } from './ClubBuy.style.types'
import respondTo from '@mixins/respondTo'
import { Content, Section } from '@components/Section/styles/Section.style'

export const ClubBuy = styled.div(
  (props: StyledClubBuyProps): FlattenSimpleInterpolation => css`
    text-align: center;
    border-bottom: 1px solid ${props.theme.colours.grey};

    ${Section} {
      padding-bottom: 0;

      ${respondTo.md(css`
        padding-bottom: ${props.theme.spacing[8]}px;
      `)}
    }

    ${Content} {
      width: 90%;
      
      ${respondTo.md(css`
        width: 100%;
      `)}
    }
  `,
)

export const Products = styled.div(
  (props: StyledClubBuyProps): FlattenSimpleInterpolation => css`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    margin-top: ${props.theme.spacing[6]}px;

    ${respondTo.md(css`
      grid-template-columns: repeat(2, 1fr);
    `)}
  `,
)

export const Product = styled.div(
  (props: StyledClubBuyProps): FlattenSimpleInterpolation => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${props.theme.spacing[4]}px;
    border-top: 1px solid ${props.theme.colours.grey};
    padding: ${props.theme.spacing[4]}px 0;

    div {
      flex-grow: 1;
    }

    ${respondTo.md(css`
      border-top: none;
      border-right: 1px solid ${props.theme.colours.grey};
      padding: ${props.theme.spacing[1]}px ${props.theme.spacing[4]}px;

      &:first-child {
        padding-left: 0;
      }

      &:last-child {
        padding-right: 0;
        border-right: none;
      }
    `)}
  `,
)
