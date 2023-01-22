import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledQuoteBlockProps } from './QuoteBlock.style.types'
import respondTo from '@mixins/respondTo'

export const QuoteBlock = styled.div((props: StyledQuoteBlockProps): FlattenSimpleInterpolation => css`
  padding: ${props.theme.spacing[2]}px 10%;
  text-transform: uppercase;
  font-size: ${props.theme.typography.heading[4].fontSizeMobile};
  line-height: ${props.theme.typography.heading[4].lineHeightMobile};
  font-family: 'Chronicle Condensed Semibold';
  grid-column: col-start / span 12;

  ${respondTo.md(css`
    padding: ${props.theme.spacing[4]}px ${props.theme.spacing[8]}px;
    font-size: ${props.theme.typography.heading[4].fontSize};
    line-height: ${props.theme.typography.heading[4].lineHeight};
    grid-column: col-start 3 / span 7;
  `)}
`)
