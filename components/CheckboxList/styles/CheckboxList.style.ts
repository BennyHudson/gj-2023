import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledCheckboxListProps } from './CheckboxList.style.types'

export const Checkbox = styled.div(
  (props: StyledCheckboxListProps): FlattenSimpleInterpolation => css`
    width: ${props.theme.spacing[3]}px;
    height: ${props.theme.spacing[3]}px;
    border: 1px solid ${props.theme.colours.grey};
    pointer-events: none;
    cursor: pointer;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.4s all ease;
    background: ${props.theme.colours.white};

    svg {
      width: ${props.theme.spacing[2]}px;
      color: ${props.theme.colours.white};
      opacity: 0;
    }
  `,
)

export const CheckboxList = styled.div(
  (props: StyledCheckboxListProps): FlattenSimpleInterpolation => css`
    display: flex;
    flex-direction: column;
    gap: ${props.theme.spacing[1]}px;
  `,
)

export const CheckboxLabel = styled.label(
  (props: StyledCheckboxListProps): FlattenSimpleInterpolation => css`
    display: flex;
    align-items: center;
    gap: ${props.theme.spacing[1]}px;
    position: relative;
    cursor: pointer;

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      width: 0;
      height: 0;

      &:checked ~ ${Checkbox} {
        background: ${props.theme.colours.green};

        svg {
          opacity: 1;
        }
      }
    }
  `,
)

export const Terms = styled.div((props: StyledCheckboxListProps): FlattenSimpleInterpolation => css`
  font-family: 'Cera Pro Regular';
  font-size: ${props.theme.typography.paragraph[1].fontSize};
  line-height: ${props.theme.typography.paragraph[1].lineHeight};
  margin-bottom: ${props.theme.spacing[4]}px;
`)
