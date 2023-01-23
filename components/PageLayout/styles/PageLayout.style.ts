import styled, { FlattenSimpleInterpolation, css } from 'styled-components'

import { StyledPageLayoutProps } from './PageLayout.style.types'

export const PageLayout = styled.main(
  (): FlattenSimpleInterpolation => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
  `,
)

export const Page = styled.div(
  (): FlattenSimpleInterpolation => css`
    flex-grow: 1;
    width: 100%;
    position: relative;
    z-index: 1;
  `,
)

export const Background = styled.div(
  (props: StyledPageLayoutProps): FlattenSimpleInterpolation => css`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: ${props.theme.colours.white};
    width: 100px;
    aspect-ratio: 1 / 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  `,
)
