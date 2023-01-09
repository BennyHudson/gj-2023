import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledRawHtmlWrapperProps } from './RawHtmlWrapper.style.types'

export const RawHtmlWrapper = styled.div((props: StyledRawHtmlWrapperProps): FlattenSimpleInterpolation => css`
  h3 {
    font-weight: bold;
    margin-bottom: ${props.theme.spacing[2]}px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  p {
    margin-bottom: ${props.theme.spacing[2]}px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  a {
    color: ${props.theme.colours.black};
  }

  ul {
    list-style: disc;
    margin: 0 0 ${props.theme.spacing[2]}px ${props.theme.spacing[4]}px;

    li {
      margin-bottom: ${props.theme.spacing[1]}px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  em, i {
    font-family: 'Chronicle Regular Italic', 'Cera Pro Regular', sans-serif;
  }

  strong, b {
    font-family: 'Chronicle Semibold', 'Cera Pro Regular', sans-serif;
  }

  ${props.inverse && css`
    color: ${props.theme.colours.white};
  `}

  ${props.font === 'Cera' && css`
    font-family: 'Cera Pro Regular';

    em, i {
      font-family: 'Cera Pro Regular', sans-serif;
    }

    strong, b {
      font-family: 'Cera Pro Regular', sans-serif;
    }
  `}
`)
