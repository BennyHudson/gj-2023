import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import { ValueWithLabel } from '@components/ValueWithLabel/styles/ValueWithLabel.style'

import type { StyledPaymentDetailsProps } from './PaymentDetails.style.types'

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
