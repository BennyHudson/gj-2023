import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledCheckoutProps } from './Checkout.style.types'

export const Checkout = styled.div((props: StyledCheckoutProps): FlattenSimpleInterpolation => css`
  color: ${props.theme.colours.primary};
`)

export const CheckoutHeader = styled.div((props: StyledCheckoutProps): FlattenSimpleInterpolation => css`
  display: flex;
  gap: ${props.theme.spacing[4]}px;
  margin-bottom: ${props.theme.spacing[4]}px;
  justify-content: space-between;
  align-items: center;

  svg {
    width: 16px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`)

export const CheckoutPanels = styled.div((props: StyledCheckoutProps): FlattenSimpleInterpolation => css`
  display: flex;
  flex-direction: column;
  gap: ${props.theme.spacing[4]}px;
  margin-bottom: ${props.theme.spacing[8]}px;
`)

export const CheckoutPanel = styled.div((props: StyledCheckoutProps): FlattenSimpleInterpolation => css`
  border-bottom: 1px solid ${props.theme.colours.midGrey};
  padding-bottom: ${props.theme.spacing[4]}px;

  & > div {
    flex-grow: 1;
  }

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`)
