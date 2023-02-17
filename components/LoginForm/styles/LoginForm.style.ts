import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import { Form } from 'formik'

import { StyledLoginFormProps } from './LoginForm.style.types'

export const LoginForm = styled(Form)(
  (): FlattenSimpleInterpolation => css`
    max-width: 600px;
    margin: 0 auto;
  `,
)

export const LoginFooter = styled.div((props: StyledLoginFormProps): FlattenSimpleInterpolation => css`
  display: flex;
  align-items: center;
  gap: ${props.theme.spacing[4]}px;
`)