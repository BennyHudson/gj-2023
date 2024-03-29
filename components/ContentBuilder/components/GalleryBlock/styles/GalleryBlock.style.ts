import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import respondTo from '@mixins/respondTo'

import type { StyledGalleryBlockProps } from './GalleryBlock.style.types'
import { ImageBlock } from '../../ImageBlock/styles/ImageBlock.style'

export const GalleryBlock = styled.div(
  (props: StyledGalleryBlockProps): FlattenSimpleInterpolation => css`
    grid-column: col-start / span 12;
    display: grid;
    gap: ${props.theme.spacing[2]}px;
    grid-template-columns: repeat(1, 1fr);
    // padding: ${props.theme.spacing[4]}px 0;
    position: relative;

    ${respondTo.md(css`
      gap: ${props.theme.spacing[4]}px;
      grid-template-columns: repeat(${props.imageCount}, 1fr);
    `)}/* & + ${ImageBlock} {
    padding-top: 0;
    margin-top: -${props.theme.spacing[7]}px;
  } */
  `,
)

export const GalleryImage = styled.img(
  (): FlattenSimpleInterpolation => css`
    display: block;
    width: 100%;
    position: relative;
  `,
)

type CaptionProps = Pick<StyledGalleryBlockProps, 'theme'>
export const Caption = styled.div(
  (props: CaptionProps): FlattenSimpleInterpolation => css`
    font-family: 'Cera Pro Regular', sans-serif;
    font-size: ${props.theme.typography.paragraph[2].fontSize};
    line-height: ${props.theme.typography.paragraph[2].lineHeight};
    transform: translateY(${props.theme.spacing[2]}px);
    padding: 0 ${props.theme.spacing[2]}px;
  `,
)
