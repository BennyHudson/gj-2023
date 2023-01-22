import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import hexToRgba from 'hex-to-rgba'

import { Newsletter } from '@components/Newsletter/styles/Newsletter.style'

import { StyledNewsletterBannerProps } from './NewsletterBanner.style.types'
import respondTo from '@mixins/respondTo'
import { Heading } from '@components/Heading/styles/Heading.style'

export const NewsletterBanner = styled.div((props: StyledNewsletterBannerProps): FlattenSimpleInterpolation => css`
  background: ${props.theme.colours.lightGrey};
  position: relative;
  z-index: 1;

  ${props.size === 2 && css`
    height: calc(100vh - ${props.headerHeight}px);
    display: flex;
    align-items: center;

    ${Heading} {
      color: ${props.theme.colours.white};
    }
  `}
`)

export const NewsletterBannerContent = styled.div((props: StyledNewsletterBannerProps): FlattenSimpleInterpolation => css`
  width: 90%;
  background: url('${props.backgroundImage}') center left no-repeat;
  background-size: 50% auto;
  max-width: ${props.theme.containerWidth}px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  padding: 250px 0 ${props.theme.spacing[8]}px;
  position: relative;
  z-index: 10;

  ${respondTo.md(css`
    padding: ${props.theme.spacing[8]}px 0;
  `)}

  img {
    object-fit: contain;
    bottom: unset !important;
    height: 250px !important;

    ${respondTo.md(css`
      height: 100% !important;
      object-fit: cover;
      width: 65% !important;
      left: -10% !important;
    `)}
  }

  ${Newsletter} {
    grid-column: col-start / span 12;

    ${respondTo.md(css`
      grid-column: col-start 9 / span 4;

      ${props.size === 2 && css`
        grid-column: col-start 8 / span 5;
      `}
    `)}
  }
`)

export const BackgroundImage = styled.div((props: StyledNewsletterBannerProps): FlattenSimpleInterpolation => css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 400px;
    background: linear-gradient(to bottom, ${hexToRgba(props.theme.colours.black, 0)}, ${props.theme.colours.black});
  }

  img {
    object-fit: cover;
  }
`)