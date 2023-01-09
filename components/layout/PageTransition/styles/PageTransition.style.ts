import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledPageTransitionProps } from './PageTransition.style.types'

export const PageTransition = styled.div((props: StyledPageTransitionProps): FlattenSimpleInterpolation => css`
  overflow: hidden;
`)
