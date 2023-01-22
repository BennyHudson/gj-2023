import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledCustomerSubsProps } from './CustomerSubs.style.types'

export const CustomerSubs = styled.div((props: StyledCustomerSubsProps): FlattenSimpleInterpolation => css`
  color: ${props.theme.colours.primary};
`)
