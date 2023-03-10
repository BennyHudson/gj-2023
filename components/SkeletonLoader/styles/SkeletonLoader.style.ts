import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { Date } from '@components/Meta/styles/Meta.style'

import { StyledSkeletonLoaderProps } from './SkeletonLoader.style.types'
import respondTo from '@mixins/respondTo'

export const SkeletonLoader = styled.div((): FlattenSimpleInterpolation => [])

export const PostGrid = styled.div(
  (props: StyledSkeletonLoaderProps): FlattenSimpleInterpolation => css`
    display: grid;
    grid-column: col-start / span 12;
    grid-template-columns: repeat(1, 1fr);
    gap: ${props.theme.spacing[4]}px;
    margin-bottom: ${props.theme.spacing[4]}px;

    ${respondTo.md(css`
      grid-template-columns: repeat(3, 1fr);
      width: 90%;
      margin: 0 auto;
    `)}

    ${respondTo.lg(css`
      grid-template-columns: repeat(${props.columns}, 1fr);
      width: 100%;
    `)}

    &:last-child {
      margin-bottom: 0;
    }
  `,
)

export const Excerpt = styled.div(
  (props: StyledSkeletonLoaderProps): FlattenSimpleInterpolation => css`
    ${Date} {
      background: ${props.theme.colours.lightGrey};
      color: ${props.theme.colours.lightGrey};
      padding: 0 ${props.theme.spacing[2]}px;
    }
  `,
)

export const Title = styled.div(
  (props: StyledSkeletonLoaderProps): FlattenSimpleInterpolation => css`
    display: flex;
    flex-direction: column;
    gap: ${props.theme.spacing[1] / 2}px;
  `,
)

export const Text = styled.span(
  (props: StyledSkeletonLoaderProps): FlattenSimpleInterpolation => css`
    display: block;
    height: ${props.theme.typography.heading[1].fontSize};
    background: ${props.theme.colours.lightGrey};

    &:last-child {
      width: 60%;
    }
  `,
)
