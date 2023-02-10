import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledPaywallProps } from './Paywall.style.types'
import respondTo from '@mixins/respondTo'
import { Section } from '@components/Section/styles/Section.style'
import { Title } from '@components/Title/styles/Title.style'

export const Paywall = styled.div((props: StyledPaywallProps): FlattenSimpleInterpolation => css`
  grid-column: col-start / span 12;
  margin: 0 5%;
  border: 1px solid ${props.theme.colours.midGrey};
  padding: ${props.theme.spacing[4]}px ${props.theme.spacing[2]}px ${props.theme.spacing[2]}px;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${props.theme.spacing[2]}px;

  ${respondTo.md(css`
    margin: 0;
    grid-column: col-start 2 / span 10;
  `)}

  ${respondTo.lg(css`
    grid-column: col-start 2 / span 9;   
  `)}

  ${Section} {
    padding: ${props.theme.spacing[4]}px 0 !important;
  }

  ${Title} {
    justify-content: center;
  }
`)

export const Buttons = styled.div((props: StyledPaywallProps): FlattenSimpleInterpolation => css`
  display: flex;
  justify-content: center;
  gap: ${props.theme.spacing[2]}px;
`)
