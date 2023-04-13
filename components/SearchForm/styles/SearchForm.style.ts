import { Field, Form } from 'formik'
import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import type { StyledSearchFormProps } from './SearchForm.style.types'

export const SearchWrapper = styled.div(
  (): FlattenSimpleInterpolation => css`
    width: 100%;
  `,
)

export const SearchForm = styled(Form)(
  (props: StyledSearchFormProps): FlattenSimpleInterpolation => css`
    display: flex;
    width: 100%;
    margin-bottom: ${props.theme.spacing[8]}px;

    &:last-child {
      margin-bottom: 0;
    }
  `,
)

export const Label = styled.label(
  (): FlattenSimpleInterpolation => css`
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  `,
)

export const Submit = styled.button(
  (props: StyledSearchFormProps): FlattenSimpleInterpolation => css`
    background: none;
    padding: 0;
    border: none;
    font-size: ${props.theme.typography.heading[2].fontSize};
    line-height: ${props.theme.typography.heading[2].fontSize};
    color: ${props.theme.colours.black};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.4s all ease;
    aspect-ratio: 1 / 1;
    width: 62px;
    height: 62px;

    &:hover {
      background: ${props.theme.colours.midGrey};
    }

    ${props.loading &&
    css`
      background: ${props.theme.colours.midGrey};
      box-shadow: 0 0 0 2px ${props.theme.colours.midGrey};
    `}

    svg {
      width: 18px;
    }
  `,
)

export const TextField = styled(Field)(
  (props: StyledSearchFormProps): FlattenSimpleInterpolation => css`
    border: none;
    border-bottom: 1px solid ${props.theme.colours.black};
    padding: ${props.theme.spacing[2]}px;
    font-size: ${props.theme.typography.heading[2].fontSize};
    flex-grow: 1;
    transition: 0.4s all ease;
    font-family: 'Chronicle Condensed Regular';
    background: none;

    &:focus {
      outline: 2px solid ${props.theme.colours.midGrey};
      border-bottom: 1px solid ${props.theme.colours.white};

      & ~ ${Submit} {
        background: ${props.theme.colours.midGrey};
        box-shadow: 0 0 0 2px ${props.theme.colours.midGrey};
      }
    }

    ${props.loading &&
    css`
      outline: 2px solid ${props.theme.colours.midGrey};
      border-bottom: 1px solid ${props.theme.colours.white};
    `}
  `,
)
