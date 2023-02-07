import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import { Field } from 'formik'

export const TextField = styled(Field)((): FlattenSimpleInterpolation => css`
  &[type='password'] {
    letter-spacing: 4px;
  }
`)
