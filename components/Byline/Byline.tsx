import Image from 'next/image'
import type { FC, ReactElement } from 'react'
import React from 'react'

import Paragraph from '@components/Paragraph'

import featuredImageUrl from '@helpers/featuredImageUrl'

import type { BylineProps } from './Byline.types'
import * as Styled from './styles/Byline.style'

const Byline: FC<BylineProps> = ({ author, photographer, additionalBylines, sponsoredPost }: BylineProps): ReactElement => {
  return (
    <Styled.Byline>
      <Paragraph size={2} font='Cera'>
        Words: {author}
      </Paragraph>
      {photographer && (
        <Paragraph size={2} font='Cera'>
          Photography: {photographer}
        </Paragraph>
      )}
      {additionalBylines &&
        additionalBylines.map((byline, index) => {
          return (
            <Paragraph key={index} size={2} font='Cera'>
              {byline.title}: {byline.content}
            </Paragraph>
          )
        })}
      {sponsoredPost?.sponsorName && (
        <>
          <Paragraph noMargin size={2} font='Cera'>
            In association with:
          </Paragraph>
          <Styled.SponsoredPost as={sponsoredPost.sponsorDisableLink ? 'div' : 'a'} href={sponsoredPost.sponsorUrl}>
            {sponsoredPost.sponsorLogo?.sourceUrl ? (
              <Image src={featuredImageUrl(sponsoredPost.sponsorLogo.sourceUrl)} alt={sponsoredPost.sponsorName} width={80} height={80} />
            ) : (
              <Paragraph noMargin size={2} font='Cera'>
                {sponsoredPost.sponsorName}
              </Paragraph>
            )}
          </Styled.SponsoredPost>
        </>
      )}
    </Styled.Byline>
  )
}

export default Byline
