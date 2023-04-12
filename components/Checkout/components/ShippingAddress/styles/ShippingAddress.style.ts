import type { FlattenSimpleInterpolation} from 'styled-components'
import styled, { css } from 'styled-components'

import type { StyledShippingAddressProps } from './ShippingAddress.style.types'

export const ShippingAddress = styled.div(
  (props: StyledShippingAddressProps): FlattenSimpleInterpolation => css`
    color: ${props.theme.colours.primary};
  `,
)
