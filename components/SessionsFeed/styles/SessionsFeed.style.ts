import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledSessionsFeedProps } from './SessionsFeed.style.types'

export const SessionsFeed = styled.div(
  (props: StyledSessionsFeedProps): FlattenSimpleInterpolation => css`
    display: grid;
    grid-template-columns: repeat(12, [col-start] 1fr);
    max-width: ${props.theme.containerWidth}px;
    margin: 0 auto;
    background: ${props.theme.colours.black};
  `,
)

export const Column = styled.div(
  (props: StyledSessionsFeedProps): FlattenSimpleInterpolation => css`
    grid-column: col-start / span 3;
    padding: ${props.theme.spacing[8]}px;
    position: relative;

    &:nth-child(1) {
      padding-left: 0;

      &::after {
        content: '';
        height: 100%;
        width: 10000px;
        background: ${props.theme.colours.black};
        position: absolute;
        top: 0;
        right: 100%;
      }
    }

    &:nth-child(2) {
      grid-column: col-start 4 / span 9;
      background: ${props.theme.colours.white};
      padding-right: 0;

      &::after {
        content: '';
        height: 100%;
        width: 10000px;
        background: ${props.theme.colours.white};
        position: absolute;
        top: 0;
        left: 100%;
      }
    }
  `,
)

export const SundayPlaylist = styled.div(
  (props: StyledSessionsFeedProps): FlattenSimpleInterpolation => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: ${props.theme.spacing[4]}px;
    padding-bottom: ${props.theme.spacing[2]}px;
    border-bottom: 1px solid ${props.theme.colours.white};
  `,
)
