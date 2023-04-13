import Link from 'next/link'
import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import { Heading } from '@components/Heading/styles/Heading.style'
import { Meta } from '@components/Meta/styles/Meta.style'
import { PostGrid } from '@components/PostGrid/styles/PostGrid.style'
import { Thumbnail } from '@components/Thumbnail/styles/Thumbnail.style'
import { Title } from '@components/Title/styles/Title.style'

import type { StyledNavigationProps } from './Navigation.style.types'

export const Navigation = styled.nav(
  (): FlattenSimpleInterpolation => css`
    display: flex;
    align: center;
    justify-content: center;
    position: relative;
    z-index: 1;
  `,
)

type MenuLinkProps = Pick<StyledNavigationProps, 'theme' | '$isActive'>
export const MenuLink = styled(Link)(
  (props: MenuLinkProps) => css`
    text-decoration: none;
    position: relative;
    padding: ${props.theme.spacing[1] / 2}px ${props.theme.spacing[1]}px;
    transition: 0.4s all ease;
    overflow: hidden;
    display: block;

    &::after {
      transition: 0.4s all ease;
      content: '';
      display: block;
      position: absolute;
      top: 100%;
      width: 100%;
      height: 2px;
      left: 0;
    }

    &:hover {
      &::after {
        transform: translateY(-2px);
      }
    }

    ${props.$isActive &&
    css`
      &::after {
        transform: translateY(-2px);
      }
    `}
  `,
)

type SubMenuWrapperProps = Pick<StyledNavigationProps, 'theme'>
export const SubMenuWrapper = styled.div(
  (props: SubMenuWrapperProps): FlattenSimpleInterpolation => css`
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    padding: 40px;
    background: ${props.theme.colours.white};
    opacity: 0;
    transform: translateY(-${props.theme.spacing[1]}px);
    transition: 0.4s all ease;
    transition-delay: 0.2s;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    z-index: -1;
    pointer-events: none;

    &::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.8);
      pointer-events: none;
      backdrop-filter: blur(5px);
      z-index: -1;
    }

    ${Title} {
      margin: 0 auto ${props.theme.spacing[4]}px;
      width: 90%;
      max-width: ${props.theme.containerWidth}px;
    }

    ${PostGrid} {
      margin: 0 auto;
      width: 90%;
      max-width: ${props.theme.containerWidth}px;

      ${Heading} {
        font-size: ${props.theme.typography.paragraph[1].fontSize};
        line-height: ${props.theme.typography.paragraph[1].lineHeight};
      }

      ${Meta} {
        display: none;
      }

      ${Thumbnail} {
        margin-bottom: ${props.theme.spacing[2]}px;
      }
    }
  `,
)

type MenuItemProps = Pick<StyledNavigationProps, 'theme' | '$inverse'>
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

    @media (hover: hover) {
      &:hover {
        & > ${SubMenuWrapper} {
          opacity: 1;
          transform: translateY(0);
          z-index: 1;
          pointer-events: auto;
        }

        & > ${MenuLink} {
          &::after {
            transform: translateY(-2px);
          }
        }
      }
    }
  `,
)

export const SubMenu = styled.ul(
  (props: StyledNavigationProps) => css`
    display: grid;
    grid-template-columns: repeat(${props.subListCount}, 1fr);
    margin: 0 auto;
    width: 90%;
    max-width: ${props.theme.containerWidth}px;
    gap: ${props.theme.spacing[4]}px;
    font-family: 'Cera Pro Semibold';
  `,
)

export const SubMenuList = styled.ul(
  (): FlattenSimpleInterpolation => css`
    display: flex;
    flex-direction: column;
  `,
)

export const SubLink = styled(Link)(
  (props: StyledNavigationProps) => css`
    color: ${props.theme.colours.grey};
    text-decoration: none;
    text-transform: none;

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

export const MainMenu = styled.ul(
  (props: StyledNavigationProps) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${props.theme.spacing[4]}px;
    font-family: 'Cera Pro Semibold', sans-serif;
    font-weight: 600;
    font-size: ${props.theme.typography.paragraph[1].fontSize};
    text-transform: uppercase;
    transition: 0.4s all ease;

    ${props.$inverse &&
    css`
      color: ${props.theme.colours.white};

      ${SubMenuWrapper} {
        background: ${props.theme.colours.black};
      }
    `}
  `,
)
