import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledContentGridProps } from './ContentGrid.style.types'
import respondTo from '@mixins/respondTo'

export const ContentGrid = styled.div(
  (props: StyledContentGridProps): FlattenSimpleInterpolation => css`
    display: grid;
    grid-template-columns: repeat(12, [col-start] 1fr);
    gap: ${props.theme.spacing[4]}px;

    ${respondTo.lg(css`
      margin-bottom: ${props.theme.spacing[10]}px;
    `)}
  `,
)

export const Sidebar = styled.div(
  (): FlattenSimpleInterpolation => css`
    grid-column: col-start / span 12;
    padding: 0 5%;

    ${respondTo.md(css`
      grid-column: col-start 2 / span 10;
      padding: 0;
    `)}

    ${respondTo.lg(css`
      grid-column: col-start / span 2;
    `)}
  `,
)

export const ArticleNote = styled.div(
  (props: StyledContentGridProps): FlattenSimpleInterpolation => css`
    grid-column: col-start / span 12;
    padding: 5%;
    background: ${props.theme.colours.lightGrey};
    display: flex;
    align-items: flex-start;
    gap: ${props.theme.spacing[4]}px;
    flex-wrap: wrap;

    ${respondTo.md(css`
      flex-wrap: nowrap;
    `)}

    ${respondTo.lg(css`
      grid-column: col-start 2 / span 9;      
      padding: ${props.theme.spacing[4]}px;
    `)}
  `,
)

export const ArticleNoteContent = styled.div(
  (props: StyledContentGridProps): FlattenSimpleInterpolation => css`
    display: flex;
    flex-direction: column;
    gap: ${props.theme.spacing[2]}px;
  `,
)

export const SecondarySidebar = styled.div(
  (): FlattenSimpleInterpolation => css`
    // grid-column: col-start 8 / span 4;
  `,
)

export const Content = styled.div(
  (): FlattenSimpleInterpolation => css`
    grid-column: col-start 3 / span 7;
  `,
)
