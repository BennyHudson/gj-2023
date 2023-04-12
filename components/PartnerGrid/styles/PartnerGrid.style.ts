import type { FlattenSimpleInterpolation} from 'styled-components'
import styled, { css } from 'styled-components'

import respondTo from '@mixins/respondTo'

import type { StyledPartnerGridProps } from './PartnerGrid.style.types'

export const PartnerGrid = styled.div(
  (props: StyledPartnerGridProps): FlattenSimpleInterpolation => css`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: ${props.theme.spacing[2]}px;

    ${respondTo.md(css`
      grid-template-columns: repeat(2, 1fr);
    `)}

    ${respondTo.lg(css`
      grid-template-columns: repeat(3, 1fr);
      gap: ${props.theme.spacing[4]}px;
    `)}
  `,
)
