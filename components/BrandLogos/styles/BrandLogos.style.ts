import type { FlattenSimpleInterpolation} from 'styled-components'
import styled, { css } from 'styled-components'

import type { StyledBrandLogosProps } from './BrandLogos.style.types'

export const BrandLogos = styled.div((props: StyledBrandLogosProps): FlattenSimpleInterpolation => css`
  color: ${props.theme.colours.primary};
`)
