import hexToRgba from 'hex-to-rgba'
import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import { Heading } from '@components/Heading/styles/Heading.style'
import { Newsletter } from '@components/Newsletter/styles/Newsletter.style'
import { Title } from '@components/Title/styles/Title.style'

import respondTo from '@mixins/respondTo'

import type { StyledNewsletterBannerProps } from './NewsletterBanner.style.types'

type NewsletterBannerProps = Pick<StyledNewsletterBannerProps, 'theme' | 'size' | 'headerHeight'>
export const NewsletterBanner = styled.div(
  (props: NewsletterBannerProps): FlattenSimpleInterpolation => css`
    background: ${props.theme.colours.lightGrey};
    position: relative;
    z-index: 1;

    ${Title} {
      width: 100%;
    }

    ${props.size === 2 &&
    css`
      ${respondTo.md(css`
        display: flex;
        align-items: center;
      `)}

      ${respondTo.lg(css`
        height: calc(100vh - ${props.headerHeight}px);
      `)}

      color: ${props.theme.colours.white};

      ${Heading}, a {
        color: ${props.theme.colours.white};
      }
    `}
  `,
)

type NewsletterBannerContentProps = Pick<StyledNewsletterBannerProps, 'backgroundImage' | 'theme' | 'size'>
export const NewsletterBannerContent = styled.div(
  (props: NewsletterBannerContentProps): FlattenSimpleInterpolation => css`
    width: 90%;
    background: url('${props.backgroundImage}') center left no-repeat;
    background-size: 50% auto;
    max-width: ${props.theme.containerWidth}px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(12, [col-start] 1fr);
    position: relative;
    z-index: 10;
    padding: ${props.theme.spacing[4]}px 0;

    ${props.size === 1 &&
    css`
      padding: 250px 0 ${props.theme.spacing[8]}px;
    `}

    ${respondTo.md(css`
      padding: ${props.theme.spacing[4]}px 0;
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
      position: relative;
      z-index: 1;

      ${respondTo.md(css`
        grid-column: col-start 7 / span 6;

        ${props.size === 2 &&
        css`
          grid-column: col-start 6 / span 7;
        `}
      `)}

      ${respondTo.lg(css`
        grid-column: col-start 9 / span 4;

        ${props.size === 2 &&
        css`
          grid-column: col-start 8 / span 5;
        `}
      `)}
    }

    ${Title} {
      ${respondTo.md(css`
        margin-bottom: 0;
      `)}
    }
  `,
)

type BackgroundImageProps = Pick<StyledNewsletterBannerProps, 'theme'>
export const BackgroundImage = styled.div(
  (props: BackgroundImageProps): FlattenSimpleInterpolation => css`
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
  `,
)
