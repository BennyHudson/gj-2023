import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import respondTo from '@mixins/respondTo'

import type { StyledMagazineGridProps } from './MagazineGrid.style.types'

export const MagazineGrid = styled.div(
  (props: StyledMagazineGridProps): FlattenSimpleInterpolation => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${props.theme.spacing[2]}px;
    width: 90%;
    margin: 0 auto;

    ${respondTo.md(css`
      width: 100%;
      grid-template-columns: repeat(5, 1fr);
    `)}
  `,
)

export const MagazineCard = styled.div(
  (props: StyledMagazineGridProps): FlattenSimpleInterpolation => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap: ${props.theme.spacing[1]}px;
    margin-bottom: ${props.theme.spacing[2]}px;

    ${respondTo.md(css`
      padding: ${props.theme.spacing[2]}px;
      background: ${props.theme.colours.white};
      margin-bottom: 0;
      gap: ${props.theme.spacing[2]}px;
    `)}
  `,
)
