import React, { ReactElement, FC, useContext } from 'react'
// import { useStaticQuery, graphql } from 'gatsby'

import useFeaturedImage from '@hooks/useFeaturedImage'

import PageContext, { PageContextProps } from '@context/PageContext'

import Newsletter from '@components/Newsletter'
import Heading from '@components/Heading'
import RawHtmlWrapper from '@components/RawHtmlWrapper'

import * as Styled from './styles/NewsletterModal.style'

const NewsletterModal: FC = (): ReactElement => {
  // const newsletterModal = useStaticQuery(graphql`
  //   query newsletterModal {
  //     wp {
  //       gjOptions {
  //         newsletterModal {
  //           modalNewsletter {
  //             title
  //             description
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  // const { headerHeight } = useContext(PageContext) as PageContextProps

  // return (
  //   <Styled.NewsletterModal headerHeight={headerHeight}>
  //     <Styled.BackgroundImage backgroundImage={useFeaturedImage(391078).featuredImage} />
  //     <Styled.NewsletterWrapper>
  //       <div>
  //         <Heading text={newsletterModal.wp.gjOptions.newsletterModal.modalNewsletter.title} size={3} font='ChronicleCondensed' />
  //         <RawHtmlWrapper content={newsletterModal.wp.gjOptions.newsletterModal.modalNewsletter.description} />
  //         <Newsletter />
  //       </div>
  //     </Styled.NewsletterWrapper>
  //   </Styled.NewsletterModal>
  // )

  return (
    <>NEWSLETTER MODAL</>
  )
}

export default NewsletterModal
