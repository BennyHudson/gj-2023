import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledRadioListProps } from './RadioList.style.types'

export const Radio = styled.div(
  (props: StyledRadioListProps): FlattenSimpleInterpolation => css`
    width: ${props.theme.spacing[3]}px;
    height: ${props.theme.spacing[3]}px;
    border: 1px solid ${props.theme.colours.grey};
    pointer-events: none;
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.4s all ease;

    svg {
      width: ${props.theme.spacing[2]}px;
      color: ${props.theme.colours.white};
    }
  `,
)

export const RadioList = styled.div(
  (props: StyledRadioListProps): FlattenSimpleInterpolation => css`
    display: flex;
    flex-direction: column;
    gap: ${props.theme.spacing[1]}px;
  `,
)

export const Selected = styled.span(
  (props: StyledRadioListProps): FlattenSimpleInterpolation => css`
    width: ${props.theme.spacing[2]}px;
    height: ${props.theme.spacing[2]}px;
    background: none;
    border-radius: 50%;
  `,
)

export const RadioLabel = styled.label(
  (props: StyledRadioListProps): FlattenSimpleInterpolation => css`
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

      &:checked ~ ${Radio} ${Selected} {
        background: ${props.theme.colours.green};
      }
    }
  `,
)
