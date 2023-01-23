import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

export const PageTransition = styled.div(
  (): FlattenSimpleInterpolation => css`
    overflow: hidden;
  `,
)
