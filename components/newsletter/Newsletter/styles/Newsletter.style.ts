import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { FieldWrapper } from '@components/forms/FieldWrapper/styles/FieldWrapper.style'

import { StyledNewsletterProps } from './Newsletter.style.types'

export const Newsletter = styled.div((props: StyledNewsletterProps): FlattenSimpleInterpolation => css`
  display: flex;
  gap: ${props.theme.spacing[2]}px;
  flex-direction: column;

  ${FieldWrapper} {
    margin-bottom: 0;
  }
`)

export const NameFields = styled.div((props: StyledNewsletterProps): FlattenSimpleInterpolation => css`
  display: flex;
  gap: ${props.theme.spacing[2]}px;
  width: 100%;
`)
