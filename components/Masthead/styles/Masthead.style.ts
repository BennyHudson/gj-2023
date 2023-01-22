import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledMastheadProps } from './Masthead.style.types'
import respondTo from '@mixins/respondTo'
import { Breadcrumbs } from '@components/Breadcrumbs/styles/Breadcrumbs.style'

export const Masthead = styled.div((props: StyledMastheadProps): FlattenSimpleInterpolation => css`
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  margin-bottom: ${props.theme.spacing[4]}px;

  ${respondTo.md(css`
    margin-bottom: ${props.theme.spacing[8]}px;
  `)}

  ${Breadcrumbs} {
    width 100%;
  }
`)

export const MastheadContent = styled.div((props: StyledMastheadProps): FlattenSimpleInterpolation => css`
  grid-column: col-start / span 12;
  padding: 0 5%;

  ${respondTo.md(css`
    grid-column: col-start 4 / span 5;
    text-align: center;
    padding: 0;

    ${props.fullWidth && css`
      grid-column: col-start / span 8;
      text-align: left;
    `}
  `)}
`)
