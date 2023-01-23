import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

export const BannerAdvert = styled.div(
  (): FlattenSimpleInterpolation => css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
)
