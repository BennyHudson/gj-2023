import styled, { css, FlattenSimpleInterpolation, createGlobalStyle } from 'styled-components'

import { StyledContainedModalProps } from './ContainedModal.style.types'

export const HideOverflow = createGlobalStyle((): FlattenSimpleInterpolation => css`
  html,
  body {
    overflow: hidden;
  }
`)

export const ContainedModal = styled.div((props: StyledContainedModalProps): FlattenSimpleInterpolation => css`
  background: ${props.theme.colours.white};
  position: fixed;
  top: ${props.headerHeight}px;
  left: 0;
  width: 100%;
  height: calc(100% - ${props.headerHeight}px);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`)

type CloseButtonProps = Pick<StyledContainedModalProps, 'theme'>
export const CloseButton = styled.button((props: CloseButtonProps): FlattenSimpleInterpolation => css`
  background: none;
  padding: 0;
  border: none;
  font-size: ${props.theme.typography.heading[4].fontSize};
  line-height: ${props.theme.typography.heading[4].fontSize};
  color: ${props.theme.colours.black};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.4s all ease;
  aspect-ratio: 1 / 1;
  position: absolute;
  top: 0;
  right: 0;
  width: 72px;
  height: 72px;

  &:hover {
    background: ${props.theme.colours.lightGrey};
  }
`)
