import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledCartProps } from './Cart.style.types'

export const Cart = styled.div((props: StyledCartProps): FlattenSimpleInterpolation => css`
  color: ${props.theme.colours.primary};
`)
