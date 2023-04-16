import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import { Breadcrumbs } from '@components/Breadcrumbs/styles/Breadcrumbs.style'

import respondTo from '@mixins/respondTo'

import type { StyledMastheadProps } from './Masthead.style.types'

type MastheadTheme = Pick<StyledMastheadProps, 'theme'>
export const Masthead = styled.div(
  (props: MastheadTheme): FlattenSimpleInterpolation => css`
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  margin-bottom: ${props.theme.spacing[4]}px;

  ${respondTo.md(css`
    margin-bottom: ${props.theme.spacing[8]}px;
  `)}

  ${Breadcrumbs} {
    width: 100%;
  }
`,
)

export const MastheadContent = styled.div(
  (props: StyledMastheadProps): FlattenSimpleInterpolation => css`
    grid-column: col-start / span 12;
    padding: 0 5%;

    ${respondTo.md(css`
      grid-column: col-start 2 / span 10;
      text-align: center;
      padding: 0;

      ${props.fullWidth &&
      css`
        grid-column: col-start 2 / span 10;
        text-align: left;
      `}
    `)}

    ${respondTo.lg(css`
      grid-column: col-start 4 / span 5;

      ${props.fullWidth &&
      css`
        grid-column: col-start / span 9;
        text-align: left;
      `}
    `)}
  `,
)
