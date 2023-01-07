import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledThumbnailProps } from './Thumbnail.style.types'

export const Thumbnail = styled.div((props: StyledThumbnailProps): FlattenSimpleInterpolation => css`
  background: ${props.theme.colours.lightGrey};
  aspect-ratio: 3 / 2;
  position: relative;
  width: 100%;
  overflow: hidden;
  display: block;

  ${props.type === 'square' && css`
    aspect-ratio: 1 / 1;
  `}

  ${props.type === 'circle' && css`
    aspect-ratio: 1 / 1;
    border-radius: 50%;

    ${props.size === 1 && css`
      max-width: 80px;
    `}

    ${props.size === 2 && css`
      max-width: 124px;
    `}

    ${props.size === 3 && css`
      max-width: 200px;
    `}
  `}
  
  &::after {
    transition: 0.4s all ease;
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    opacity: 0;
    z-index: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: ${props.contain ? 'contain' : 'cover'};
    transition: 1s all ease;
  }

  ${props.href && css`
    &:hover {
      &::before {
        transform: scale(1.1);
      }

      img {
        transform: scale(1.1);
      }

      &::after {
        opacity: 1;
      }
    }
  `}
`)

export const ThumbnailContent = styled.div((props: StyledThumbnailProps): FlattenSimpleInterpolation => css`
  position: absolute;
  width: 100%;
  height: 50%;
  z-index: 2;
  top: 50%;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${props.theme.spacing[4]}px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 100%);
`)
