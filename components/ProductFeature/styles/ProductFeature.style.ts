import type { FlattenSimpleInterpolation} from 'styled-components'
import styled, { css } from 'styled-components'

import respondTo from '@mixins/respondTo'

import type { StyledProductFeatureProps } from './ProductFeature.style.types'

export const ProductFeature = styled.div(
  (props: StyledProductFeatureProps): FlattenSimpleInterpolation => css`
    background: ${props.theme.colours.lightGrey};

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

export const ProductImage = styled.div(
  (props: StyledProductFeatureProps): FlattenSimpleInterpolation => css`
    grid-column: col-start / span 12;
    position: relative;
    background: ${props.theme.colours.black};
    padding: ${props.theme.spacing[4]}px;
    display: flex;
    align-items: center;
    justify-content: center;

    ${respondTo.md(css`
      grid-column: col-start / span 5;
      aspect-ratio: unset;
      padding: 0 ${props.theme.spacing[8]}px;
    `)}

    img {
      object-fit: contain;
      max-height: calc(100% - ${props.theme.spacing[8] * 2}px);
    }
  `,
)

export const ProductContent = styled.div(
  (props: StyledProductFeatureProps): FlattenSimpleInterpolation => css`
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
  `,
)

export const ContentWrapper = styled.div(
  (props: StyledProductFeatureProps): FlattenSimpleInterpolation => css`
    max-width: 800px;
    display: flex;
    flex-direction: column;
    gap: ${props.theme.spacing[2]}px;
    align-items: flex-start;

    ${respondTo.md(css`
      gap: ${props.theme.spacing[8]}px;
    `)}
  `,
)
