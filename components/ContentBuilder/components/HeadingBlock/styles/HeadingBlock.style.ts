import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

export const HeadingBlock = styled.div((): FlattenSimpleInterpolation => css`
  grid-column: col-start 3 / span 7;
`)
