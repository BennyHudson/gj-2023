import type { FlattenSimpleInterpolation} from 'styled-components'
import styled, { css } from 'styled-components'

import type { StyledVoucherCodeProps } from './VoucherCode.style.types'

export const VoucherCode = styled.div(
  (props: StyledVoucherCodeProps): FlattenSimpleInterpolation => css`
    color: ${props.theme.colours.primary};
  `,
)
