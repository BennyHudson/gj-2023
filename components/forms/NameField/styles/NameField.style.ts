import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledNameFieldProps } from './NameField.style.types'

export const NameFields = styled.div((props: StyledNameFieldProps): FlattenSimpleInterpolation => css`
  display: flex;
  gap: ${props.theme.spacing[2]}px;
  width: 100%;
`)
