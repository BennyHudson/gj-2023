import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { Newsletter } from '@components/newsletter/Newsletter/styles/Newsletter.style'
import { Heading } from '@components/typography/Heading/styles/Heading.style'

import { StyledNewsletterModalProps } from './NewsletterModal.style.types'

export const NewsletterWrapper = styled.div((props: StyledNewsletterModalProps): FlattenSimpleInterpolation => css`
  ${Newsletter} {
    border-top: 1px solid ${props.theme.colours.midGrey};
    margin-top: ${props.theme.spacing[4]}px;
    padding-top: ${props.theme.spacing[4]}px;

    ${Heading} {
      display: none;
    }
  }
`)
