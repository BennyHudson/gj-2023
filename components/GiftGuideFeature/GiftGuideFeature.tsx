import React, { ReactElement, FC, useContext } from 'react'
import Image from 'next/image'

import featuredImageUrl from '@helpers/featuredImageUrl'

import Heading from '@components/Heading'
import Paragraph from '@components/Paragraph'
import Link from '@components/Link'
import Overlay from '@components/Overlay'

import PageContext, { PageContextProps } from '@context/PageContext'

import * as Styled from './styles/GiftGuideFeature.style'

import { GiftGuideFeatureProps } from './GiftGuideFeature.types'

const GiftGuideFeature: FC<GiftGuideFeatureProps> = ({
  title,
  meta,
  subtitle,
  url,
  featuredImage,
  height = 2,
}: GiftGuideFeatureProps): ReactElement => {
  const { headerHeight } = useContext(PageContext) as PageContextProps
  return (
    <Styled.GiftGuideFeature headerHeight={headerHeight} height={height}>
      <Styled.Container>
        <Styled.Content>
          <Heading text={meta} size={1} font='Cera' inverse noMargin transform='uppercase' weight={3} />
          <Heading text={title} size={4} inverse noMargin font='ChronicleCondensed' />
          {subtitle && (
            <Paragraph inverse noMargin>
              {subtitle}
            </Paragraph>
          )}
          <Link to={url} size={2} font='Cera' transform='uppercase' showIcon inverse>
            Read More
          </Link>
        </Styled.Content>
      </Styled.Container>
      {featuredImage && (
        <>
          <Overlay />
          <Image src={featuredImageUrl(featuredImage)} fill alt='' />
        </>
      )}
    </Styled.GiftGuideFeature>
  )
}

export default GiftGuideFeature
