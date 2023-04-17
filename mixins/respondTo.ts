/* eslint-disable import/no-anonymous-default-export, @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import type { FlattenSimpleInterpolation } from 'styled-components'
import { css } from 'styled-components'

import type { Theme } from '@themes/gjTheme/gjTheme.types'

import type { MixinRespondToGeneric } from './respondTo.types'
import createMixin from './utils/createMixin'

function getMdBreakpoint(theme: Theme, styles: FlattenSimpleInterpolation): FlattenSimpleInterpolation {
  return css`
    @media (min-width: ${theme.breakpoints.md}px) {
      ${styles}
    }
  `
}

function getLgBreakpoint(theme: Theme, styles: FlattenSimpleInterpolation): FlattenSimpleInterpolation {
  return css`
    @media (min-width: ${theme.breakpoints.lg}px) {
      ${styles}
    }
  `
}

function getXlBreakpoint(theme: Theme, styles: FlattenSimpleInterpolation): FlattenSimpleInterpolation {
  return css`
    @media (min-width: ${theme.breakpoints.xl}px) {
      ${styles}
    }
  `
}

const md = createMixin((theme: Theme, styles: FlattenSimpleInterpolation): FlattenSimpleInterpolation => {
  return getMdBreakpoint(theme, styles)
}) as MixinRespondToGeneric

const lg = createMixin((theme: Theme, styles: FlattenSimpleInterpolation): FlattenSimpleInterpolation => {
  return getLgBreakpoint(theme, styles)
}) as MixinRespondToGeneric

const xl = createMixin((theme: Theme, styles: FlattenSimpleInterpolation): FlattenSimpleInterpolation => {
  return getXlBreakpoint(theme, styles)
}) as MixinRespondToGeneric

export default { md, lg, xl }
