import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledSearchResultsProps } from './SearchResults.style.types'

export const SearchResults = styled.ol((props: StyledSearchResultsProps): FlattenSimpleInterpolation => css`
  display: flex;
  flex-direction: column;
  gap: ${props.theme.spacing[2]}px;
`)

export const Result = styled.li((props: StyledSearchResultsProps): FlattenSimpleInterpolation => css`
  list-style: decimal;
  font-size: ${props.theme.typography.paragraph[3].fontSize};
  line-height: ${props.theme.typography.paragraph[3].lineHeight};
  margin-left: ${props.theme.spacing[4]}px;
  padding-left: ${props.theme.spacing[1]}px;
`)
