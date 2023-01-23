import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledShopGridProps } from './ShopGrid.style.types'

export const ShopGrid = styled.div(
  (props: StyledShopGridProps): FlattenSimpleInterpolation => css`
    display: grid;
    gap: ${props.theme.spacing[4]}px;
    grid-template-columns: repeat(${props.columns}, 1fr);
  `,
)

type ShopCardProps = Pick<StyledShopGridProps, 'theme'>
export const ShopCard = styled.a(
  (props: ShopCardProps): FlattenSimpleInterpolation => css`
    background: ${props.theme.colours.white};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: ${props.theme.spacing[2]}px;
    gap: ${props.theme.spacing[2]}px;
    color: ${props.theme.colours.black};
    text-decoration: none;
    border-bottom: 1px solid ${props.theme.colours.midGrey};
  `,
)

export const ProductCarousel = styled.div(
  (props: StyledShopGridProps): FlattenSimpleInterpolation => css`
    width: 100%;
    overflow: hidden;

    button {
      display: none !important;
    }

    .slick-list {
      width: 90vw;
      overflow: visible;
    }

    .slick-dots {
      display: flex !important;
      width: 100%;
      justify-content: center;
      gap: ${props.theme.spacing[1]}px;
      padding: ${props.theme.spacing[4]}px 0 0;

      li {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: ${props.theme.colours.midGrey};

        &.slick-active {
          background: ${props.theme.colours.black};
        }
      }
    }
  `,
)

export const CardWrapper = styled.div(
  (): FlattenSimpleInterpolation => css`
    display: block;
    padding-left: 5vw;
  `,
)
