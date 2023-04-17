import type { BreakpointKeys } from '@themes/gjTheme/constants/breakpoints.types'

export interface BreakpointTheme {
  breakpoints: ThemeBreakpoints
}

export type Callback = (arg: Breakpoints) => void

export type ThemeBreakpoints = Omit<Record<BreakpointKeys, number>, 'sm'>

export type QueryList = Omit<Record<BreakpointKeys, string>, 'sm'>
export interface Breakpoints extends Record<BreakpointKeys, boolean> {
  mdAndBelow: boolean
  mdAndAbove: boolean
  lgAndBelow: boolean
  lgAndAbove: boolean
  current: BreakpointKeys
}

export interface BreakpointWatcher {
  breakpoints: Breakpoints
  queries: Record<keyof Breakpoints, MediaQueryList>
  callbacks: Callback[]
}
