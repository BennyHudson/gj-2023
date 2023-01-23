import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledHouseNotesFeedProps } from './HouseNotesFeed.style.types'

export const HouseNotesFeed = styled.div(
  (props: StyledHouseNotesFeedProps): FlattenSimpleInterpolation => css`
    color: ${props.theme.colours.primary};
  `,
)
