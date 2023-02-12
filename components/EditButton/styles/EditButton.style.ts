import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledEditButtonProps } from './EditButton.style.types'

export const EditButton = styled.button(
  (props: StyledEditButtonProps): FlattenSimpleInterpolation => css`
    border: none;
    background: none;
    padding: 0 0 ${props.theme.spacing[1] / 2};
    border-bottom: 1px solid ${props.theme.colours.black};
    font-size: ${props.theme.typography.paragraph[1].fontSize};
    line-height: ${props.theme.typography.paragraph[1].lineHeight};
    color: ${props.theme.colours.black};
    cursor: pointer;
    font-family: 'Cera Pro Semibold';
    text-decoration: none;
    display: inline-block;
  `,
)
