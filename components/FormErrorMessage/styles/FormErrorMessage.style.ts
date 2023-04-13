import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import type { StyledFormErrorMessageProps } from './FormErrorMessage.style.types'

export const FormErrorMessage = styled.div(
  (props: StyledFormErrorMessageProps): FlattenSimpleInterpolation => css`
    padding: ${props.theme.spacing[1]}px ${props.theme.spacing[2]}px;
    background: ${props.theme.colours.lightGrey};
    display: flex;
    justify-content: center;
    gap: ${props.theme.spacing[2]}px;
    align-items: center;
    color: ${props.theme.colours.red};
  `,
)
