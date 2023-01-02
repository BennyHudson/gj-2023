import React, { ReactElement, FC } from 'react'

// import useFeaturedImage from '@hooks/useFeaturedImage'
import Paragraph from '@components/Paragraph'

import * as Styled from './styles/Byline.style'

import { BylineProps } from './Byline.types'

const Byline: FC<BylineProps> = ({
  author,
  photographer,
  additionalBylines,
  sponsoredPost,
}: BylineProps): ReactElement => {
  return (
    <Styled.Byline>
      <Paragraph size={2} font='Cera'>Words: {author}</Paragraph>
      {photographer && <Paragraph size={2} font='Cera'>Photography: {photographer}</Paragraph>}
      {additionalBylines && additionalBylines.map((byline, index) => {
        return (
          <Paragraph key={index} size={2} font='Cera'>{byline.title}: {byline.content}</Paragraph>
        )
      })}
      {sponsoredPost?.logoId && 
        <>
          <Paragraph noMargin size={1} font='Cera'>In association with:</Paragraph>
          <Styled.SponsoredPost as={sponsoredPost.disableLink ? 'div' : 'a'} href={sponsoredPost.url}>
            {/* <Styled.SponsorLogo src={useFeaturedImage(sponsoredPost.logoId).featuredImage} alt={sponsoredPost.name} /> */}
          </Styled.SponsoredPost>
        </>
      }
    </Styled.Byline>
  )
}

export default Byline
