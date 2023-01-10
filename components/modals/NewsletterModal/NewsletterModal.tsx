import React, { ReactElement, FC } from 'react'

import ModalTemplate from '@components/modals/ModalTemplate'
import Newsletter from '@components/newsletter/Newsletter'
import Heading from '@components/typography/Heading'
import RawHtmlWrapper from '@components/typography/RawHtmlWrapper'

import * as Styled from './styles/NewsletterModal.style'

const NewsletterModal: FC = ({ data }): ReactElement => {
  return (
    <ModalTemplate image={data.gjOptions.newsletterModal.modalNewsletter.image.sourceUrl}>
      <Styled.NewsletterWrapper>
        <Heading text={data.gjOptions.newsletterModal.modalNewsletter.title} size={3} font='ChronicleCondensed' />
        <RawHtmlWrapper content={data.gjOptions.newsletterModal.modalNewsletter.description} />
        <Newsletter />
      </Styled.NewsletterWrapper>
    </ModalTemplate>
  )
}

export default NewsletterModal
