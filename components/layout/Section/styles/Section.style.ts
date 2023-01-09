import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledSectionProps } from './Section.style.types'

export const Section = styled.div((props: StyledSectionProps): FlattenSimpleInterpolation => css`
  position: relative;
  background-color: ${props.theme.colours.white};
  padding: ${props.theme.spacing[8]}px 0;
  width: 100%;

  ${props.appearance === 'secondary' && css`
    background-color: ${props.theme.colours.black};
  `}

  ${props.appearance === 'tertiary' && css`
    background-color: ${props.theme.colours.lightGrey};
  `}

  ${props.backgroundImage && css`
    background: url('${props.backgroundImage}') center center no-repeat;
    background-size: cover;

    &::after {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,.4);
    }
  `}
`)

export const Content = styled.div((props: StyledSectionProps): FlattenSimpleInterpolation => css`
  margin: 0 auto;
  width: 90%;
  max-width: ${props.theme.containerWidth}px;
  position: relative;
  z-index: 1;

  ${props.containerWidth === 'narrow' && css`
    max-width: 800px;
  `}

  ${props.containerWidth === 'wide' && css`
    max-width: 1600px;
  `}
`)
