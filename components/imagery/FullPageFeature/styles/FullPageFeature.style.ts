import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledFullPageFeatureProps } from './FullPageFeature.style.types'

export const Spacer = styled.div((): FlattenSimpleInterpolation => css`
  height: 100vh;
  background: none;
  width: 100%;
`)

export const Background = styled.div((): FlattenSimpleInterpolation => css`
  height: 100vh;
  background: #111;
  display: flex;
  align-items: flex-end;
  width: 100%;
  position: fixed;
  z-index: 0;
  top: 0;
  left: 0;
`)

export const FullPageFeature = styled.div((props: StyledFullPageFeatureProps): FlattenSimpleInterpolation => css`
  height: 100vh;
  padding: ${props.theme.spacing[8]}px;
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  gap: ${props.theme.spacing[4]}px;
  align-items: flex-end;
  width: 100%;
  opacity: ${props.opacity};
  position: relative;

  img {
    object-fit: cover;
  }
`)

type ContentProps = Pick<StyledFullPageFeatureProps, 'theme'>
export const Content = styled.div((props: ContentProps): FlattenSimpleInterpolation => css`
  grid-column: col-start / span 6;
  position: relative;
  z-index: 2;
  padding: ${props.theme.spacing[4]}px;
  border-top: 2px solid ${props.theme.colours.white};
`)