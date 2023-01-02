import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledQuoteBlockProps } from './QuoteBlock.style.types'

export const QuoteBlock = styled.div((props: StyledQuoteBlockProps): FlattenSimpleInterpolation => css`
  padding: ${props.theme.spacing[4]}px ${props.theme.spacing[8]}px;
  text-transform: uppercase;
  font-size: ${props.theme.typography.heading[4].fontSize};
  line-height: ${props.theme.typography.heading[4].lineHeight};
  font-family: 'Chronicle Condensed Semibold';
  grid-column: col-start 3 / span 7;
`)
