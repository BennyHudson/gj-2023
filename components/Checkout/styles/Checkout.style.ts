import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import { Form } from 'formik'

import { StyledCheckoutProps } from './Checkout.style.types'
import { Label } from '@components/Label/styles/Label.style'
import { EditButton } from '@components/EditButton/styles/EditButton.style'

export const Checkout = styled(Form)((): FlattenSimpleInterpolation => [])

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
  border-bottom: 1px solid ${props.theme.colours.black};
  padding-bottom: ${props.theme.spacing[4]}px;

  & > div {
    flex-grow: 1;
  }

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  ${Label} {
    font-family: 'Cera Pro Regular' !important;
    margin-bottom: ${props.theme.spacing[1]}px !important;
  }

  ${EditButton} {
    margin-bottom: ${props.theme.spacing[8]}px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`)

export const IconButton = styled.button((props: StyledCheckoutProps): FlattenSimpleInterpolation => css`
  border: none;
  background: none;
  padding: ${props.theme.spacing[1]}px;
  border-radius: 0;
  cursor: pointer;
  background: none;
  border: none;
  font-size: ${props.theme.typography.paragraph[2].fontSize};
  line-height: ${props.theme.typography.paragraph[2].fontSize};
  color: ${props.theme.colours.black};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.4s all ease;
  gap: ${props.theme.spacing[1]}px;
  font-family: 'Cera Pro Light', sans-serif;
`)

export const CartItems = styled.div((props: StyledCheckoutProps): FlattenSimpleInterpolation => css`
  display: flex;
  flex-direction: column;
  gap: ${props.theme.spacing[4]}px;
  margin-bottom: ${props.theme.spacing[8]}px;
`)

export const CartItem = styled.div((props: StyledCheckoutProps): FlattenSimpleInterpolation => css`
  border-bottom: 1px solid ${props.theme.colours.midGrey};
  padding-bottom: ${props.theme.spacing[4]}px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${props.theme.spacing[4]}px;

  & > div {
    flex-grow: 1;
  }

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`)
