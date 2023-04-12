import type { FlattenSimpleInterpolation} from 'styled-components'
import styled, { css } from 'styled-components'

import respondTo from '@mixins/respondTo'

import type { StyledBrandGridProps } from './BrandGrid.style.types'

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
      width: 100%;
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
