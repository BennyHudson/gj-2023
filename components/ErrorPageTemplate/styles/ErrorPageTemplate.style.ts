import type { FlattenSimpleInterpolation} from 'styled-components'
import styled, { css } from 'styled-components'

import { Heading } from '@components/Heading/styles/Heading.style'

import type { StyledErrorPageTemplateProps } from './ErrorPageTemplate.style.types'

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
