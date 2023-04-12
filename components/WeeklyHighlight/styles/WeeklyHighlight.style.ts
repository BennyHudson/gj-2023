import type { FlattenSimpleInterpolation} from 'styled-components'
import styled, { css } from 'styled-components'

import respondTo from '@mixins/respondTo'

import type { StyledWeeklyHighlightProps } from './WeeklyHighlight.style.types'

export const WeeklyHighlight = styled.div(
  (props: StyledWeeklyHighlightProps): FlattenSimpleInterpolation => css`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: ${props.theme.spacing[2]}px;
    align-items: center;
    width: 90%;
    margin: 0 auto;

    ${respondTo.lg(css`
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

    ${respondTo.lg(css`
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
