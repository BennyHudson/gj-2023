import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { Content } from '@components/Section/styles/Section.style'
import { Link } from '@components/Link/styles/Link.style'
import { FooterMainMenu } from '../components/FooterMainMenu/styles/FooterMainMenu.style'

import { StyledFooterProps } from './Footer.style.types'

export const Footer = styled.div((props: StyledFooterProps): FlattenSimpleInterpolation => css`
  border-top: 1px solid ${props.theme.colours.grey};

  ${Link} {
    margin-bottom: 0;

    &::after {
      content: none;
    }
  }

  ${Content} {
    display: flex;
    flex-direction: column;
    gap: ${props.theme.spacing[6]}px;
  }
`)

export const Top = styled.div((): FlattenSimpleInterpolation => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`)

export const ScrollUp = styled.button((props: StyledFooterProps): FlattenSimpleInterpolation => css`
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
`)

export const Main = styled.div((): FlattenSimpleInterpolation => css`
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);

  ${FooterMainMenu} {
    grid-column: col-start / span 9;
  }
`)

export const SecondaryMenu = styled.div((): FlattenSimpleInterpolation => css`
  grid-column: col-start 10 / span 3;
  display: flex;
  justify-content: flex-end;
`)

export const Meta = styled.div((): FlattenSimpleInterpolation => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`)

export const LegalMenu = styled.ul((props: StyledFooterProps): FlattenSimpleInterpolation => css`
  display: flex;
  gap: ${props.theme.spacing[4]}px;
`)