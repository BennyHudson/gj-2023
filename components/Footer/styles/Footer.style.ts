import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import { Link } from '@components/Link/styles/Link.style'
import { Content } from '@components/Section/styles/Section.style'

import respondTo from '@mixins/respondTo'

import type { StyledFooterProps } from './Footer.style.types'
import { FooterMainMenu } from '../components/FooterMainMenu/styles/FooterMainMenu.style'

export const Footer = styled.div(
  (props: StyledFooterProps): FlattenSimpleInterpolation => css`
    position: relative;
    z-index: 1;

    ${Link} {
      margin-bottom: 0;

      &::after {
        content: none;
      }
    }

    ${Content} {
      display: flex;
      flex-direction: column;
      gap: ${props.theme.spacing[4]}px;

      ${respondTo.lg(css`
        gap: ${props.theme.spacing[6]}px;
      `)}
    }
  `,
)

export const Top = styled.div(
  (): FlattenSimpleInterpolation => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 0 auto;

    ${respondTo.lg(css`
      width: 100%;
    `)}
  `,
)

export const ScrollUp = styled.button(
  (props: StyledFooterProps): FlattenSimpleInterpolation => css`
    background: none;
    border: none;
    color: ${props.theme.colours.white};
    font-family: inherit;
    text-align: left;
    cursor: pointer;
    padding: 0;
    border-radius: 0;
    font-family: 'Cera Pro Semibold', sans-serif;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: ${props.theme.spacing[2]}px;

    svg {
      width: 12px;
    }
  `,
)

export const Main = styled.div(
  (props: StyledFooterProps): FlattenSimpleInterpolation => css`
    display: grid;
    grid-template-columns: repeat(12, [col-start] 1fr);
    width: 90%;
    margin: 0 auto;

    ${FooterMainMenu} {
      grid-column: col-start / span 9;
    }

    ${respondTo.lg(css`
      width: 100%;
      padding: ${props.theme.spacing[4]}px 0;
    `)}
  `,
)

export const SecondaryMenu = styled.div(
  (): FlattenSimpleInterpolation => css`
    grid-column: col-start / span 12;

    ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      ${respondTo.md(css`
        grid-template-columns: repeat(4, 1fr);
      `)}
    }

    ${respondTo.lg(css`
      display: flex;
      justify-content: flex-end;
      grid-column: col-start 10 / span 3;

      ul {
        display: block;
        grid-template-columns: repeat(2, 1fr);
      }
    `)}
  `,
)

export const Meta = styled.div(
  (props: StyledFooterProps): FlattenSimpleInterpolation => css`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: ${props.theme.spacing[2]}px;
    width: 90%;
    margin: 0 auto;

    ${respondTo.lg(css`
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    `)}
  `,
)

export const LegalMenu = styled.ul(
  (props: StyledFooterProps): FlattenSimpleInterpolation => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;

    ${respondTo.md(css`
      grid-template-columns: repeat(4, 1fr);
    `)}

    ${respondTo.lg(css`
      width: auto;
      display: flex;
      gap: ${props.theme.spacing[4]}px;
    `)}
  `,
)
