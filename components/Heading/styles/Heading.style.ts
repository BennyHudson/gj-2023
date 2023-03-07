import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import respondTo from '@mixins/respondTo'

import { StyledHeadingProps } from './Heading.style.types'

export const Heading = styled.h2(
  (props: StyledHeadingProps): FlattenSimpleInterpolation => css`
    font-size: ${props.theme.typography.heading[props.size!].fontSizeMobile};
    line-height: ${props.theme.typography.heading[props.size!].lineHeightMobile};
    font-weight: 400;
    text-transform: ${props.transform ? props.transform : 'none'};

    ${props.appearance === 'secondary' &&
    css`
      color: ${props.theme.colours.grey};
    `}

    ${props.font === 'Cera' &&
    css`
      font-family: 'Cera Pro Regular', sans-serif;
    `}

  ${props.font === 'ChronicleCondensed' &&
    css`
      font-family: 'Chronicle Condensed Regular', sans-serif;
    `}

  ${props.weight === 2 &&
    css`
      font-weight: 600;
      font-family: 'Chronicle Semibold', sans-serif;

      ${props.font === 'Cera' &&
      css`
        font-family: 'Cera Pro Semibold', sans-serif;
      `}

      ${props.font === 'ChronicleCondensed' &&
      css`
        font-family: 'Chronicle Condensed Semibold', sans-serif;
      `}
    `}

  ${props.weight === 3 &&
    css`
      font-weight: 700;
      font-family: 'Chronicle Bold', sans-serif;

      ${props.font === 'Cera' &&
      css`
        font-family: 'Cera Pro Bold', sans-serif;
      `}

      ${props.font === 'ChronicleCondensed' &&
      css`
        font-family: 'Chronicle Condensed Bold', sans-serif;
      `}
    `}

  ${respondTo.md(css`
      font-size: ${props.theme.typography.heading[props.size!].fontSize};
      line-height: ${props.theme.typography.heading[props.size!].lineHeight};
    `)}

  ${!props.noMargin &&
    css`
      margin-bottom: ${props.theme.spacing[2]}px;

      ${props.size! > 4 &&
      css`
        margin-bottom: ${props.theme.spacing[4]}px;
      `}
    `}

  ${props.inverse &&
    css`
      color: ${props.theme.colours.white};

      ${props.appearance === 'secondary' &&
      css`
        color: ${props.theme.colours.grey};
      `}
    `}

  &:last-child {
      margin-bottom: 0;
    }

    ${props.state === 'error' &&
    css`
      color: ${props.theme.colours.red} !important;
    `}
  `,
)
