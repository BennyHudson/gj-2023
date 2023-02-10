import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledShippingFormProps } from './ShippingForm.style.types'

export const ShippingForm = styled.div((props: StyledShippingFormProps): FlattenSimpleInterpolation => css`
  color: ${props.theme.colours.primary};
`)
