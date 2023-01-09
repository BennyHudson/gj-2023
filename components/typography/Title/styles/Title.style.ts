import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledTitleProps } from './Title.style.types'

export const Title = styled.div((props: StyledTitleProps): FlattenSimpleInterpolation => css`
  border-bottom: 1px solid ${props.theme.colours.midGrey};
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-bottom: ${props.theme.spacing[2]}px;
  gap: ${props.theme.spacing[2]}px;
  margin-bottom: ${props.theme.spacing[4]}px;

  ${props.inverse && css`
    border-bottom: 1px solid ${props.theme.colours.white};
  `}
`)

export const LinkList = styled.ul((props: StyledTitleProps): FlattenSimpleInterpolation => css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${props.theme.spacing[2]}px;
`)