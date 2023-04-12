import type { FlattenSimpleInterpolation} from 'styled-components'
import styled, { css } from 'styled-components'

import type { StyledLabelProps } from './Label.style.types'

export const Label = styled.label(
  (props: StyledLabelProps): FlattenSimpleInterpolation => css`
    display: block;
    margin-bottom: ${props.theme.spacing[2]}px;
  `,
)

export const Required = styled.span(
  (): FlattenSimpleInterpolation => css`
    color: #c0392b;
  `,
)
