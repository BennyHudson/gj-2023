import Link from 'next/link'
import type { FlattenSimpleInterpolation} from 'styled-components'
import styled, { css } from 'styled-components'

import type { StyledCarouselPostProps } from './CarouselPost.style.types'

export const CarouselPost = styled(Link)(
  (props: StyledCarouselPostProps): FlattenSimpleInterpolation => css`
    border-right: 1px solid ${props.theme.colours.midGrey};
    padding: ${props.theme.spacing[2]}px;
    opacity: 20%;
    display: flex !important;
    align-items: center;
    justify-content: flex-start;
    gap: ${props.theme.spacing[2]}px;
    color: inherit;
    text-decoration: none;
    transition: 0.4s all ease;
    pointer-events: none;

    &:hover {
      background: ${props.theme.colours.midGrey};
    }
  `,
)
