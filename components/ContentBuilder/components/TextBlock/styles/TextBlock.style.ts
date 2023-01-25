import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledTextBlockProps } from './TextBlock.style.types'
import respondTo from '@mixins/respondTo'

export const TextBlock = styled.div(
  (props: StyledTextBlockProps): FlattenSimpleInterpolation => css`
    grid-column: col-start / span 12;
    padding: 0 5%;

    ${respondTo.md(css`
      padding: 0;
      grid-column: col-start 2 / span 10;
    `)}

    ${respondTo.lg(css`
      grid-column: col-start 3 / span 7;
    `)}

    &:nth-child(2) {
      &::first-letter {
        font-family: 'Chronicle Condensed Bold', serif;
        font-size: ${props.theme.typography.heading[5].fontSize};
        float: left;
        padding: 18px 6px 6px 0;
      }
    }
  `,
)
