import debounce from 'lodash/debounce'

const baseBreakpoints = ['md', 'lg', 'xl']

// Tracks breakpoint matches, queries and callbacks
export const breakpointWatcher = {
  breakpoints: {
    sm: false,
    md: false,
    lg: false,
    xl: false,
    mdAndBelow: false,
    mdAndAbove: false,
    lgAndBelow: false,
    lgAndAbove: false,
  },
  queries: {},
  callbacks: [],
}

// Used to initialise the breakpoint list
export const getQueryList = (themeBreakpoints) => {
  const { md, lg, xl } = themeBreakpoints
  return {
    md: `(min-width: ${md}px) and (max-width: ${lg - 1}px)`,
    lg: `(min-width: ${lg}px) and (max-width: ${xl - 1}px)`,
    xl: `(min-width: ${xl}px)`,
  }
}

// Used to override the real breakpoints with the docsite version
export const getDocSiteBreakpoints = (sgBreakpoint: string) => ({
  ...breakpointWatcher.breakpoints,
  ...baseBreakpoints.reduce(
    (newBreakpoints, thisBreakpoint) => ({
      [thisBreakpoint]: thisBreakpoint === sgBreakpoint,
      ...newBreakpoints,
    }),
    {},
  ),
})

// Calls all callbacks
export const callCallbacks = (): void => breakpointWatcher.callbacks.forEach((callback) => callback(breakpointWatcher.breakpoints))

// Debounces callbacks so they are not called twice at a breakpoint boundary
export const debouncedCallBacks = debounce(callCallbacks)

// Updates the breakpointWatcher when media listener is fired
export const updateMatchedBreakpoints = (e: MediaQueryList | MediaQueryListEvent, breakpoint): void => {
  const { sgBreakpoint } = window
  breakpointWatcher.breakpoints[breakpoint] = e.matches
  if (sgBreakpoint) breakpointWatcher.breakpoints = getDocSiteBreakpoints(sgBreakpoint)
  const { md, lg, xl } = breakpointWatcher.breakpoints
  const sm = !(md || lg || xl)
  breakpointWatcher.breakpoints = {
    ...breakpointWatcher.breakpoints,
    sm,
    mdAndBelow: sm || md,
    mdAndAbove: md || lg || xl,
    lgAndBelow: sm || md || lg,
    lgAndAbove: lg || xl,
  }
  debouncedCallBacks()
}

// Set up the match media queries (only happens once)
export const setUpQueries = (themeBreakpoints): void => {
  const queryList = getQueryList(themeBreakpoints)
  baseBreakpoints.forEach((breakpoint) => {
    const handleListener = (e: MediaQueryListEvent | MediaQueryList): void => updateMatchedBreakpoints(e, breakpoint)
    breakpointWatcher.queries[breakpoint] = window.matchMedia(queryList[breakpoint])
    breakpointWatcher.queries[breakpoint].addListener(handleListener)
    handleListener(breakpointWatcher.queries[breakpoint])
  })
}

// Add a callback to the queue
export const addBreakpointCallback = (callback, themeBreakpoints): void => {
  if (!breakpointWatcher.queries.sm) setUpQueries(themeBreakpoints)
  breakpointWatcher.callbacks.push(callback)
  debouncedCallBacks()
}

// Remove a callback from the queue
export const removeBreakpointCallback = (oldCallback): void => {
  breakpointWatcher.callbacks = breakpointWatcher.callbacks.filter((callback) => callback !== oldCallback)
}
