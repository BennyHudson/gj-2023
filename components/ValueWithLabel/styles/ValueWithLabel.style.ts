import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import type { StyledValueWithLabelProps } from './ValueWithLabel.style.types'

export const ValueWithLabel = styled.div(
  (props: StyledValueWithLabelProps): FlattenSimpleInterpolation => css`
    display: flex;
    align-items: flex-start;
    gap: ${props.theme.spacing[1]}px;
    margin-bottom: ${props.theme.spacing[1]}px;
    font-family: 'Cera Pro Regular';
    font-size: ${props.theme.typography.paragraph[2].fontSize};
    line-height: ${props.theme.typography.paragraph[2].lineHeight};
    text-transform: ${props.transform ? props.transform : 'none'};

    ${props.valueType === 'password' &&
    css`
      letter-spacing: 4px;
    `}

    &:last-child {
      margin-bottom: 0;
    }
  `,
)

export const Label = styled.span(
  (): FlattenSimpleInterpolation => css`
    font-family: 'Cera Pro Semibold';
    font-weight: 600;
    letter-spacing: normal;
  `,
)
