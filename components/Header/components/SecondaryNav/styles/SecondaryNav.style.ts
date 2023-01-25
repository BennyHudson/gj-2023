import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import Link from 'next/link'

import { StyledSecondaryNavProps } from './SecondaryNav.style.types'
import respondTo from '@mixins/respondTo'

export const SecondaryNav = styled.div(
  (): FlattenSimpleInterpolation => css`
    display: flex;

    ul {
      width: 100%;
      display: flex;
      justify-content: flex-end;

      li {
        display: flex;
        aspect-ratio: 1 / 1;
        width: 68px;

        &:last-child {
          aspect-ratio: unset;
          flex-grow: 1;
          width: auto;

          ${respondTo.md(css`
            flex-grow: 0;
          `)}
        }

        &:only-child {
          flex-grow: 0;
        }
      }
    }
  `,
)

export const IconButton = styled(Link)(
  (props: StyledSecondaryNavProps): FlattenSimpleInterpolation => css`
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
    width: 100%;

    &:hover {
      background: ${props.theme.colours.lightGrey};
    }

    ${props.$inverse &&
    css`
      color: ${props.theme.colours.white};

      &:hover {
        background: ${props.theme.colours.grey};
      }
    `}

    svg {
      width: 14px;
    }
  `,
)

export const Button = styled(Link)(
  (props: StyledSecondaryNavProps): FlattenSimpleInterpolation => css`
    background: none;
    padding: 0 ${props.theme.spacing[2]}px;
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
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    text-decoration: none;
    width: 100%;

    &:hover {
      background: ${props.theme.colours.lightGrey};
    }

    ${props.$inverse &&
    css`
      color: ${props.theme.colours.white};
      border-left: 1px solid hsla(0, 0%, 100%, 0.1);

      &:hover {
        background: ${props.theme.colours.black};
      }
    `}

    svg {
      width: 24px;
    }

    ${respondTo.md(css`
      padding: 0 ${props.theme.spacing[4]}px;

      svg {
        width: 14px;
      }
    `)}
  `,
)
