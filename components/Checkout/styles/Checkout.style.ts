import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import { Form } from 'formik'

import { StyledCheckoutProps } from './Checkout.style.types'
import { Label } from '@components/Label/styles/Label.style'
import { EditButton } from '@components/EditButton/styles/EditButton.style'

export const Checkout = styled(Form)((): FlattenSimpleInterpolation => [])

export const CheckoutPanels = styled.div(
  (props: StyledCheckoutProps): FlattenSimpleInterpolation => css`
    display: flex;
    flex-direction: column;
    gap: ${props.theme.spacing[4]}px;
    margin-bottom: ${props.theme.spacing[8]}px;
  `,
)
