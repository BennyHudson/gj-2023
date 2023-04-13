import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import respondTo from '@mixins/respondTo'

import type { StyledHouseNoteGridProps } from './HouseNoteGrid.style.types'

export const HouseNoteExcerpt = styled.div(
  (props: StyledHouseNoteGridProps): FlattenSimpleInterpolation => css`
    display: flex;
    margin-bottom: ${props.theme.spacing[2]}px;
    border-bottom: 1px solid ${props.theme.colours.midGrey};
    padding-bottom: ${props.theme.spacing[2]}px;
    position: relative;
    flex-direction: column;
    gap: ${props.theme.spacing[1]}px;

    &::after {
      position: absolute;
      content: '';
      top: 0;
      height: calc(100% + ${props.theme.spacing[3]}px);
      width: 1px;
      right: -${props.theme.spacing[2]}px;
      background: ${props.theme.colours.midGrey};
    }

    &:last-child {
      &::after {
        height: 100%;
      }
    }
  `,
)

export const HouseNoteGrid = styled.div(
  (props: StyledHouseNoteGridProps): FlattenSimpleInterpolation => css`
    ${respondTo.md(css`
      width: 90%;
      margin: 0 auto;
    `)}

    ${respondTo.lg(css`
      width: 100%;
    `)}

    .my-masonry-grid {
      display: flex;
      margin-left: -${props.theme.spacing[4]}px;
      width: auto;
    }
    .my-masonry-grid_column {
      padding-left: ${props.theme.spacing[4]}px;
      background-clip: padding-box;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        width: 1px;
        background: ${props.theme.colours.midGrey};
        top: 0;
        height: 100%;
        left: ${props.theme.spacing[2]}px;
      }

      &:first-child {
        &::after {
          display: none;
        }
      }
    }
  `,
)
