import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledHouseNoteExcerptProps } from './HouseNoteExcerpt.style.types'

export const HouseNoteExcerpt = styled.div((props: StyledHouseNoteExcerptProps): FlattenSimpleInterpolation => css`
  display: flex;
  margin-bottom: ${props.theme.spacing[2]}px;
  border-bottom: 1px solid ${props.theme.colours.midGrey};
  padding-bottom: ${props.theme.spacing[2]}px;
  position: relative;
  flex-direction: column;
  gap: ${props.theme.spacing[1]}px;

  &:last-child {
    margin-bottom: 0;
    border-bottom: none;
    padding-bottom: 0;
  }
`)

export const ArticleType = styled.div((props: StyledHouseNoteGridProps): FlattenSimpleInterpolation => css`
  font-size: ${props.theme.typography.paragraph[2].fontSize};
  line-height: ${props.theme.typography.paragraph[2].lineHeight};
  font-family: 'Cera Pro Bold';

  span {
    display: inline-block;
    border-bottom: 2px solid ${props.theme.colours.yellow};
  }

  &::before,
  &::after {
    display: inline-block;
  }

  &::before {
    content: '(';
  }

  &::after {
    content: ')';
  }
`)

export const Footer = styled.div((props: StyledHouseNoteExcerptProps) => css`
  display: flex;
  justify-content: space-between;
  gap: ${props.theme.spacing[2]}px;
`)
