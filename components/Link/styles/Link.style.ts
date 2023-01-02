import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledLinkProps } from './Link.style.types'

export const Link = styled.div((props: StyledLinkProps): FlattenSimpleInterpolation => css`
  text-decoration: none;
  color: ${props.theme.colours.black};
  font-size: ${props.theme.typography.paragraph[props.size].fontSize};
  line-height: ${props.theme.typography.paragraph[props.size].lineHeight};
  margin-bottom: ${props.theme.spacing[2]}px;
  text-transform: ${props.transform ? props.transform : 'none'};
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${props.theme.spacing[1]}px;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 100%;
    background: ${props.theme.colours.grey};
    transition: 0.4s all ease;
    transform: translateY(2px);
  }

  ${props.appearance === 'secondary' && css`
    color: ${props.theme.colours.grey};

    &::after {
      background: ${props.theme.colours.grey};
    }
  `}

  ${props.font === 'Cera' && css`
    font-family: 'Cera Pro Regular', sans-serif;
  `}

  ${props.weight === 2 && css`
    font-weight: 600;
    font-family: 'Chronicle Semibold', sans-serif;

    ${props.font === 'Cera' && css`
      font-family: 'Cera Pro Semibold', sans-serif;
    `}
  `}

  ${props.weight === 3 && css`
    font-weight: 700;

    font-family: 'Chronicle Bold', sans-serif;

    ${props.font === 'Cera' && css`
      font-family: 'Cera Pro Bold', sans-serif;
    `}
  `}

  ${props.inverse && css`
    color: ${props.theme.colours.white};

    &::after {
      background: ${props.theme.colours.white};
    }
  `}

  ${props.showIcon && css`
    &::after {
      content: none;
    }
  `}

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    &::after {
      transform: translateY(-1px);
    }
  }
`)
