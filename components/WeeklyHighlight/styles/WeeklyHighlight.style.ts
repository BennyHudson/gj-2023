import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledWeeklyHighlightProps } from './WeeklyHighlight.style.types'

export const WeeklyHighlight = styled.div((props: StyledWeeklyHighlightProps): FlattenSimpleInterpolation => css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props.theme.spacing[4]}px;
  align-items: center;
`)

export const Content = styled.div((props: StyledWeeklyHighlightProps): FlattenSimpleInterpolation => css`
  display: flex;
  flex-direction: column;
  gap: ${props.theme.spacing[4]}px;
  padding-right: ${props.theme.spacing[4]}px;

  a {
    text-decoration: none;
    color: ${props.theme.colours.black};
  }
`)
