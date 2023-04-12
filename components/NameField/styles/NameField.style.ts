import type { FlattenSimpleInterpolation} from 'styled-components'
import styled, { css } from 'styled-components'

import { FieldWrapper } from '@components/FieldWrapper/styles/FieldWrapper.style'

import type { StyledNameFieldProps } from './NameField.style.types'

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
