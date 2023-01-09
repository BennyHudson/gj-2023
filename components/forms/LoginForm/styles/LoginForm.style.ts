import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledLoginFormProps } from './LoginForm.style.types'

export const LoginForm = styled.div((props: StyledLoginFormProps): FlattenSimpleInterpolation => css`
  width: 600px;
`)
