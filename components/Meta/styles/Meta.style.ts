import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import type { StyledMetaProps } from './Meta.style.types'

export const Meta = styled.div(
  (props: StyledMetaProps): FlattenSimpleInterpolation => css`
    font-size: ${props.theme.typography.paragraph[1].fontSize};
    line-height: ${props.theme.typography.paragraph[1].lineHeight};
    font-family: 'Cera Pro Regular', sans-serif;
    text-transform: uppercase;
    padding: ${props.theme.spacing[1]}px 0;

    ${props.inverse &&
    css`
      color: ${props.theme.colours.white};
    `}
  `,
)

export const Date = styled.span(
  (props: StyledMetaProps): FlattenSimpleInterpolation => css`
    color: ${props.theme.colours.grey};

    ${props.inverse &&
    css`
      color: ${props.theme.colours.white};
    `}
  `,
)
