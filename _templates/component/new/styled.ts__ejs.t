---
to: components/<%= name %>/styles/<%= name %>.style.ts
---
import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { Styled<%= name %>Props } from <%- `\'./${name}.style.types\'` %>

export const <%= name %> = styled.div((props: Styled<%= name %>Props): FlattenSimpleInterpolation => css`
  color: ${props.theme.colours.primary};
`)
