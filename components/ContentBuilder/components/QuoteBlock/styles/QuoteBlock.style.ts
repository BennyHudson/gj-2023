import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import respondTo from '@mixins/respondTo'

import type { StyledQuoteBlockProps } from './QuoteBlock.style.types'

export const QuoteBlock = styled.div(
  (props: StyledQuoteBlockProps): FlattenSimpleInterpolation => css`
    padding: ${props.theme.spacing[2]}px 10%;
    text-transform: uppercase;
    font-size: ${props.theme.typography.heading[4].fontSizeMobile};
    line-height: ${props.theme.typography.heading[4].lineHeightMobile};
    font-family: 'Chronicle Condensed Semibold';
    grid-column: col-start / span 12;

    ${respondTo.lg(css`
      padding: ${props.theme.spacing[4]}px ${props.theme.spacing[8]}px;
      font-size: ${props.theme.typography.heading[4].fontSize};
      line-height: ${props.theme.typography.heading[4].lineHeight};
      grid-column: col-start 2 / span 10;
    `)}

    ${respondTo.lg(css`
      padding: ${props.theme.spacing[4]}px ${props.theme.spacing[8]}px;
      grid-column: col-start 3 / span 7;
    `)}
  `,
)
