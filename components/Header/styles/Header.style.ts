import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { Logo } from '@components/Logo/styles/Logo.style'

import { StyledHeaderProps } from './Header.style.types'
import respondTo from '@mixins/respondTo'

export const Header = styled.div((props: StyledHeaderProps): FlattenSimpleInterpolation => css`
  position: ${props.headerStyle === 'feature' ? 'fixed' : 'sticky'};
  top: 0;
  width: 100%;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  transition: 0.4s all ease;
  z-index: 1000;
  border-bottom: 1px solid hsla(0,0%,100%,.1);

  ${props.fixed && css`
    position: fixed;
  `}

  ${props.headerStyle === 'feature' && props.transparent && css`
    &:hover {
      background: ${props.theme.colours.black};
    }
  `}

  ${!props.transparent && css`
    background: #fff;
    border-bottom: none;
    box-shadow: 0 1px 6px -2px rgb(49 49 49 / 30%);
  `}

  ${props.overrideHeaderStyle && css`
    position: fixed;
    background: #fff;
    border-bottom: none;
    box-shadow: 0 1px 6px -2px rgb(49 49 49 / 30%);
  `}

  ${props.searchResults && css`
    position: sticky;
    background: #fff;
    border-bottom: none;
    box-shadow: 0 1px 6px -2px rgb(49 49 49 / 30%);
  `}
`)

type HeaderContentsProps = Pick<StyledHeaderProps, 'theme' | 'transparent'>
export const HeaderContents = styled.div((props: HeaderContentsProps): FlattenSimpleInterpolation => css`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  border-bottom: 1px solid hsla(0,0%,100%,.1);
  gap: ${props.theme.spacing[2]}px;

  ${Logo} {
    padding: ${props.theme.spacing[2]}px 0;
  }

  ${!props.transparent && css`
    border-bottom: 1px solid rgba(0,0,0,.1);
  `}

  ${respondTo.md(css`
    padding: 0 0 0 ${props.theme.spacing[4]}px;
  `)}
`)


export const Overlay = styled.div((): FlattenSimpleInterpolation => css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: red;
  z-index: 900;
  opacity: 0;
  pointer-events: none;
  transition: 0.4s all ease;
`)

export const MobileTrigger = styled.div((): FlattenSimpleInterpolation => css`
  display: flex;
`)

export const MobileNavTrigger = styled.button((props: StyledHeaderProps): FlattenSimpleInterpolation => css`
  background: none;
  border: none;
  padding: 0 ${props.theme.spacing[2]}px;
  border: none;
  color: ${props.theme.colours.black};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.4s all ease;
  gap: ${props.theme.spacing[1]}px;
  border-right: 1px solid rgba(0,0,0,.1);
  text-decoration: none;
  font-size: ${props.theme.typography.paragraph[2].fontSize};
  line-height: ${props.theme.typography.paragraph[2].fontSize};

  &:hover {
    background: ${props.theme.colours.lightGrey};
  }

  ${props.$inverse && css`
    color: ${props.theme.colours.white};
    border-right: 1px solid hsla(0,0%,100%,.1);

    &:hover {
      background: ${props.theme.colours.black};
    }
  `}

  svg {
    width: 24px;
  }
`)