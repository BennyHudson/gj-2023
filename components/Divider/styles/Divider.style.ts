import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledDividerProps } from './Divider.style.types'

export const Divider = styled.div(
  (props: StyledDividerProps): FlattenSimpleInterpolation => css`
    height: 1px;
    background: ${props.theme.colours.grey};
  `,
)
