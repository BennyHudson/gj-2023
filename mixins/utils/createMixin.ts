import { css, FlattenSimpleInterpolation } from 'styled-components'

import { Theme } from '@themes/gjTheme/gjTheme.types'

export default (fn: (theme: Theme, ...params: unknown[]) => FlattenSimpleInterpolation) => {
  return (...args: unknown[]): FlattenSimpleInterpolation =>
    css`
      ${({ theme }: { theme: Theme }): FlattenSimpleInterpolation => {
        return fn(theme, ...args)
      }}
    ` as FlattenSimpleInterpolation
}
