import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { GalleryBlock } from '../../GalleryBlock/styles/GalleryBlock.style'

import { StyledImageBlockProps } from './ImageBlock.style.types'

export const ImageBlock = styled.div((props: StyledImageBlockProps): FlattenSimpleInterpolation => css`
  grid-column: col-start / span 12;
  // background: ${props.theme.colours.lightGrey};
  // padding: ${props.theme.spacing[4]}px 0;
  position: relative;

  ${props.imageSize === 'standard--full' && css`
    grid-column: col-start / span 12;
  `}

  ${(props.imageSize === 'standard--tall' || props.imageSize === 'standard') && css`
    grid-column: col-start 3 / span 7;
  `}

  /* & + ${GalleryBlock} {
    padding-top: 0;
    margin-top: -${props.theme.spacing[2]}px;
  } */

  img {
    object-fit: contain;
  }
`)

export const Image = styled.img((): FlattenSimpleInterpolation => css`
  display: block;
  width: 100%;
`)

export const Caption = styled.div((props: StyledImageBlockProps): FlattenSimpleInterpolation => css`
  font-family: 'Cera Pro Regular', sans-serif;
  font-size: ${props.theme.typography.paragraph[2].fontSize};
  line-height: ${props.theme.typography.paragraph[2].lineHeight};
  transform: translateY(${props.theme.spacing[2]}px);
  padding: 0 ${props.theme.spacing[2]}px;

  ${props.imageSize === 'standard--full' && css`
    grid-column: col-start / span 12;
  `}

  ${props.imageSize === 'standard--tall' && css`
    grid-column: col-start 3 / span 7;
  `}
`)
