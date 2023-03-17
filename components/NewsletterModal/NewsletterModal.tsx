import React, { ReactElement, FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faTimes } from '@fortawesome/pro-thin-svg-icons'

import featuredImageUrl from '@helpers/featuredImageUrl'

import Overlay from '@components/Overlay'
import Newsletter from '@components/Newsletter/Newsletter'

import * as Styled from './styles/NewsletterModal.style'

import { NewsletterModalProps } from './NewsletterModal.types'

const NewsletterModal: FC<NewsletterModalProps> = ({ newsletterForm, backgroundImage, setShowNewsletterModal }: NewsletterModalProps): ReactElement => {
  return (
    <>
      <Styled.HideOverflow />
      <Styled.NewsletterModal>
        <Overlay appearance='secondary' onClick={() => setShowNewsletterModal(false)} />
        <Styled.ModalWrapper>
          <Styled.Column backgroundImage={featuredImageUrl(backgroundImage)} />
          <Styled.Column>
            <Styled.IconButton onClick={() => setShowNewsletterModal(false)}><FontAwesomeIcon icon={faTimes as IconProp} /></Styled.IconButton>
            <Newsletter form={newsletterForm} />
          </Styled.Column>
        </Styled.ModalWrapper>
      </Styled.NewsletterModal>
    </>
  )
}

export default NewsletterModal
