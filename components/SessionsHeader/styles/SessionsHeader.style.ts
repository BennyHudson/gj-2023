import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { PostExcerpt } from '@components/PostExcerpt/styles/PostExcerpt.style'

import { StyledSessionsHeaderProps } from './SessionsHeader.style.types'
import { Section } from '@components/Section/styles/Section.style'
import respondTo from '@mixins/respondTo'

export const SessionsHeader = styled.div(
  (props: StyledSessionsHeaderProps): FlattenSimpleInterpolation => css`
    ${Section} {
      padding: ${props.headerHeight + props.theme.spacing[4]}px 0 0;

      ${respondTo.md(css`
        padding: ${props.headerHeight + props.theme.spacing[8]}px 0 ${props.theme.spacing[8]}px;
      `)}
    }
  `,
)

export const PostGrid = styled.div(
  (props: StyledSessionsHeaderProps): FlattenSimpleInterpolation => css`
    display: grid;
    grid-template-columns: repeat(12, [col-start] 1fr);
    gap: ${props.theme.spacing[4]}px;
    margin-bottom: ${props.theme.spacing[4]}px;
  `,
)

export const Feature = styled.div(
  (): FlattenSimpleInterpolation => css`
    grid-column: col-start / span 9;
  `,
)

export const SecondaryPosts = styled.div(
  (props: StyledSessionsHeaderProps): FlattenSimpleInterpolation => css`
    display: flex;
    flex-direction: column;
    gap: ${props.theme.spacing[4]}px;
    grid-column: col-start 10 / span 3;

    ${PostExcerpt} {
      padding-bottom: ${props.theme.spacing[4]}px;
      border-bottom: 1px solid ${props.theme.colours.grey};

      &:last-child {
        padding-bottom: 0;
        border-bottom: none;
      }
    }
  `,
)
