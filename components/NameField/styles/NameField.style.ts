import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledNameFieldProps } from './NameField.style.types'
import { FieldWrapper } from '@components/FieldWrapper/styles/FieldWrapper.style'

export const NameFields = styled.div(
  (props: StyledNameFieldProps): FlattenSimpleInterpolation => css`
    display: grid;
    grid-template-columns: ${props.split === '2/1' ? '2fr 1fr' : `repeat(${props.columnCount}, 1fr)`};
    gap: ${props.theme.spacing[2]}px;
    width: 100%;

    ${FieldWrapper} {
      margin-bottom: 0;
      width: 100%;
    }

    label {
      margin-bottom: 0;
    }
  `,
)
