import { Form } from 'formik'
import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import { FieldWrapper } from '@components/FieldWrapper/styles/FieldWrapper.style'

import type { StyledNewsletterProps } from './Newsletter.style.types'

export const Newsletter = styled(Form)(
  (props: StyledNewsletterProps): FlattenSimpleInterpolation => css`
    display: flex;
    gap: ${props.theme.spacing[2]}px;
    flex-direction: column;
    position: relative;

    ${FieldWrapper} {
      margin-bottom: 0;
    }

    ${props.$isSubmitting &&
    css`
      &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.6);
      }
    `}
  `,
)

export const NameFields = styled.div(
  (props: StyledNewsletterProps): FlattenSimpleInterpolation => css`
    display: flex;
    gap: ${props.theme.spacing[2]}px;
    width: 100%;
  `,
)
