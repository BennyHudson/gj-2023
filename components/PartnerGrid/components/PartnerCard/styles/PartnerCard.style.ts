import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledPartnerCardProps } from './PartnerCard.style.types'
import { Button } from '@components/Button/styles/Button.style'

export const PartnerCard = styled.div(
  (props: StyledPartnerCardProps): FlattenSimpleInterpolation => css`
    background: ${props.theme.colours.white};
    padding: ${props.theme.spacing[2]}px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: ${props.theme.spacing[2]}px;
    text-align: center;
    position: relative;

    ${Button} {
      margin-top: auto;
    }
  `,
)

export const DetailsPanel = styled.div(
  (props: StyledPartnerCardProps): FlattenSimpleInterpolation => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: ${props.theme.spacing[4]}px;
    background: ${props.theme.colours.black};
    border: 1px solid ${props.theme.colours.white};
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `,
)

export const CloseButton = styled.button(
  (props: StyledPartnerCardProps): FlattenSimpleInterpolation => css`
    position: absolute;
    top: ${props.theme.spacing[2]}px;
    right: ${props.theme.spacing[2]}px;
    background: none;
    border: none;
    color: ${props.theme.colours.white};
    cursor: pointer;
    z-index: 1;

    svg {
      width: 24px;
      height: 24px;
    }
  `,
)
