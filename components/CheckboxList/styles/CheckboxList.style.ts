import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledCheckboxListProps } from './CheckboxList.style.types'

export const CheckboxList = styled.div((props: StyledCheckboxListProps): FlattenSimpleInterpolation => css`
  color: ${props.theme.colours.primary};
`)
