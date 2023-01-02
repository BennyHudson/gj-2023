import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import Link from 'next/link'

import { Thumbnail } from '@components/Thumbnail/styles/Thumbnail.style'

import { StyledPostExcerptProps } from './PostExcerpt.style.types'

type PostExcerptProps = Pick<StyledPostExcerptProps, 'theme'>
export const PostExcerpt = styled(Link)((props: PostExcerptProps): FlattenSimpleInterpolation => css`
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
`)

export const Title = styled.div((props: StyledPostExcerptProps): FlattenSimpleInterpolation => css`
  display: flex;
  align-items: flex-start;
  gap: ${props.theme.spacing[2]}px;

  ${props.inverse && css`
    color: ${props.theme.colours.white};
  `}
`)