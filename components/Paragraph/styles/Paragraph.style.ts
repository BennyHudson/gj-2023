import type { FlattenSimpleInterpolation} from 'styled-components'
import styled, { css } from 'styled-components'

import type { StyledParagraphProps } from './Paragraph.style.types'

export const Paragraph = styled.p(
  (props: StyledParagraphProps): FlattenSimpleInterpolation => css`
    font-size: ${props.theme.typography.paragraph[props.size].fontSize};
    line-height: ${props.theme.typography.paragraph[props.size].lineHeight};
    text-transform: ${props.transform ? props.transform : 'none'};

    ${!props.noMargin &&
    css`
      margin-bottom: ${props.theme.spacing[2]}px;
    `}

    ${props.appearance === 'secondary' &&
    css`
      color: ${props.theme.colours.grey};
    `}

  ${props.font === 'Cera' &&
    css`
      font-family: 'Cera Pro Regular', sans-serif;
    `}

  ${props.weight === 2 &&
    css`
      font-weight: 600;
      font-family: 'Chronicle Semibold', sans-serif;

      ${props.font === 'Cera' &&
      css`
        font-family: 'Cera Pro Semibold', sans-serif;
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
    `}

  ${props.$inverse &&
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
  `,
)
