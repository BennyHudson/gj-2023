import type { FlattenSimpleInterpolation} from 'styled-components'
import styled, { css } from 'styled-components'

import type { Spacing } from '@themes/gjTheme/constants/spacing.types'

import type { StyledVerticalSpacerProps } from './VerticalSpacer.style.types'

export const VerticalSpacer = styled.div(
  (props: StyledVerticalSpacerProps): FlattenSimpleInterpolation => css`
    height: ${props.theme.spacing[props.spacingLevel as keyof Spacing]}px;
  `,
)
