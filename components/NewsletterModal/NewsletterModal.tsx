import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faTimes } from '@fortawesome/pro-thin-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { FC, ReactElement } from 'react'
import React from 'react'

import Newsletter from '@components/Newsletter/Newsletter'
import Overlay from '@components/Overlay'

import featuredImageUrl from '@helpers/featuredImageUrl'

import type { NewsletterModalProps } from './NewsletterModal.types'
import * as Styled from './styles/NewsletterModal.style'

const NewsletterModal: FC<NewsletterModalProps> = ({
  newsletterForm,
  backgroundImage,
  setShowNewsletterModal,
}: NewsletterModalProps): ReactElement => {
  return (
    <>
      <Styled.HideOverflow />
      <Styled.NewsletterModal>
        <Overlay appearance='secondary' onClick={() => setShowNewsletterModal(false)} />
        <Styled.ModalWrapper>
          <Styled.Background backgroundImage={featuredImageUrl(backgroundImage)} />
          <Styled.Column>
            <Styled.IconButton onClick={() => setShowNewsletterModal(false)}>
              <FontAwesomeIcon icon={faTimes as IconProp} />
            </Styled.IconButton>
            <Newsletter form={newsletterForm} />
          </Styled.Column>
        </Styled.ModalWrapper>
      </Styled.NewsletterModal>
    </>
  )
}

export default NewsletterModal
