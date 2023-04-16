import Link from 'next/link'
import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import { Thumbnail } from '@components/Thumbnail/styles/Thumbnail.style'

import respondTo from '@mixins/respondTo'

import type { StyledPostExcerptProps } from './PostExcerpt.style.types'

type PostExcerptProps = Pick<StyledPostExcerptProps, 'theme'>
export const PostExcerpt = styled(Link)(
  (props: PostExcerptProps): FlattenSimpleInterpolation => css`
    color: ${props.theme.colours.black};
    text-decoration: none;

    &:hover {
      ${Thumbnail} {
        &::after {
          opacity: 1;
        }

        img {
          transform: scale(1.1);
        }
      }
    }
  `,
)

export const Title = styled.div(
  (props: StyledPostExcerptProps): FlattenSimpleInterpolation => css`
    display: flex;
    align-items: flex-start;
    gap: ${props.theme.spacing[2]}px;

    ${props.inverse &&
    css`
      color: ${props.theme.colours.white};
    `}
  `,
)

type IconWrapperProps = Pick<StyledPostExcerptProps, 'theme'>
export const IconWrapper = styled.div(
  (props: IconWrapperProps): FlattenSimpleInterpolation => css`
    display: flex;
    align-items: center;
    height: ${props.theme.typography.heading[1].lineHeight};
    width: 12px;
    flex-shrink: 0;

    svg {
      width: 100%;
    }
  `,
)

type BodyProps = Pick<StyledPostExcerptProps, 'theme'>
export const Body = styled.div(
  (props: BodyProps): FlattenSimpleInterpolation => css`
    width: 90%;
    margin: 0 auto;
    padding: ${props.theme.spacing[2]}px 0 0;

    ${respondTo.md(css`
      width: 100%;
    `)}
  `,
)
