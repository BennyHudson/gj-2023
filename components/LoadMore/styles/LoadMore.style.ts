import type { FlattenSimpleInterpolation} from 'styled-components'
import styled, { css } from 'styled-components'

import type { StyledLoadMoreProps } from './LoadMore.style.types'

export const LoadMore = styled.div(
  (props: StyledLoadMoreProps): FlattenSimpleInterpolation => css`
    padding: ${props.theme.spacing[8]}px 0 0;
    display: flex;
    justify-content: center;
  `,
)
