import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledVoucherCodeProps } from './VoucherCode.style.types'

export const VoucherCode = styled.div((props: StyledVoucherCodeProps): FlattenSimpleInterpolation => css`
  color: ${props.theme.colours.primary};
`)
