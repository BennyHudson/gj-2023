import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledLoginModalProps } from './LoginModal.style.types'

export const LoginModal = styled.div((props: StyledLoginModalProps): FlattenSimpleInterpolation => css`
  color: ${props.theme.colours.primary};
`)
