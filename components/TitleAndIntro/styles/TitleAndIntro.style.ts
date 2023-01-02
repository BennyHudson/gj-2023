import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledTitleAndIntroProps } from './TitleAndIntro.style.types'

export const TitleAndIntro = styled.div((props: StyledTitleAndIntroProps): FlattenSimpleInterpolation => css`
  width: 90%;
  max-width: 800px;
  text-align: center;
  margin: 0 auto ${props.theme.spacing[8]}px;
`)
