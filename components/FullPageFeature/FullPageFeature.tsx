import React, { ReactElement, FC, useEffect, useState } from 'react'
import Image from 'next/image'

import featuredImageUrl from '@helpers/featuredImageUrl'

import Heading from '@components/Heading'
import Paragraph from '@components/Paragraph'
import Link from '@components/Link'

import * as Styled from './styles/FullPageFeature.style'

import { FullPageFeatureProps } from './FullPageFeature.types'

const FullPageFeature: FC<FullPageFeatureProps> = ({
  title,
  excerpt,
  uri,
  featuredImage,
}: FullPageFeatureProps): ReactElement => {
  const [opacity, setOpacity] = useState(1)
  
  const onScroll = (e: Event): void => {
    const window = e.target as Window
    const scrollTop = window.documentElement.scrollTop
    const viewportHeight = window.innerHeight
    const offset = (viewportHeight - scrollTop) / viewportHeight

    if (offset > 0) {
      setOpacity(offset)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <> 
      <Styled.Spacer></Styled.Spacer>
      <Styled.Background>
        <Styled.FullPageFeature opacity={opacity}>
          <Image src={featuredImageUrl(featuredImage.node.sourceUrl)} alt='' fill />
          <Styled.Content>
            <Paragraph size={1} weight={3} text='Featured Article' inverse font='Cera' transform='uppercase' />
            <Heading text={title} level={1} size={5} inverse font='ChronicleCondensed' />
            <Paragraph text={excerpt} size={2} inverse font='Cera' />
            <Link to={uri} size={1} weight={3} inverse font='Cera' transform='uppercase' showIcon>Read More</Link>
          </Styled.Content>
        </Styled.FullPageFeature>
      </Styled.Background>
    </>
  )
}

export default FullPageFeature
