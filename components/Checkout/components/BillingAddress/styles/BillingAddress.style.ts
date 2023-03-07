import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledBillingAddressProps } from './BillingAddress.style.types'

export const BillingAddress = styled.div(
  (props: StyledBillingAddressProps): FlattenSimpleInterpolation => css`
    color: ${props.theme.colours.primary};
  `,
)
