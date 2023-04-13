import Image from 'next/image'
import type { FC, ReactElement } from 'react'
import React, { useContext } from 'react'

import Heading from '@components/Heading'
import Link from '@components/Link'
import Overlay from '@components/Overlay'
import Paragraph from '@components/Paragraph'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import featuredImageUrl from '@helpers/featuredImageUrl'

import { useBreakpoints } from '@hooks/useBreakpoints'

import type { GiftGuideFeatureProps } from './GiftGuideFeature.types'
import * as Styled from './styles/GiftGuideFeature.style'

const GiftGuideFeature: FC<GiftGuideFeatureProps> = ({
  title,
  meta,
  subtitle,
  url,
  featuredImage,
  height = 2,
}: GiftGuideFeatureProps): ReactElement => {
  const { headerHeight } = useContext(PageContext) as PageContextProps
  const { mdAndAbove } = useBreakpoints()
  return (
    <Styled.GiftGuideFeature headerHeight={headerHeight} height={height}>
      <Styled.Container>
        <Styled.Content>
          <Heading text={meta} size={1} font='Cera' inverse noMargin transform='uppercase' weight={3} />
          <Heading text={title} size={4} inverse noMargin font='ChronicleCondensed' weight={mdAndAbove ? 1 : 2} />
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
