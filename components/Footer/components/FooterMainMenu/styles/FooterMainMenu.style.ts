import type { FlattenSimpleInterpolation} from 'styled-components'
import styled, { css } from 'styled-components'

import type { StyledFooterMainMenuProps } from './FooterMainMenu.style.types'

export const FooterMainMenu = styled.ul(
  (props: StyledFooterMainMenuProps): FlattenSimpleInterpolation => css`
    color: ${props.theme.colours.white};
    display: flex;
    justify-content: space-between;
    gap: ${props.theme.spacing[4]}px;
  `,
)
