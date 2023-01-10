import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import { StyledBylineProps } from './Byline.style.types'

export const Byline = styled.div((): FlattenSimpleInterpolation => [])

export const SponsoredPost = styled.div((props: StyledBylineProps): FlattenSimpleInterpolation => css`
  color: ${props.theme.colours.black};
`)

export const SponsorLogo = styled.img((): FlattenSimpleInterpolation => css`
  max-width: 80%;
`)