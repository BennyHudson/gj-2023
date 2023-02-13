import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledShippingFormProps } from './ShippingForm.style.types'
import { EditButton } from '@components/EditButton/styles/EditButton.style'

export const ShippingForm = styled.div((props: StyledShippingFormProps): FlattenSimpleInterpolation => css`
  ${EditButton} {
    margin-bottom: ${props.theme.spacing[8]}px;
    display: block;

    &:last-child {
      margin-bottom: 0;
    }
  }
`)
