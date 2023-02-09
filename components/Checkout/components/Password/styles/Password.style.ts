import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledPasswordProps } from './Password.style.types'

export const Password = styled.div((props: StyledPasswordProps): FlattenSimpleInterpolation => css`
  color: ${props.theme.colours.primary};
`)
