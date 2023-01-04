import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledPostGridProps } from './PostGrid.style.types'

export const PostGrid = styled.div((props: StyledPostGridProps): FlattenSimpleInterpolation => css`
  display: grid;
  grid-column: col-start / span 12;
  grid-template-columns: repeat(${props.columns}, 1fr);
  gap: ${props.theme.spacing[4]}px;
  margin-bottom: ${props.theme.spacing[4]}px;

  &:last-child {
    margin-bottom: 0;
  }
`)
