import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import Link from 'next/link'

import { StyledLogoProps } from './Logo.style.types'
import respondTo from '@mixins/respondTo'

export const Logo = styled.div(
  (): FlattenSimpleInterpolation => css`
    display: flex;
    justify-content: center;
    align-items: center;    
  `,
)

export const LogoLink = styled(Link)(
  (props: StyledLogoProps): FlattenSimpleInterpolation => css`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 230px;
    height: 28px;
    width: 100%;

    ${respondTo.md(css`
      height: 36px;
    `)}

    ${props.$gLogo ? css`
      background: url('${props.$inverse ? '/svg/logo-small-inverse.svg' : '/svg/logo-small.svg'}') center center no-repeat;
    ` : css`
      background: url('${props.$inverse ? '/svg/logo-inverse.svg' : '/svg/logo.svg'}') center center no-repeat;
    `}

    background-size: contain;
  `,
)
