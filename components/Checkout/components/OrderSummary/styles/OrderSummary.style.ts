import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledOrderSummaryProps } from './OrderSummary.style.types'

export const OrderSummary = styled.div((props: StyledOrderSummaryProps): FlattenSimpleInterpolation => css`
  color: ${props.theme.colours.primary};
`)
