import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import { Link } from '@components/Link/styles/Link.style'
import { Title } from '@components/Title/styles/Title.style'

import respondTo from '@mixins/respondTo'

import type { StyledClubPerksProps } from './ClubPerks.style.types'

type ClubPerksTheme = Pick<StyledClubPerksProps, 'theme'>

export const ClubPerks = styled.div(
  (props: ClubPerksTheme): FlattenSimpleInterpolation => css`
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
    position: relative;

    img {
      object-fit: cover;
    }

    ${respondTo.lg(css`
      grid-column: col-start 2 / span 10;
      height: 430px;
      flex-direction: row;

      ${props.reverse &&
      css`
        flex-direction: row-reverse;
      `}
    `)}
  `,
)

export const PerkContent = styled.div(
  (props: ClubPerksTheme): FlattenSimpleInterpolation => css`
    display: flex;
    flex-direction: column;
    gap: ${props.theme.spacing[4]}px;
    align-self: center;
    padding: ${props.theme.spacing[4]}px;
    position: relative;

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

export const Logos = styled.div((props: StyledClubPerksProps): FlattenSimpleInterpolation => css`
  background: ${props.theme.colours.white};

  ${Title} {
    margin: 0 auto;
    margin-bottom: ${props.theme.spacing[4]}px;
    max-width: 1074px;

    ${respondTo.lg(css`
      width: 90%;
    `)}
  }

  .slick-track {
    display: flex !important;
    align-items: center;
  }

  .slick-slide {
    display: flex;

    & > div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  img {
    max-width: 120px;
    margin: 0 ${props.theme.spacing[6]}px;
    display: block;
    filter: grayscale(100%);
  }
`)
