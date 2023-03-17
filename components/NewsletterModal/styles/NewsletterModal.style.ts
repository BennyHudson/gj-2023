import styled, { css, FlattenSimpleInterpolation, createGlobalStyle } from 'styled-components'

import { StyledNewsletterModalProps } from './NewsletterModal.style.types'

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
`)
