import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import Link from 'next/link'

export const Logo = styled.div(
  (): FlattenSimpleInterpolation => css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
)

export const LogoLink = styled(Link)(
  (): FlattenSimpleInterpolation => css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
)
