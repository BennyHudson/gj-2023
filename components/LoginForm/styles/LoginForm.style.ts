import { Form } from 'formik'
import type { FlattenSimpleInterpolation} from 'styled-components'
import styled, { css } from 'styled-components'

import type { StyledLoginFormProps } from './LoginForm.style.types'

export const LoginForm = styled(Form)(
  (props: StyledLoginFormProps): FlattenSimpleInterpolation => css`
    max-width: 600px;
    margin: 0 auto;
    position: relative;

    ${props.isLoading &&
    css`
      &::after {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        content: '';
        background: ${props.theme.colours.white};
        opacity: 0.6;
      }
    `}
  `,
)

export const LoginFooter = styled.div(
  (props: StyledLoginFormProps): FlattenSimpleInterpolation => css`
    display: flex;
    align-items: center;
    gap: ${props.theme.spacing[4]}px;
  `,
)
