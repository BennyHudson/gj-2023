import type { FlattenSimpleInterpolation} from 'styled-components'
import styled, { css } from 'styled-components'

import type { StyledCustomerDetailsProps } from './CustomerDetails.style.types'

export const CustomerDetails = styled.div(
  (props: StyledCustomerDetailsProps): FlattenSimpleInterpolation => css`
    color: ${props.theme.colours.primary};
  `,
)
