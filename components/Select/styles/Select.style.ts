import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import { Field } from 'formik'

import { StyledSelectProps } from './Select.style.types'

export const SelectWrapper = styled.div(
  (): FlattenSimpleInterpolation => css`
    position: relative;

    .styled-select {
      appearance: none;

      &::-ms-expand {
        display: none;
      }
    }
  `,
)

export const Select = styled(Field)(
  (): FlattenSimpleInterpolation => css`
    appearance: none;

    &::-ms-expand {
      display: none;
    }
  `,
)

export const IconWrapper = styled.span(
  (props: StyledSelectProps): FlattenSimpleInterpolation => css`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${props.theme.spacing[2]}px;
    pointer-events: none;
    width: 12px;
    display: flex;
    align-items: center;

    svg {
      width: 100%;
      color: ${props.theme.colours.grey};
    }
  `,
)
