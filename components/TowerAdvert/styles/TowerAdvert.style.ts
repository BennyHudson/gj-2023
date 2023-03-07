import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledTowerAdvertProps } from './TowerAdvert.style.types'

export const TowerAdvert = styled.div(
  (props: StyledTowerAdvertProps): FlattenSimpleInterpolation => css`
    color: ${props.theme.colours.primary};
  `,
)
