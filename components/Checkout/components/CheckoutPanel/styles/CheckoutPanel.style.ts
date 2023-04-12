import type { FlattenSimpleInterpolation} from 'styled-components'
import styled, { css } from 'styled-components'

import { EditButton } from '@components/EditButton/styles/EditButton.style'
import { Label } from '@components/Label/styles/Label.style'

import type { StyledCheckoutPanelProps } from './CheckoutPanel.style.types'

export const CheckoutHeader = styled.div(
  (props: StyledCheckoutPanelProps): FlattenSimpleInterpolation => css`
    display: flex;
    gap: ${props.theme.spacing[4]}px;
    margin-bottom: ${props.theme.spacing[4]}px;
    justify-content: space-between;
    align-items: center;

    svg {
      width: 16px;
    }

    &:last-child {
      margin-bottom: 0;
    }
  `,
)

export const CheckoutPanel = styled.div(
  (props: StyledCheckoutPanelProps): FlattenSimpleInterpolation => css`
    border-bottom: 1px solid ${props.theme.colours.black};
    padding-bottom: ${props.theme.spacing[4]}px;

    & > div {
      flex-grow: 1;
    }

    &:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }

    ${Label} {
      font-family: 'Cera Pro Regular' !important;
      margin-bottom: ${props.theme.spacing[1]}px !important;
    }

    ${EditButton} {
      margin-bottom: ${props.theme.spacing[8]}px;
      display: block;

      &:last-child {
        margin-bottom: 0;
      }
    }
  `,
)

export const IconButton = styled.button(
  (props: StyledCheckoutPanelProps): FlattenSimpleInterpolation => css`
    border: none;
    background: none;
    padding: ${props.theme.spacing[1]}px;
    border-radius: 0;
    cursor: pointer;
    background: none;
    border: none;
    font-size: ${props.theme.typography.paragraph[2].fontSize};
    line-height: ${props.theme.typography.paragraph[2].fontSize};
    color: ${props.theme.colours.black};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.4s all ease;
    gap: ${props.theme.spacing[1]}px;
    font-family: 'Cera Pro Light', sans-serif;
  `,
)
