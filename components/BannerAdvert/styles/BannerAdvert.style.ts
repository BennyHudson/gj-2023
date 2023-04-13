import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

export const BannerAdvert = styled.div(
  (): FlattenSimpleInterpolation => css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
)

export const Advert = styled.div((): FlattenSimpleInterpolation => css``)
