import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { Link } from '@components/Link/styles/Link.style'

import { StyledPodcastCardProps } from './PodcastCard.style.types'
import respondTo from '@mixins/respondTo'

export const PodcastCard = styled.div(
  (props: StyledPodcastCardProps): FlattenSimpleInterpolation => css`
    background: ${props.theme.colours.white};
    padding: ${props.theme.spacing[2]}px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${props.theme.spacing[2]}px;
    text-align: center;
    border-radius: 0 0 2px 2px;
    margin: 0 ${props.theme.spacing[1]}px;
    width: 100%;
    border-top: 2px solid ${props.theme.colours.black};
    transition: 0.4s all ease;

    ${respondTo.md(css`
      padding: ${props.theme.spacing[4]}px;
      margin: 0 ${props.theme.spacing[2]}px;
    `)}

    ${Link} {
      margin-top: auto;
    }
  `,
)
