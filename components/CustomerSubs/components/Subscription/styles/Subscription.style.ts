import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import { ValueWithLabel } from '@components/ValueWithLabel/styles/ValueWithLabel.style'

import type { StyledSubscriptionProps } from './Subscription.style.types'

export const Subscription = styled.div(
  (props: StyledSubscriptionProps): FlattenSimpleInterpolation => css`
    display: flex;
    flex-direction: column;
    gap: ${props.theme.spacing[3]}px;
    align-items: flex-start;
    width: 100%;
  `,
)

export const SubscriptionDetails = styled.div(
  (props: StyledSubscriptionProps): FlattenSimpleInterpolation => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${props.theme.spacing[1] / 2}px;

    ${ValueWithLabel} {
      margin-bottom: 0;
    }
  `,
)
