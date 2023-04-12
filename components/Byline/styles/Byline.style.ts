import type { FlattenSimpleInterpolation} from 'styled-components'
import styled, { css } from 'styled-components'

import type { StyledBylineProps } from './Byline.style.types'

export const Byline = styled.div((): FlattenSimpleInterpolation => [])

export const SponsoredPost = styled.div(
  (props: StyledBylineProps): FlattenSimpleInterpolation => css`
    color: ${props.theme.colours.black};
  `,
)

export const SponsorLogo = styled.img(
  (): FlattenSimpleInterpolation => css`
    max-width: 80%;
  `,
)
