import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledCustomerDetailsProps } from './CustomerDetails.style.types'

export const CustomerDetails = styled.div(
  (props: StyledCustomerDetailsProps): FlattenSimpleInterpolation => css`
    color: ${props.theme.colours.primary};
  `,
)
