import styled, { css, FlattenSimpleInterpolation, createGlobalStyle } from 'styled-components'

import { StyledNewsletterModalProps } from './NewsletterModal.style.types'
import respondTo from '@mixins/respondTo'
import { Title } from '@components/Title/styles/Title.style'

export const HideOverflow = createGlobalStyle((): FlattenSimpleInterpolation => css`
  html,
  body {
    overflow: hidden;
  }
`)

export const NewsletterModal = styled.div((props: StyledNewsletterModalProps): FlattenSimpleInterpolation => css`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
`)

export const ModalWrapper = styled.div((props: StyledNewsletterModalProps): FlattenSimpleInterpolation => css`
  background: ${props.theme.colours.white};
  width: 90%;
  max-width: ${props.theme.containerWidth}px;
  aspect-ratio: 4 / 2;
  position: relative;
  z-index: 20;
  box-shadow: 0 0 20px 0 rgba(0,0,0,0.6);
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  ${respondTo.md(css`
    grid-template-columns: repeat(2, 1fr);
  `)}
`)

export const Column = styled.div((props: StyledNewsletterModalProps): FlattenSimpleInterpolation => css`
  padding: ${props.theme.spacing[2]}px;
  display: flex;
  align-items: center;

  ${respondTo.md(css`
    padding: ${props.theme.spacing[8]}px;
  `)}

  ${props.backgroundImage && css`
    background: url('${props.backgroundImage}') center center no-repeat;
    background-size: cover;
    min-height: 200px;
    padding: 0;
  `}

  ${Title} {
    width: 100%;
  }
  
  & > * {
    width: 100%;
  }
`)

export const IconButton = styled.button((props: StyledNewsletterModalProps): FlattenSimpleInterpolation => css`
  position: absolute;
  top: ${props.theme.spacing[1]}px;
  right: ${props.theme.spacing[1]}px;
  background: none;
  border: none;
  padding: 0;
  width: ${props.theme.spacing[4]}px;
  height: ${props.theme.spacing[4]}px;
  cursor: pointer;
  color: ${props.theme.colours.white};

  ${respondTo.md(css`
    top: ${props.theme.spacing[2]}px;
    right: ${props.theme.spacing[2]}px;
    color: ${props.theme.colours.black};
  `)}

  svg {
    width: 100%;
    height: 100%;
  }
`)
