import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledMagazineGridProps } from './MagazineGrid.style.types'

export const MagazineGrid = styled.div(
  (props: StyledMagazineGridProps): FlattenSimpleInterpolation => css`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: ${props.theme.spacing[2]}px;
  `,
)

export const MagazineCard = styled.div(
  (props: StyledMagazineGridProps): FlattenSimpleInterpolation => css`
    background: ${props.theme.colours.white};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: ${props.theme.spacing[2]}px;
    gap: ${props.theme.spacing[2]}px;
  `,
)
