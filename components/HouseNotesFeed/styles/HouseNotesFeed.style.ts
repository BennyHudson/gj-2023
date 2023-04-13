import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import type { StyledHouseNotesFeedProps } from './HouseNotesFeed.style.types'

export const HouseNotesFeed = styled.div(
  (props: StyledHouseNotesFeedProps): FlattenSimpleInterpolation => css`
    color: ${props.theme.colours.primary};
  `,
)
