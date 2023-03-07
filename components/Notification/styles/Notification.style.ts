import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledNotificationProps } from './Notification.style.types'

export const Notification = styled.div(
  (props: StyledNotificationProps): FlattenSimpleInterpolation => css`
    background: ${props.theme.colours.lightGrey};
    padding: ${props.theme.spacing[1]}px ${props.theme.spacing[2]}px;
    font-size: ${props.theme.typography.paragraph[2].fontSize};
    line-height: ${props.theme.typography.paragraph[2].lineHeight};
    font-family: 'Cera Pro Regular';
    margin-bottom: ${props.theme.spacing[4]}px;
    border-top: 2px solid ${props.state === 'success' ? props.theme.colours.green : props.theme.colours.red};
    display: flex;
    align-items: center;
    gap: ${props.theme.spacing[1]}px;
  `,
)
