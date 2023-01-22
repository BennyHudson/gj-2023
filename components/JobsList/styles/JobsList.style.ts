import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledJobsListProps } from './JobsList.style.types'

export const JobsList = styled.div((props: StyledJobsListProps): FlattenSimpleInterpolation => css`
  display: grid;
  gap: ${props.theme.spacing[4]}px;
  grid-template-columns: repeat(12, [col-start] 1fr);
`)

export const Content = styled.div((): FlattenSimpleInterpolation => css`
  grid-column: col-start / span 3;
`)

export const JobContent = styled.div((): FlattenSimpleInterpolation => css`
  grid-column: col-start 4 / span 9;
`)

export const Jobs = styled.div((props: StyledJobsListProps): FlattenSimpleInterpolation => css`
  display: flex;
  flex-direction: column;
  gap: ${props.theme.spacing[4]}px;
`)

export const Job = styled.div((props: StyledJobsListProps): FlattenSimpleInterpolation => css`
  border-bottom: 1px solid ${props.theme.colours.midGrey};
  padding-bottom: ${props.theme.spacing[4]}px;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`)
