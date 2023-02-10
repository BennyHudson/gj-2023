import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledBillingFormProps } from './BillingForm.style.types'

export const BillingForm = styled.div((props: StyledBillingFormProps): FlattenSimpleInterpolation => css`
  color: ${props.theme.colours.primary};
`)
