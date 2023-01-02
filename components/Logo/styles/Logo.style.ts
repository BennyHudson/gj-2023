import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import Link from 'next/link'

import { StyledLogoProps } from './Logo.style.types'

export const Logo = styled.div((props: StyledLogoProps): FlattenSimpleInterpolation => css`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    path {
      transition: 0.4s all ease;
      fill: ${props.inverse ? props.theme.colours.white : props.theme.colours.black};
    }
  }
`)

export const LogoLink = styled(Link)((): FlattenSimpleInterpolation => css`
  display: flex;
  justify-content: center;
  align-items: center;
`)
