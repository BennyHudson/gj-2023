import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledSplitPageTemplateProps } from './SplitPageTemplate.style.types'
import { Newsletter } from '@components/Newsletter/styles/Newsletter.style'
import respondTo from '@mixins/respondTo'

export const SplitPageTemplate = styled.div(
  (props: StyledSplitPageTemplateProps): FlattenSimpleInterpolation => css`
    background: ${props.theme.colours.white};

    ${respondTo.md(css`
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
  (): FlattenSimpleInterpolation => css`
    grid-column: col-start / span 12;
    position: relative;
    aspect-ratio: 3 / 2;

    ${respondTo.md(css`
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

    ${respondTo.md(css`
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

    ${respondTo.md(css`
      margin-bottom: ${props.theme.spacing[8]}px;
    `)}
  `,
)
