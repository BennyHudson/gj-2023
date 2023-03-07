import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledPaymentDetailsProps } from './PaymentDetails.style.types'
import { ValueWithLabel } from '@components/ValueWithLabel/styles/ValueWithLabel.style'

export const PaymentDetails = styled.div(
  (props: StyledPaymentDetailsProps): FlattenSimpleInterpolation => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${props.theme.spacing[1] / 2}px;
    width: 100%;

    ${ValueWithLabel} {
      margin-bottom: 0;
    }
  `,
)

export const PaymentForm = styled.div(
  (): FlattenSimpleInterpolation => css`
    width: 100%;
  `,
)
