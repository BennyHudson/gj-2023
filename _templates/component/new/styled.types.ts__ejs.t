---
to: components/<%= name %>/styles/<%= name %>.style.types.ts
---
import type { Theme } from '@themes/gjTheme/gjTheme.types'

export interface Styled<%= name %>Props {
  theme: Theme
}
