import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { Section } from '@components/Section/styles/Section.style'

import { StyledClubOverviewProps } from './ClubOverview.style.types'
import respondTo from '@mixins/respondTo'

export const ClubOverview = styled.div(
  (props: StyledClubOverviewProps): FlattenSimpleInterpolation => css`
    ${Section} {
      padding: ${props.theme.spacing[4]}px 0;

      ${respondTo.md(css`
        padding: ${props.theme.spacing[8]}px 0;
      `)}
    }
  `,
)

export const ClubOverviewGrid = styled.div(
  (props: StyledClubOverviewProps): FlattenSimpleInterpolation => css`
    display: grid;
    gap: ${props.theme.spacing[4]}px;
    grid-template-columns: repeat(1, 1fr);
    width: 90%;
    margin: 0 auto;

    ${respondTo.md(css`
      grid-template-columns: repeat(3, 1fr);
      gap: 0;
    `)}

    ${respondTo.lg(css`
      width: 100%;
    `)}
  `,
)

export const Item = styled.div((props: StyledClubOverviewProps): FlattenSimpleInterpolation => css`
  // aspect-ratio: 3 / 2;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  padding: ${props.theme.spacing[4]}px;
  border-right: 1px solid ${props.theme.colours.midGrey};
  border-top: 1px solid ${props.theme.colours.midGrey};
  flex-direction: column;
  gap: ${props.theme.spacing[4]}px;

  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(3) {
    border-top: none;
  }

  &:nth-child(3n) {
    border-right: none;
  }
`)

export const Index = styled.div((props: StyledClubOverviewProps): FlattenSimpleInterpolation => css`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${props.theme.spacing[1]}px;
  border: 1px solid ${props.theme.colours.black};
  border-radius: 50%;
  font-size: ${props.theme.typography.heading[1].fontSize};
  line-height: ${props.theme.typography.heading[1].lineHeight};
  width: 44px;
  height: 44px;
  font-family: 'Cera Pro Regular';
`)
