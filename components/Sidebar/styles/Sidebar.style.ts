import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledSidebarProps } from './Sidebar.style.types'

export const Sidebar = styled.div((props: StyledSidebarProps): FlattenSimpleInterpolation => css`
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  gap: ${props.theme.spacing[4]}px;
`)

export const Content = styled.div((): FlattenSimpleInterpolation => css`
  grid-column: col-start / span 8;
`)

export const SidebarContent = styled.div((): FlattenSimpleInterpolation => css`
  grid-column: col-start 9 / span 4;
`)
