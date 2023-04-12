import type { FlattenSimpleInterpolation} from 'styled-components'
import styled, { css } from 'styled-components'

import type { StyledOrderSummaryProps } from './OrderSummary.style.types'

export const OrderSummary = styled.div(
  (props: StyledOrderSummaryProps): FlattenSimpleInterpolation => css`
    color: ${props.theme.colours.primary};
  `,
)
