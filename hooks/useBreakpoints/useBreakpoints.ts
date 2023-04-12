import { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'

import { Theme } from '@themes/gjTheme/gjTheme.types'

import { addBreakpointCallback, breakpointWatcher, removeBreakpointCallback } from './helpers/breakpointTools'

export const useBreakpoints = () => {
  const [breakpoints, setBreakpoints] = useState(breakpointWatcher.breakpoints)
  const theme = useTheme() as Theme

  useEffect((): (() => void) => {
    addBreakpointCallback(setBreakpoints, theme.breakpoints)
    return (): void => removeBreakpointCallback(setBreakpoints)
  }, [])

  return breakpoints
}
