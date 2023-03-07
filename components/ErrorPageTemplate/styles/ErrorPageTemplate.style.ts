import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledErrorPageTemplateProps } from './ErrorPageTemplate.style.types'
import { Heading } from '@components/Heading/styles/Heading.style'

export const ErrorPageTemplate = styled.div(
  (): FlattenSimpleInterpolation => css`
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      object-fit: cover;
    }
  `,
)

export const Content = styled.div(
  (props: StyledErrorPageTemplateProps): FlattenSimpleInterpolation => css`
    width: 90%;
    max-width: ${props.theme.containerWidth}px;
    position: relative;
    z-index: 10;
    text-align: center;

    ${Heading} {
      font-size: 280px;
      letter-spacing: -20px;
      line-height: 1;
    }
  `,
)
