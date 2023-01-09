import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledImageBlockProps } from './ImageBlock.style.types'

export const ImageBlock = styled.div((props: StyledImageBlockProps): FlattenSimpleInterpolation => css`
  grid-column: col-start / span 12;
  position: relative;

  ${props.imageSize === 'standard--full' && css`
    grid-column: col-start / span 12;

    img {
      width: 100%;
    }
  `}

  ${(props.imageSize === 'standard--tall' || props.imageSize === 'standard') && css`
    grid-column: col-start 3 / span 7;
  `}

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
  padding: 0 ${props.theme.spacing[2]}px;

  ${props.imageSize === 'standard--full' && css`
    grid-column: col-start / span 12;
  `}

  ${props.imageSize === 'standard--tall' && css`
    grid-column: col-start 3 / span 7;
  `}
`)
