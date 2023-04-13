import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

export const Time = styled.span(
  (): FlattenSimpleInterpolation => css`
    text-transform: uppercase;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `,
)
