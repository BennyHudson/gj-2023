import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledPartnerGridProps } from './PartnerGrid.style.types'

export const PartnerGrid = styled.div(
  (props: StyledPartnerGridProps): FlattenSimpleInterpolation => css`
    .my-masonry-grid {
      display: flex;
      margin-left: -${props.theme.spacing[4]}px;
      width: auto;
    }
    .my-masonry-grid_column {
      padding-left: ${props.theme.spacing[4]}px;
      background-clip: padding-box;
      position: relative;
    }
  `,
)
