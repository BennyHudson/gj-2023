import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledWeeklyHighlightProps } from './WeeklyHighlight.style.types'
import respondTo from '@mixins/respondTo'

export const WeeklyHighlight = styled.div(
  (props: StyledWeeklyHighlightProps): FlattenSimpleInterpolation => css`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: ${props.theme.spacing[2]}px;
    align-items: center;
    width: 90%;
    margin: 0 auto;

    ${respondTo.md(css`
      grid-template-columns: repeat(2, 1fr);
      width: 100%;
      gap: ${props.theme.spacing[4]}px;
    `)}
  `,
)

export const Content = styled.div(
  (props: StyledWeeklyHighlightProps): FlattenSimpleInterpolation => css`
    display: flex;
    flex-direction: column;
    gap: ${props.theme.spacing[2]}px;
    order: 2;

    ${respondTo.md(css`
      order: 0;
      width: unset;
      gap: ${props.theme.spacing[4]}px;
      padding-right: ${props.theme.spacing[4]}px;
    `)}

    a {
      text-decoration: none;
      color: ${props.theme.colours.black};
    }
  `,
)
