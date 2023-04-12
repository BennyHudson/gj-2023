import type { FlattenSimpleInterpolation} from 'styled-components'
import styled, { css } from 'styled-components'

import type { StyledCustomerDetailsProps } from './CustomerDetails.style.types'

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

export const DetailsHeading = styled.div(
  (props: StyledCustomerDetailsProps): FlattenSimpleInterpolation => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${props.theme.spacing[4]}px;
    gap: ${props.theme.spacing[4]}px;
  `,
)
