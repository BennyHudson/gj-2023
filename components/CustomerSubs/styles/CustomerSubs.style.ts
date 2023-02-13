import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledCustomerSubsProps } from './CustomerSubs.style.types'

export const CustomerSubs = styled.div(
  (props: StyledCustomerSubsProps): FlattenSimpleInterpolation => css`
    display: flex;
    flex-direction: column;
    gap: ${props.theme.spacing[8]}px;
    align-items: flex-start;
  `,
)
