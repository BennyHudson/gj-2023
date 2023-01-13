import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { Newsletter } from '@components/newsletter/Newsletter/styles/Newsletter.style'

import { StyledNewsletterBannerProps } from './NewsletterBanner.style.types'

export const NewsletterBanner = styled.div((props: StyledNewsletterBannerProps): FlattenSimpleInterpolation => css`
  background: ${props.theme.colours.lightGrey};
  position: relative;
  z-index: 1;
`)

export const NewsletterBannerContent = styled.div((props: StyledNewsletterBannerProps): FlattenSimpleInterpolation => css`
  width: 90%;
  background: url('${props.backgroundImage}') center left no-repeat;
  background-size: 50% auto;
  max-width: ${props.theme.containerWidth}px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  padding: ${props.theme.spacing[8]}px 0;
  position: relative;

  img {
    width: 65% !important;
    object-fit: cover;
    left: -10% !important;
  }

  ${Newsletter} {
    grid-column: col-start 9 / span 4;
  }
`)
