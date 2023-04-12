import type { FlattenSimpleInterpolation} from 'styled-components'
import styled, { css } from 'styled-components'

import { Newsletter } from '@components/Newsletter/styles/Newsletter.style'

import respondTo from '@mixins/respondTo'

import type { StyledSplitPageTemplateProps } from './SplitPageTemplate.style.types'

export const SplitPageTemplate = styled.div(
  (props: StyledSplitPageTemplateProps): FlattenSimpleInterpolation => css`
    background: ${props.theme.colours.white};

    ${respondTo.lg(css`
      display: grid;
      grid-template-columns: repeat(12, [col-start] 1fr);
      height: calc(100vh - ${props.headerHeight}px);
      width: 100%;
      margin: 0 auto;
      align-items: stretch;
      align-self: stretch;
    `)}
  `,
)

export const BackgroundImage = styled.div(
  (props: StyledSplitPageTemplateProps): FlattenSimpleInterpolation => css`
    grid-column: col-start / span 12;
    position: relative;
    aspect-ratio: 3 / 2;
    background: url('${props.backgroundImage}') center center no-repeat;
    background-size: cover;

    ${respondTo.lg(css`
      grid-column: col-start / span 5;
      aspect-ratio: unset;
    `)}

    img {
      object-fit: cover;
    }
  `,
)

export const Content = styled.div(
  (props: StyledSplitPageTemplateProps): FlattenSimpleInterpolation => css`
    padding: ${props.theme.spacing[4]}px 5%;
    display: flex;
    align-items: flex-start;
    overflow: auto;
    grid-column: col-start / span 12;

    ${respondTo.lg(css`
      padding: ${props.theme.spacing[8]}px;
      grid-column: col-start 6 / span 7;
    `)}

    & > div {
      width: 100%;
      margin: auto 0;
    }

    ${Newsletter} {
      padding-top: ${props.theme.spacing[4]}px;
    }
  `,
)

export const ContentWrapper = styled.div(
  (): FlattenSimpleInterpolation => css`
    max-width: 800px;
  `,
)

export const Title = styled.div(
  (props: StyledSplitPageTemplateProps): FlattenSimpleInterpolation => css`
    margin-bottom: ${props.theme.spacing[4]}px;

    ${respondTo.lg(css`
      margin-bottom: ${props.theme.spacing[8]}px;
    `)}
  `,
)
