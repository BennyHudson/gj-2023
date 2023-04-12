import type { FlattenSimpleInterpolation} from 'styled-components'
import styled, { css } from 'styled-components'

import type { StyledButtonProps } from './Button.style.types'

export const Button = styled.button(
  (props: StyledButtonProps): FlattenSimpleInterpolation => css`
    background: ${props.theme.colours.midGrey};
    border: none;
    color: ${props.theme.colours.black};
    font-family: inherit;
    text-align: left;
    cursor: pointer;
    padding: ${props.size === 2 ? props.theme.spacing[2] : props.theme.spacing[1] * 1.5}px
      ${props.size === 2 ? props.theme.spacing[6] : props.theme.spacing[4]}px;
    border-radius: 2px;
    font-family: 'Cera Pro Semibold', sans-serif;
    text-decoration: none;
    display: inline-block;
    text-align: center;
    font-size: ${props.theme.typography.paragraph[2].fontSize};
    line-height: ${props.theme.typography.paragraph[2].lineHeight};

    ${props.size === 2 &&
    css`
      text-transform: uppercase;
    `}
  `,
)
