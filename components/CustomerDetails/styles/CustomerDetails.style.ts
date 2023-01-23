import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledCustomerDetailsProps } from './CustomerDetails.style.types'

export const CustomerDetails = styled.div(
  (props: StyledCustomerDetailsProps): FlattenSimpleInterpolation => css`
    display: flex;
    flex-direction: column;
    gap: ${props.theme.spacing[4]}px;
  `,
)

export const DetailsBlock = styled.div(
  (props: StyledCustomerDetailsProps): FlattenSimpleInterpolation => css`
    border-bottom: 1px solid ${props.theme.colours.midGrey};
    padding-bottom: ${props.theme.spacing[4]}px;

    &:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }
  `,
)
