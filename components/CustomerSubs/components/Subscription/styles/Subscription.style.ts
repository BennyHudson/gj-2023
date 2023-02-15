import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledSubscriptionProps } from './Subscription.style.types'
import { ValueWithLabel } from '@components/ValueWithLabel/styles/ValueWithLabel.style'

export const Subscription = styled.div((props: StyledSubscriptionProps): FlattenSimpleInterpolation => css`
  display: flex;
  flex-direction: column;
  gap: ${props.theme.spacing[3]}px;
  align-items: flex-start;
  width: 100%;
`)

export const SubscriptionDetails = styled.div((props: StyledSubscriptionProps): FlattenSimpleInterpolation => css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${props.theme.spacing[1] / 2}px;

  ${ValueWithLabel} {
    margin-bottom: 0;
  }
`)
