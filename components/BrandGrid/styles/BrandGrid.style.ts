import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledBrandGridProps } from './BrandGrid.style.types'
import respondTo from '@mixins/respondTo'

export const BrandGrid = styled.div(
  (props: StyledBrandGridProps): FlattenSimpleInterpolation => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${props.theme.spacing[2]}px;
    width: 90%;
    margin: 0 auto ${props.theme.spacing[4]}px;

    ${respondTo.lg(css`
      grid-template-columns: repeat(4, 1fr);
      gap: ${props.theme.spacing[4]}px;
      margin: 0 auto ${props.theme.spacing[8]}px;
    `)}

    &:last-child {
      margin-bottom: 0;
    }
  `,
)

export const BrandItem = styled.div(
  (props: StyledBrandGridProps): FlattenSimpleInterpolation => css`
    display: flex;
    flex-direction: column;
    gap: ${props.theme.spacing[2]}px;
  `,
)
