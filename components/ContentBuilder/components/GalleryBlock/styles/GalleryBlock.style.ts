import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledGalleryBlockProps } from './GalleryBlock.style.types'

export const GalleryBlock = styled.div((props: StyledGalleryBlockProps): FlattenSimpleInterpolation => css`
  grid-column: col-start / span 12;
  display: grid;
  gap: ${props.theme.spacing[2]}px;
  grid-template-columns: repeat(${props.imageCount}, 1fr);
  padding: ${props.theme.spacing[4]}px 0;
`)


export const GalleryImage = styled.img((): FlattenSimpleInterpolation => css`
  display: block;
  width: 100%;
`)

export const Caption = styled.div((props: StyledGalleryBlockProps): FlattenSimpleInterpolation => css`
  font-family: 'Cera Pro Regular', sans-serif;
  font-size: ${props.theme.typography.paragraph[2].fontSize};
  line-height: ${props.theme.typography.paragraph[2].lineHeight};
  transform: translateY(${props.theme.spacing[2]}px);
  padding: 0 ${props.theme.spacing[2]}px;
`)