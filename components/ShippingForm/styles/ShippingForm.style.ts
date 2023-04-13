import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import { EditButton } from '@components/EditButton/styles/EditButton.style'

import type { StyledShippingFormProps } from './ShippingForm.style.types'

export const ShippingForm = styled.div(
  (props: StyledShippingFormProps): FlattenSimpleInterpolation => css`
    ${EditButton} {
      margin-bottom: ${props.theme.spacing[8]}px;
      display: block;

      &:last-child {
        margin-bottom: 0;
      }
    }
  `,
)
