import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import { Link } from '@components/Link/styles/Link.style'

import type { StyledPopularPostsProps } from './PopularPosts.style.types'

type PopularPostsTheme = Pick<StyledPopularPostsProps, 'theme'>

export const PopularPosts = styled.div(
  (props: PopularPostsTheme): FlattenSimpleInterpolation => css`
    border-top: 1px solid ${props.theme.colours.grey};
    border-bottom: 1px solid ${props.theme.colours.grey};
    padding: ${props.theme.spacing[2]}px 0;
  `,
)

export const Heading = styled.div(
  (props: PopularPostsTheme): FlattenSimpleInterpolation => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${props.theme.spacing[2]}px;
    margin-bottom: ${props.theme.spacing[2]}px;
  `,
)

export const Toggles = styled.ul(
  (props: PopularPostsTheme): FlattenSimpleInterpolation => css`
    display: flex;
    align-items: center;

    li {
      padding: 0 ${props.theme.spacing[1]}px;
      border-right: 1px solid ${props.theme.colours.midGrey};

      &:last-child {
        border-right: none;
        padding-right: 0;
      }
    }
  `,
)

export const Toggle = styled.button(
  (props: StyledPopularPostsProps): FlattenSimpleInterpolation => css`
    display: block;
    background: none;
    border: none;
    color: ${props.theme.colours.grey};
    font-family: inherit;
    text-align: left;
    cursor: pointer;
    padding: 0;
    font-family: 'Cera Pro Semibold', sans-serif;
    text-transform: uppercase;
    border-bottom: 1px solid transparent;

    ${props.$isActive &&
    css`
      color: ${props.theme.colours.black};
      border-bottom: 1px solid ${props.theme.colours.black};
    `}
  `,
)

export const PostList = styled.ol(
  (props: PopularPostsTheme): FlattenSimpleInterpolation => css`
    display: flex;
    flex-direction: column;
    gap: ${props.theme.spacing[2]}px;

    li {
      list-style: decimal;
      font-size: ${props.theme.typography.paragraph[2].fontSize};
      line-height: ${props.theme.typography.paragraph[2].lineHeight};
      margin-left: ${props.theme.spacing[2]}px;
      padding-left: ${props.theme.spacing[1]}px;
    }

    ${Link} {
      &::after {
        display: none;
      }
    }
  `,
)
