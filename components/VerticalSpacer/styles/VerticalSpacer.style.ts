import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { Spacing } from '@themes/gjTheme/constants/spacing.types'

import { StyledVerticalSpacerProps } from './VerticalSpacer.style.types'

export const VerticalSpacer = styled.div((props: StyledVerticalSpacerProps): FlattenSimpleInterpolation => css`
  height: ${props.theme.spacing[props.spacingLevel as keyof Spacing]}px;
`)
