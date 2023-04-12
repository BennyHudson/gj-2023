---
to: components/<%= name %>/styles/<%= name %>.style.ts
---
import type { FlattenSimpleInterpolation} from 'styled-components'
import styled, { css } from 'styled-components'

import type { Styled<%= name %>Props } from <%- `\'./${name}.style.types\'` %>

export const <%= name %> = styled.div((props: Styled<%= name %>Props): FlattenSimpleInterpolation => css`
  color: ${props.theme.colours.primary};
`)
