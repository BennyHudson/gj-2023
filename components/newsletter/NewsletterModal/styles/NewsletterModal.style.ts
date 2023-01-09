import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { Newsletter } from '@components/newsletter/Newsletter/styles/Newsletter.style'
import { Heading } from '@components/typography/Heading/styles/Heading.style'

import { StyledNewsletterModalProps } from './NewsletterModal.style.types'

export const NewsletterModal = styled.div((): FlattenSimpleInterpolation => css`
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  height: 100%;
  margin: 0 auto;
  align-items: stretch;
  align-self: stretch;
`)

export const BackgroundImage = styled.div((props: StyledNewsletterModalProps): FlattenSimpleInterpolation => css`
  background: url('${props.backgroundImage}') center center no-repeat;
  background-size: cover;
  grid-column: col-start / span 6;
`)

export const NewsletterWrapper = styled.div((props: StyledNewsletterModalProps): FlattenSimpleInterpolation => css`
  padding: 0 ${props.theme.spacing[8]}px;
  display: flex;
  align-items: center;
  grid-column: col-start 7 / span 5;

  ${Newsletter} {
    border-top: 1px solid ${props.theme.colours.midGrey};
    margin-top: ${props.theme.spacing[4]}px;
    padding-top: ${props.theme.spacing[4]}px;

    ${Heading} {
      display: none;
    }
  }
`)
