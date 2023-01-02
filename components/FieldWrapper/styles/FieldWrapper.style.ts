import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { TextArea } from '../../TextArea/styles/TextArea.style'
import { TextField } from '../../TextField/styles/TextField.style'
import { Select } from '../../Select/styles/Select.style'

import { StyledFieldWrapperProps } from './FieldWrapper.style.types'

export const FieldWrapper = styled.div((props: StyledFieldWrapperProps): FlattenSimpleInterpolation => css`
  margin-bottom: ${props.theme.spacing[4]}px;
  flex-grow: 1;

  ${TextField},
  ${Select} {
    min-height: 56px;
  }

  ${TextArea},
  ${TextField} {
    border: 1px solid ${props.theme.colours.midGrey};
    padding: ${props.theme.spacing[2]}px;
    font-size: ${props.theme.typography.heading[1].fontSize};
    flex-grow: 1;
    transition: 0.4s all ease;
    font-family: 'Chronicle Condensed Regular';
    background: none;
    width: 100%;

    &:focus {
      outline: 1px solid ${props.theme.colours.grey};
      border: 1px solid ${props.theme.colours.white};
    }
  }

  ${Select} {
    border: 1px solid ${props.theme.colours.midGrey};
    padding: ${props.theme.spacing[2]}px ${props.theme.spacing[4]}px ${props.theme.spacing[2]}px ${props.theme.spacing[2]}px;
    font-size: ${props.theme.typography.heading[1].fontSize};
    flex-grow: 1;
    transition: 0.4s all ease;
    font-family: 'Chronicle Condensed Regular';
    background: none;
    width: 100%;

    &:focus {
      outline: 1px solid ${props.theme.colours.grey};
      border: 1px solid ${props.theme.colours.white};
    }
  }
`)
