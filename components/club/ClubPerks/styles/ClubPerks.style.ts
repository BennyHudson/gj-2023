import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledClubPerksProps } from './ClubPerks.style.types'
import { Title } from '@components/typography/Title/styles/Title.style'

export const ClubPerks = styled.div((props: StyledClubPerksProps): FlattenSimpleInterpolation => css`
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  gap: ${props.theme.spacing[4]}px;

  ${Title} {
    grid-column: col-start 2 / span 10;  
    margin-bottom: 0;
  }
`)

export const Perk = styled.div((props: StyledClubPerksProps): FlattenSimpleInterpolation => css`
  background: #202020;
  grid-column: col-start 2 / span 10;
  display: flex;
  flex-direction: row;
  font-size: ${props.theme.typography.paragraph[2].fontSize};
  line-height: ${props.theme.typography.paragraph[2].lineHeight};
  height: 430px;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }
`)

export const PerkContent = styled.div((props: StyledClubPerksProps): FlattenSimpleInterpolation => css`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: ${props.theme.spacing[4]}px;
  padding: ${props.theme.spacing[8]}px;
  align-self: center;
`)

export const ImageWrapper = styled.div((props: StyledClubPerksProps): FlattenSimpleInterpolation => css`
  position: relative;
  width: 60%;

  img {
    object-fit: contain;
  }
`)