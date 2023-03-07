import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import { Form } from 'formik'

import { StyledCheckoutProps } from './Checkout.style.types'

export const Checkout = styled(Form)((): FlattenSimpleInterpolation => [])

export const CheckoutPanels = styled.div(
  (props: StyledCheckoutProps): FlattenSimpleInterpolation => css`
    display: flex;
    flex-direction: column;
    gap: ${props.theme.spacing[4]}px;
    margin-bottom: ${props.theme.spacing[8]}px;
    position: relative;

    ${props.isLoading &&
    css`
      &::after {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        content: '';
        background: ${props.theme.colours.white};
        opacity: 0.6;
      }
    `}
  `,
)
