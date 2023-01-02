import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

export const Byline = styled.div((): FlattenSimpleInterpolation => [])

export const SponsoredPost = styled.div((): FlattenSimpleInterpolation => [])

export const SponsorLogo = styled.img((): FlattenSimpleInterpolation => css`
  max-width: 80%;
`)