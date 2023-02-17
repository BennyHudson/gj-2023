import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledSessionsFeedProps } from './SessionsFeed.style.types'
import respondTo from '@mixins/respondTo'
import { Title } from '@components/Title/styles/Title.style'
import { PostGrid } from '@components/PostGrid/styles/PostGrid.style'
import { TowerAdvert } from '@components/TowerAdvert/styles/TowerAdvert.style'
import { Link } from '@components/Link/styles/Link.style'

export const FeedWrapper = styled.div((): FlattenSimpleInterpolation => css`
  width: 100%;
  overflow: hidden;
`)

export const SessionsFeed = styled.div(
  (props: StyledSessionsFeedProps): FlattenSimpleInterpolation => css`
    display: grid;
    grid-template-columns: repeat(12, [col-start] 1fr);
    max-width: ${props.theme.containerWidth}px;
    margin: 0 auto;
    background: ${props.theme.colours.black};
    width: 90%;
  `,
)

export const Column = styled.div(
  (props: StyledSessionsFeedProps): FlattenSimpleInterpolation => css`
    grid-column: col-start / span 12;
    padding: ${props.theme.spacing[4]}px 5%;
    position: relative;

    &:nth-child(2) {
      background: ${props.theme.colours.white};
    }

    ${Title},
    ${PostGrid} {
      width: 100%;
    }

    ${respondTo.lg(css`
      grid-column: col-start / span 3;
      padding: ${props.theme.spacing[4]}px;

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

    `)}
  `,
)

export const SundayPlaylist = styled.div(
  (props: StyledSessionsFeedProps): FlattenSimpleInterpolation => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: ${props.theme.spacing[4]}px;

    ${Link} {
      margin-bottom: 0;
    }

    ${TowerAdvert} {
      padding-top: ${props.theme.spacing[4]}px;
      border-top: 1px solid ${props.theme.colours.white};
    }
  `,
)
