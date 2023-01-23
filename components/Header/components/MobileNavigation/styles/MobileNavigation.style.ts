import styled, { css, FlattenSimpleInterpolation, createGlobalStyle } from 'styled-components'
import Link from 'next/link'

import { StyledMobileNavigationProps } from './MobileNavigation.style.types'
import { IconButton, SecondaryNav } from '../../SecondaryNav/styles/SecondaryNav.style'

export const MobileNavigation = styled.nav(
  (props: StyledMobileNavigationProps): FlattenSimpleInterpolation => css`
    position: fixed;
    top: ${props.headerHeight}px;
    width: 90vw;
    background: ${props.theme.colours.white};
    bottom: 0;
    left: 0;
    overflow: auto;
    box-shadow: 0 1px 6px -2px rgb(49 49 49 / 30%);

    ${props.$inverse &&
    css`
      background: ${props.theme.colours.black};
    `}

    ${SecondaryNav} {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);

      ${props.$inverse &&
      css`
        border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
      `}

      ul {
        justify-content: flex-start;

        li {
          &:first-child {
            padding-left: ${props.theme.spacing[1]}px;
          }
        }
      }
    }

    ${IconButton} {
      padding: ${props.theme.spacing[2]}px ${props.theme.spacing[3]}px;
      aspect-ratio: unset;
    }
  `,
)

export const MainMenu = styled.ul(
  (props: StyledMobileNavigationProps) => css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-family: 'Cera Pro Semibold', sans-serif;
    font-weight: 600;
    font-size: ${props.theme.typography.paragraph[1].fontSize};
    text-transform: uppercase;
    transition: 0.4s all ease;
    width: 100%;
    padding: ${props.theme.spacing[4]}px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    ${props.$inverse &&
    css`
      color: ${props.theme.colours.white};
      border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
    `}

    svg {
      height: 16px;
    }
  `,
)

type MenuLinkProps = Pick<StyledMobileNavigationProps, 'theme' | '$isActive'>
export const MenuLink = styled(Link)(
  (props: MenuLinkProps) => css`
    text-decoration: none;
    display: flex;
    padding: ${props.theme.spacing[1]}px 0;
    background: none;
    border: none;
    font-family: 'Cera Pro Semibold', sans-serif;
    font-weight: 600;
    font-size: ${props.theme.typography.paragraph[1].fontSize};
    text-transform: uppercase;
    width: 100%;
    text-align: left;
    justify-content: space-between;
    align-items: center;
  `,
)

type MenuItemProps = Pick<StyledMobileNavigationProps, 'theme' | '$inverse'>
export const MenuItem = styled.li(
  (props: MenuItemProps) => css`
    ${MenuLink} {
      color: ${props.theme.colours.black};

      &::after {
        background: ${props.theme.colours.black};
      }

      ${props.$inverse &&
      css`
        color: ${props.theme.colours.white};

        &::after {
          background: ${props.theme.colours.white};
        }
      `}
    }
  `,
)

export const SubMenu = styled.ul(
  (props: StyledMobileNavigationProps) => css`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    margin: 0 0 0 auto;
    width: 90%;
    max-width: ${props.theme.containerWidth}px;
    font-family: 'Cera Pro Semibold';
  `,
)

export const SubMenuList = styled.ul(
  (): FlattenSimpleInterpolation => css`
    display: flex;
    flex-direction: column;
    margin: 0 0 0 auto;
    width: 90%;
  `,
)

export const SubLink = styled(Link)(
  (props: StyledMobileNavigationProps) => css`
    color: ${props.theme.colours.grey};
    text-decoration: none;
    text-transform: none;
    padding: ${props.theme.spacing[1]}px 0;
    background: none;
    border: none;
    width: 100%;
    text-align: left;
    font-family: 'Cera Pro Semibold', sans-serif;
    font-weight: 600;
    font-size: ${props.theme.typography.paragraph[1].fontSize};
    width: 100%;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${props.$feature &&
    css`
      color: ${props.theme.colours.black};
      text-transform: uppercase;
    `}

    ${props.$inverse &&
    css`
      color: ${props.theme.colours.white};
    `}
  `,
)

export const HideOverflow = createGlobalStyle(
  (): FlattenSimpleInterpolation => css`
    html,
    body {
      overflow: hidden;
    }
  `,
)
