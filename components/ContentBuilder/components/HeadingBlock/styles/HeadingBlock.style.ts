import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import respondTo from '@mixins/respondTo'

export const HeadingBlock = styled.div(
  (): FlattenSimpleInterpolation => css`
    grid-column: col-start / span 12;
    padding: 0 5%;

    ${respondTo.md(css`
      padding: 0;
      grid-column: col-start 2 / span 10;
    `)}

    ${respondTo.lg(css`
      grid-column: col-start 3 / span 7;
    `)}
  `,
)
