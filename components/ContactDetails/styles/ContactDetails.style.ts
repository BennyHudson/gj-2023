import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledContactDetailsProps } from './ContactDetails.style.types'
import respondTo from '@mixins/respondTo'

export const ContactDetails = styled.div(
  (props: StyledContactDetailsProps): FlattenSimpleInterpolation => css`
    display: grid;
    grid-template-columns: repeat(12, [col-start] 1fr);
    gap: ${props.theme.spacing[4]}px;
    width: 90%;
    margin: 0 auto;

    ${respondTo.md(css`
      width: 100%;
    `)}
  `,
)

export const Map = styled.div((): FlattenSimpleInterpolation => css`
  grid-column: col-start / span 12;
  display: flex;
  aspect-ratio:  16 / 9;

  ${respondTo.md(css`
    grid-column: col-start / span 8;
  `)}
`)

export const ContactList = styled.div((props: StyledContactDetailsProps): FlattenSimpleInterpolation => css`
  grid-column: col-start / span 12;
  display: flex;
  flex-direction: column;
  gap: ${props.theme.spacing[2]}px;
  font-size: ${props.theme.typography.paragraph[2].fontSize};
  line-height: ${props.theme.typography.paragraph[2].lineHeight};

  ${respondTo.md(css`
    grid-column: col-start 9 / span 4;
  `)}
`)
