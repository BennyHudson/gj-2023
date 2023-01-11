import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledModalTemplateProps } from './ModalTemplate.style.types'

export const ModalTemplate = styled.div((): FlattenSimpleInterpolation => css`
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  height: 100%;
  width: 100%;
  margin: 0 auto;
  align-items: stretch;
  align-self: stretch;
`)

export const BackgroundImage = styled.div((): FlattenSimpleInterpolation => css`
  grid-column: col-start / span 6;
  position: relative;

  img {
    object-fit: cover;
  }
`)

export const Content = styled.div((props: StyledModalTemplateProps): FlattenSimpleInterpolation => css`
  padding: 0 ${props.theme.spacing[8]}px;
  display: flex;
  align-items: center;
  grid-column: col-start 7 / span 5;
`)

