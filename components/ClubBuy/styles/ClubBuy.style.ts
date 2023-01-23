import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledClubBuyProps } from './ClubBuy.style.types'

export const ClubBuy = styled.div(
  (props: StyledClubBuyProps): FlattenSimpleInterpolation => css`
    text-align: center;
    border-bottom: 1px solid ${props.theme.colours.grey};
  `,
)

export const Products = styled.div(
  (props: StyledClubBuyProps): FlattenSimpleInterpolation => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: ${props.theme.spacing[6]}px;
  `,
)

export const Product = styled.div(
  (props: StyledClubBuyProps): FlattenSimpleInterpolation => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${props.theme.spacing[8]}px;
    border-right: 1px solid ${props.theme.colours.grey};
    padding: ${props.theme.spacing[1]}px ${props.theme.spacing[4]}px;

    div {
      flex-grow: 1;
    }

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
      border-right: 0;
    }
  `,
)
