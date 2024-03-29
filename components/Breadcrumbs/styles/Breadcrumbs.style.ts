import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import { Link } from '@components/Link/styles/Link.style'

import respondTo from '@mixins/respondTo'

import type { StyledBreadcrumbsProps } from './Breadcrumbs.style.types'

export const Breadcrumbs = styled.ul(
  (props: StyledBreadcrumbsProps): FlattenSimpleInterpolation => css`
    display: flex;
    align-items: center;
    gap: ${props.theme.spacing[1]}px;
    font-family: 'Cera Pro Regular', sans-serif;
    font-size: ${props.theme.typography.paragraph[1].fontSize};
    line-height: ${props.theme.typography.paragraph[1].lineHeight};
    color: ${props.theme.colours.grey};
    width: 90%;
    margin: 0 auto ${props.theme.spacing[2]}px;

    ${respondTo.lg(css`
      width: 100%;
      margin-bottom: ${props.theme.spacing[4]}px;
    `)}

    ${Link} {
      color: ${props.theme.colours.grey};
      font-family: 'Cera Pro Regular', sans-serif;
      font-size: ${props.theme.typography.paragraph[1].fontSize};
      line-height: ${props.theme.typography.paragraph[1].lineHeight};
      margin-bottom: 0;
      text-transform: capitalize;
    }

    svg {
      width: 8px;
    }
  `,
)

export const Breadcrumb = styled.li(
  (props: StyledBreadcrumbsProps): FlattenSimpleInterpolation => css`
    display: flex;
    align-items: center;
    gap: ${props.theme.spacing[1]}px;

    &:last-child {
      max-width: 200px;

      span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  `,
)
