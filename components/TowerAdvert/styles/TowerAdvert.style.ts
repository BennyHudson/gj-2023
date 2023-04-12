import type { FlattenSimpleInterpolation} from 'styled-components'
import styled, { css } from 'styled-components'

import type { StyledTowerAdvertProps } from './TowerAdvert.style.types'

export const TowerAdvert = styled.div(
  (props: StyledTowerAdvertProps): FlattenSimpleInterpolation => css`
    color: ${props.theme.colours.primary};
  `,
)
