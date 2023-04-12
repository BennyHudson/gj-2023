---
to: components/<%= name %>/<%= name %>.tsx
---
import React from 'react'
import type { ReactElement, FC } from 'react'

import type { <%= name %>Props } from <%- `\'./${name}.types\'` %>

import * as Styled from <%- `\'./styles/${name}.style\'` %>

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
