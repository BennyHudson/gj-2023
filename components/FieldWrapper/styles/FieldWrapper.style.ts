import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { TextArea } from '../../TextArea/styles/TextArea.style'
import { TextField } from '../../TextField/styles/TextField.style'
import { Select } from '../../Select/styles/Select.style'
import { Label } from '@components/Label/styles/Label.style'

import { StyledFieldWrapperProps } from './FieldWrapper.style.types'

export const FieldWrapper = styled.div((props: StyledFieldWrapperProps): FlattenSimpleInterpolation => css`
  margin-bottom: ${props.theme.spacing[4]}px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  ${props.labelPlacement === 'INHERIT' && css`
    flex-direction: column-reverse;
  `}

  ${TextField},
  ${Select} {
    min-height: 56px;
  }

  ${TextArea},
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

  ${Select} {
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

    ${props.labelPlacement === 'INHERIT' && css`
      font-family: 'Cera Pro Regular';
      font-size: 16px;
      line-height: 24px;
      padding: ${props.theme.spacing[1] / 2}px ${props.theme.spacing[2]}px 0;
    `}
  }
`)
