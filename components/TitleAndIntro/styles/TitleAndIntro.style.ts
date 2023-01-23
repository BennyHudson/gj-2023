import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledTitleAndIntroProps } from './TitleAndIntro.style.types'
import respondTo from '@mixins/respondTo'

export const TitleAndIntro = styled.div(
  (props: StyledTitleAndIntroProps): FlattenSimpleInterpolation => css`
    width: 90%;
    max-width: 800px;
    text-align: center;
    margin: 0 auto ${props.theme.spacing[4]}px;

    ${respondTo.md(css`
      margin: 0 auto ${props.theme.spacing[8]}px;
    `)}
  `,
)
