import React, { ReactElement, FC } from 'react'

import Overlay from '@components/Overlay'

import * as Styled from './styles/NewsletterModal.style'

const NewsletterModal: FC = (): ReactElement => {
  return (
    <>
      <Styled.HideOverflow />
      <Styled.NewsletterModal>
        <Overlay />
      </Styled.NewsletterModal>
    </>
  )
}

export default NewsletterModal
