import type { FlattenSimpleInterpolation} from 'styled-components'
import styled, { css } from 'styled-components'

import type { StyledCustomerSubsProps } from './CustomerSubs.style.types'

export const CustomerSubs = styled.div(
  (props: StyledCustomerSubsProps): FlattenSimpleInterpolation => css`
    display: flex;
    flex-direction: column;
    gap: ${props.theme.spacing[8]}px;
    align-items: flex-start;
  `,
)
