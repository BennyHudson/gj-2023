import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledContentGridProps } from './ContentGrid.style.types'

export const ContentGrid = styled.div((props: StyledContentGridProps): FlattenSimpleInterpolation => css`
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  gap: ${props.theme.spacing[4]}px;
  margin-bottom: ${props.theme.spacing[10]}px;
`)

export const Sidebar = styled.div((): FlattenSimpleInterpolation => css`
  grid-column: col-start / span 2;
`)

export const Content = styled.div((): FlattenSimpleInterpolation => css`
  // grid-column: col-start 3 / span 7;
`)

export const SecondarySidebar = styled.div((): FlattenSimpleInterpolation => css`
  // grid-column: col-start 8 / span 4;
`)
