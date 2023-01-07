import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledGiftGridProps } from './GiftGrid.style.types'

export const GiftGrid = styled.div((props: StyledGiftGridProps): FlattenSimpleInterpolation => css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${props.theme.spacing[4]}px;
  margin-bottom: ${props.theme.spacing[8]}px;

  &:last-child {
    margin-bottom: 0;
  }
`)

export const GiftItem = styled.a((props: StyledGiftGridProps): FlattenSimpleInterpolation => css`
  display: flex;
  flex-direction: column;
  gap: ${props.theme.spacing[1]}px;
  color: ${props.theme.colours.black};
  text-decoration: none;
`)
