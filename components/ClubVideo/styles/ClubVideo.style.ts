import type { FlattenSimpleInterpolation} from 'styled-components'
import styled, { css } from 'styled-components'

import respondTo from '@mixins/respondTo'

import type { StyledClubVideoProps } from './ClubVideo.style.types'

export const ClubVideo = styled.video(
  (props: StyledClubVideoProps): FlattenSimpleInterpolation => css`
    width: 100%;
    object-fit: cover;
    margin: 0;
    padding: 0;
    display: block;

    ${respondTo.md(css`
      height: calc(100vh - ${props.headerHeight}px);
    `)}
  `,
)
