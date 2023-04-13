import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import type { StyledPaymentProps } from './Payment.style.types'

export const PaymentWrapper = styled.div(
  (props: StyledPaymentProps): FlattenSimpleInterpolation => css`
    margin-bottom: ${props.theme.spacing[8]}px;
  `,
)
