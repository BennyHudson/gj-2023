import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

export const Overlay = styled.div((): FlattenSimpleInterpolation => css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
`)