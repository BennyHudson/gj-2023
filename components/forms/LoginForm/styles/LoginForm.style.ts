import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import { Form } from 'formik'

// import { StyledLoginFormProps } from './LoginForm.style.types'

export const LoginForm = styled(Form)((): FlattenSimpleInterpolation => css`
  width: 600px;
  margin: 0 auto;
`)
