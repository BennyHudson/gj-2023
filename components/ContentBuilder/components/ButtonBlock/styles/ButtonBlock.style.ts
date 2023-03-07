import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledButtonBlockProps } from './ButtonBlock.style.types'
import respondTo from '@mixins/respondTo'
import { Button } from '@components/Button/styles/Button.style'

export const ButtonBlock = styled.div(
  (props: StyledButtonBlockProps): FlattenSimpleInterpolation => css`
    border-top: 1px solid ${props.theme.colours.midGrey};
    border-bottom: 1px solid ${props.theme.colours.midGrey};
    padding: ${props.theme.spacing[2]}px 5%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    grid-column: col-start / span 12;
    gap: ${props.theme.spacing[2]}px;

    div {
      width: calc(100% - (100px + ${props.theme.spacing[2]}px));

      ${respondTo.md(css`
        width: auto;
      `)}
    }

    img {
      max-width: 100px;

      ${respondTo.md(css`
        max-width: 150px;
      `)}
    }

    ${respondTo.md(css`
      grid-column: col-start 2 / span 10;
      padding: ${props.theme.spacing[2]}px;
      flex-wrap: no-wrap;
    `)}

    ${respondTo.lg(css`
      grid-column: col-start 3 / span 7;
    `)}

    &:last-child {
      margin-bottom: 0;
    }

    ${Button} {
      width: 100%;

      ${respondTo.md(css`
        width: auto;
        margin-left: auto;
      `)}
    }
  `,
)
