import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import type { StyledCodeBlockProps } from './CodeBlock.style.types'

export const CodeBlock = styled.div(
  (props: StyledCodeBlockProps): FlattenSimpleInterpolation => css`
    border-top: 1px solid ${props.theme.colours.grey};
    border-bottom: 1px solid ${props.theme.colours.grey};
    padding: ${props.theme.spacing[2]}px 0;
    grid-column: col-start 3 / span 7;
  `,
)
