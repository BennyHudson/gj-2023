import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import respondTo from '@mixins/respondTo'

import { StyledFullPageFeatureProps } from './FullPageFeature.style.types'

export const Spacer = styled.div(
  (): FlattenSimpleInterpolation => css`
    height: 100vh;
    background: #111;
    width: 100%;
  `,
)

export const Background = styled.div(
  (props: StyledFullPageFeatureProps): FlattenSimpleInterpolation => css`
    height: 100vh;
    display: flex;
    align-items: center;
    width: 100%;
    position: fixed;
    z-index: 0;
    top: 0;
    left: 0;

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url('${props.backgroundImage}') center center no-repeat #111;
      background-size: cover;
      opacity: ${props.opacity};
    }

    ${respondTo.md(css`
      align-items: flex-end;
    `)}
  `,
)

export const FullPageFeature = styled.div(
  (props: StyledFullPageFeatureProps): FlattenSimpleInterpolation => css`
    height: calc(100vh - ${props.headerHeight * 2}px);
    padding: ${props.headerHeight}px ${props.theme.spacing[2]}px;
    display: grid;
    grid-template-columns: repeat(12, [col-start] 1fr);
    align-items: center;
    width: 90%;
    opacity: ${props.opacity};
    position: relative;
    margin: 0 auto;
    max-width: 1600px;

    ${respondTo.md(css`
      height: 100vh;
      padding: ${props.theme.spacing[8]}px 0;
      align-items: end;
    `)}
  `,
)

type ContentProps = Pick<StyledFullPageFeatureProps, 'theme'>
export const Content = styled.div(
  (props: ContentProps): FlattenSimpleInterpolation => css`
    position: relative;
    z-index: 2;
    border-top: 2px solid ${props.theme.colours.white};
    border-bottom: 2px solid ${props.theme.colours.white};
    grid-column: col-start / span 12;
    padding: ${props.theme.spacing[4]}px 0;
    text-align: center;

    ${respondTo.md(css`
      text-align: left;
      grid-column: col-start / span 8;
      border-bottom: none;
      border-top: none;
      padding: ${props.theme.spacing[4]}px;
    `)}
  `,
)
