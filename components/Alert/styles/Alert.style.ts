import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledAlertProps } from './Alert.style.types'

export const Alert = styled.div((props: StyledAlertProps): FlattenSimpleInterpolation => css`
  color: ${props.theme.colours.primary};
`)
