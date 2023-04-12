import type { FlattenSimpleInterpolation} from 'styled-components'
import styled, { css } from 'styled-components'

import respondTo from '@mixins/respondTo'

export const PageContentBlock = styled.div(
  (): FlattenSimpleInterpolation => css`
    width: 90%;
    margin: 0 auto;

    ${respondTo.md(css`
      width: 100%;
    `)}
  `,
)
