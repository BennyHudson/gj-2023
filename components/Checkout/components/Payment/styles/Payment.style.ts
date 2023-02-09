import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledPaymentProps } from './Payment.style.types'

export const Payment = styled.div((props: StyledPaymentProps): FlattenSimpleInterpolation => css`
  color: ${props.theme.colours.primary};
`)
