import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledPaymentProps } from './Payment.style.types'

export const PaymentWrapper = styled.div(
  (props: StyledPaymentProps): FlattenSimpleInterpolation => css`
    margin-bottom: ${props.theme.spacing[8]}px;
  `,
)
