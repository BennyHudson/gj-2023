import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import Link from 'next/link'

import { StyledLogoProps } from './Logo.style.types'

export const Logo = styled.div(
  (props: StyledLogoProps): FlattenSimpleInterpolation => css`
    display: flex;
    justify-content: center;
    align-items: center;

    ${props.gLogo && css`
      img {
        max-height: 28px;
      }
    `}
  `,
)

export const LogoLink = styled(Link)(
  (): FlattenSimpleInterpolation => css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
)
