import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import { EditButton } from '@components/EditButton/styles/EditButton.style'

import type { StyledMyAccountProps } from './MyAccount.style.types'

export const MyAccount = styled.div((): FlattenSimpleInterpolation => [])

export const MyAccountHeader = styled.div(
  (props: StyledMyAccountProps): FlattenSimpleInterpolation => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: ${props.theme.spacing[4]}px;
    margin-bottom: ${props.theme.spacing[8]}px;

    ${EditButton} {
      margin-left: auto;
    }
  `,
)

export const Logout = styled.button(
  (props: StyledMyAccountProps): FlattenSimpleInterpolation => css`
    border: none;
    background: none;
    padding: 0 0 ${props.theme.spacing[1] / 2};
    border-bottom: 1px solid ${props.theme.colours.black};
    font-size: ${props.theme.typography.heading[1].fontSize};
    line-height: ${props.theme.typography.heading[1].lineHeight};
    color: ${props.theme.colours.black};
    cursor: pointer;
    font-family: 'Cera Pro Semibold';
  `,
)
