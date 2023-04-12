import type { FlattenSimpleInterpolation} from 'styled-components'
import styled, { css } from 'styled-components'

import type { StyledDividerProps } from './Divider.style.types'

export const Divider = styled.div(
  (props: StyledDividerProps): FlattenSimpleInterpolation => css`
    height: 1px;
    background: ${props.theme.colours.grey};
  `,
)
