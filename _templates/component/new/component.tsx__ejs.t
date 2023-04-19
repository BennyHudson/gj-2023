---
to: components/<%= name %>/<%= name %>.tsx
---
import type { ReactElement, FC } from 'react'
import React from 'react'

import * as Styled from <%- `\'./styles/${name}.style\'` %>

import type { <%= name %>Props } from <%- `\'./${name}.types\'` %>

const <%= name %>: FC<<%= name %>Props> = ({
  // add props
}: <%= name %>Props): ReactElement => {
  return (
    <Styled.<%= name %>>
      Component <%= name %>
    </Styled.<%= name %>>
  )
}

export default <%= name %>
