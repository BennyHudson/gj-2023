import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import { Form as FormikForm } from 'formik'

import { Heading } from '@components/Heading/styles/Heading.style'

import { StyledFormProps } from './Form.style.types'

type FormProps = Pick<StyledFormProps, 'theme'>
export const Form = styled(FormikForm)((props: FormProps): FlattenSimpleInterpolation => css`
  grid-column: col-start 2 / span 9;
  border-top: 1px solid ${props.theme.colours.grey};
  border-bottom: 1px solid ${props.theme.colours.grey};
  padding: ${props.theme.spacing[8]}px ${props.theme.spacing[4]}px;
  margin: ${props.theme.spacing[4]}px 0;

  ${Heading} {
    margin-bottom: ${props.theme.spacing[6]}px;
  }
`)

export const Submit = styled.button((props: StyledFormProps): FlattenSimpleInterpolation => css`
  background: none;
  padding: 0;
  border: none;
  font-size: ${props.theme.typography.heading[2].fontSize};
  line-height: ${props.theme.typography.heading[2].fontSize};
  color: ${props.theme.colours.black};
  cursor: pointer;
  transition: 0.4s all ease;

  &:hover {
    background: ${props.theme.colours.midGrey};
  }

  ${props.loading && css`
    background: ${props.theme.colours.midGrey};
    box-shadow: 0 0 0 2px ${props.theme.colours.midGrey};
  `}
`)
