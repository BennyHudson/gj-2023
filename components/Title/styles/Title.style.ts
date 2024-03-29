import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import respondTo from '@mixins/respondTo'

import type { StyledTitleProps } from './Title.style.types'

export const Title = styled.div(
  (props: StyledTitleProps): FlattenSimpleInterpolation => css`
    border-bottom: 1px solid ${props.theme.colours.midGrey};
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding-bottom: ${props.theme.spacing[2]}px;
    gap: ${props.theme.spacing[4]}px;
    width: 90%;
    margin: 0 auto ${props.theme.spacing[2]}px;

    ${respondTo.lg(css`
      width: 100%;
      margin: 0 auto ${props.theme.spacing[4]}px;
    `)}

    ${props.inverse &&
    css`
      border-bottom: 1px solid ${props.theme.colours.white};
    `}
  `,
)

type LinkListProps = Pick<StyledTitleProps, 'theme'>
export const LinkList = styled.ul(
  (props: LinkListProps): FlattenSimpleInterpolation => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: ${props.theme.spacing[2]}px;
    flex-shrink: 0;
  `,
)
