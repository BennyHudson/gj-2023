import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledNameFieldProps } from './NameField.style.types'
import { FieldWrapper } from '@components/FieldWrapper/styles/FieldWrapper.style'

export const NameFields = styled.div(
  (props: StyledNameFieldProps): FlattenSimpleInterpolation => css`
    display: flex;
    gap: ${props.theme.spacing[2]}px;
    width: 100%;

    ${FieldWrapper} {
      margin-bottom: 0;
    }
  `,
)
