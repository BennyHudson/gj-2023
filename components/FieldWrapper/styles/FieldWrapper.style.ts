import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { TextField } from '../../TextField/styles/TextField.style'
import { Label } from '@components/Label/styles/Label.style'

import { StyledFieldWrapperProps } from './FieldWrapper.style.types'

export const FieldWrapper = styled.div(
  (props: StyledFieldWrapperProps): FlattenSimpleInterpolation => css`
    margin-bottom: ${props.theme.spacing[4]}px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    position: relative;

    ${props.labelPlacement === 'BOTTOM' &&
    css`
      flex-direction: column-reverse;
    `}

    ${TextField},
  .styled-select {
      min-height: 56px;
    }

    .styled-textarea,
    ${TextField} {
      border: 1px solid #ccc;
      padding: ${props.theme.spacing[1]}px ${props.theme.spacing[2]}px;
      font-family: 'Cera Pro Regular';
      font-size: 16px;
      line-height: 24px;
      flex-grow: 1;
      transition: 0.4s all ease;
      width: 100%;
      color: ${props.theme.colours.black};
      border-radius: 0;
      background: ${props.theme.colours.white};

      &:focus {
        outline: 1px solid ${props.theme.colours.grey};
        border: 1px solid ${props.theme.colours.white};
      }
    }

    .styled-select {
      border: 1px solid #ccc;
      padding: ${props.theme.spacing[1]}px ${props.theme.spacing[4]}px ${props.theme.spacing[1]}px ${props.theme.spacing[2]}px;
      font-size: ${props.theme.typography.heading[1].fontSize};
      flex-grow: 1;
      transition: 0.4s all ease;
      font-family: 'Cera Pro Regular';
      font-size: 16px;
      line-height: 24px;
      width: 100%;
      background: ${props.theme.colours.white};

      &:focus {
        outline: 1px solid ${props.theme.colours.grey};
        border: 1px solid ${props.theme.colours.white};
      }
    }

    label {
      font-family: 'Cera Pro Regular';
      font-size: 16px;
      line-height: 24px;
    }

    ${Label} {
      font-family: 'Cera Pro Bold';
      font-size: 18px;
      line-height: 26px;

      ${props.labelPlacement === 'BOTTOM' &&
      css`
        font-family: 'Cera Pro Regular';
        font-size: 16px;
        line-height: 24px;
        padding: ${props.theme.spacing[1] / 2}px 0 0;
      `}
    }

    ${props.validationMessage && css`
      background: ${props.theme.colours.lightGrey};
      padding: ${props.theme.spacing[2]}px;
      .styled-textarea,
      ${TextField},
      .styled-select {
        border: 2px solid ${props.theme.colours.red};
      }
    `}
  `,
)

export const ValidationMessage = styled.div((props: StyledFieldWrapperProps): FlattenSimpleInterpolation => css`
  font-family: 'Cera Pro Regular';
  color: ${props.theme.colours.red};
  font-size: ${props.theme.typography.paragraph[2].fontSize};
  display: flex;
  align-items: center;
  gap: ${props.theme.spacing[1]}px;
  margin-bottom: ${props.theme.spacing[1]}px;
`)
