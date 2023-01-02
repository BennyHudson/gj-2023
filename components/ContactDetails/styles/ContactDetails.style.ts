import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledContactDetailsProps } from './ContactDetails.style.types'

export const ContactDetails = styled.div((props: StyledContactDetailsProps): FlattenSimpleInterpolation => css`
  color: ${props.theme.colours.black};
`)
