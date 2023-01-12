import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import Link from 'next/link'

import { StyledSecondaryNavProps } from './SecondaryNav.style.types'

export const SecondaryNav = styled.div((): FlattenSimpleInterpolation => css`
  display: flex;

  ul {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    li {
      display: flex;
      aspect-ratio: 1 / 1;

      &:last-child {
        aspect-ratio: unset;
      }
    }
  }  
`)

export const IconButton = styled(Link)((props: StyledSecondaryNavProps): FlattenSimpleInterpolation => css`
  background: none;
  padding: 0;
  border: none;
  font-size: ${props.theme.typography.paragraph[2].fontSize};
  line-height: ${props.theme.typography.paragraph[2].fontSize};
  color: ${props.theme.colours.black};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.4s all ease;
  aspect-ratio: 1 / 1;

  &:hover {
    background: ${props.theme.colours.lightGrey};
  }

  ${props.$inverse && css`
    color: ${props.theme.colours.white};

    &:hover {
      background: ${props.theme.colours.black};
    }
  `}

  svg {
    width: 14px;
  }
`)

export const Button = styled(Link)((props: StyledSecondaryNavProps): FlattenSimpleInterpolation => css`
  background: none;
  padding: 0 ${props.theme.spacing[4]}px;
  border: none;
  font-size: ${props.theme.typography.paragraph[2].fontSize};
  line-height: ${props.theme.typography.paragraph[2].fontSize};
  color: ${props.theme.colours.black};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.4s all ease;
  gap: ${props.theme.spacing[1]}px;
  font-family: 'Cera Pro Light', sans-serif;
  border-left: 1px solid rgba(0,0,0,.1);
  text-decoration: none;

  &:hover {
    background: ${props.theme.colours.lightGrey};
  }

  ${props.$inverse && css`
    color: ${props.theme.colours.white};
    border-left: 1px solid hsla(0,0%,100%,.1);

    &:hover {
      background: ${props.theme.colours.black};
    }
  `}

  svg {
    width: 14px;
  }
`)
