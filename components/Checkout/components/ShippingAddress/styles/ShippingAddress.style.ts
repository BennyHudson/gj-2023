import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledShippingAddressProps } from './ShippingAddress.style.types'

export const ShippingAddress = styled.div((props: StyledShippingAddressProps): FlattenSimpleInterpolation => css`
  color: ${props.theme.colours.primary};
`)
