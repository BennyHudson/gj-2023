import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledClubPerksProps } from './ClubPerks.style.types'
import { Title } from '@components/Title/styles/Title.style'
import respondTo from '@mixins/respondTo'
import { Link } from '@components/Link/styles/Link.style'

export const ClubPerks = styled.div(
  (props: StyledClubPerksProps): FlattenSimpleInterpolation => css`
    display: grid;
    grid-template-columns: repeat(12, [col-start] 1fr);
    gap: ${props.theme.spacing[2]}px;
    width: calc(100% - ${props.theme.spacing[2] * 2}px);
    margin: 0 auto;

    ${respondTo.md(css`
      width: 90%;
    `)}

    ${respondTo.lg(css`
      width: 100%;
      gap: ${props.theme.spacing[4]}px;
    `)}

    ${Title} {
      grid-column: col-start / span 12;
      margin-bottom: 0;
      width: 100%;

      ${respondTo.lg(css`
        grid-column: col-start 2 / span 10;
      `)}
    }
  `,
)

export const Perk = styled.div(
  (props: StyledClubPerksProps): FlattenSimpleInterpolation => css`
    background: #202020;
    display: flex;
    flex-direction: column;
    font-size: ${props.theme.typography.paragraph[2].fontSize};
    line-height: ${props.theme.typography.paragraph[2].lineHeight};
    grid-column: col-start / span 12;

    ${respondTo.lg(css`
      grid-column: col-start 2 / span 10;
      height: 430px;
      flex-direction: row;

      &:nth-child(even) {
        flex-direction: row-reverse;
      }
    `)}
  `,
)

export const PerkContent = styled.div(
  (props: StyledClubPerksProps): FlattenSimpleInterpolation => css`
    display: flex;
    flex-direction: column;
    gap: ${props.theme.spacing[4]}px;
    align-self: center;
    padding: ${props.theme.spacing[4]}px;

    ${respondTo.md(css`
      text-align: center;
      width: 60%;

      ${Link} {
        justify-content: center;
      }
    `)}

    ${respondTo.lg(css`
      width: 40%;
      padding: ${props.theme.spacing[8]}px;
      text-align: left;

      ${Link} {
        justify-content: flex-start;
      }
    `)}
    
  `,
)

export const ImageWrapper = styled.div(
  (): FlattenSimpleInterpolation => css`
    position: relative;
    height: 240px;
    width: 100%;

    ${respondTo.lg(css`
      width: 60%;
      height: auto;
    `)}

    img {
      object-fit: contain;
    }
  `,
)
