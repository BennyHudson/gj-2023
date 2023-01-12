import React, { ReactElement, FC } from 'react'

import RawHtmlWrapper from '@components/typography/RawHtmlWrapper'
import Title from '@components/typography/Title'
import Thumbnail from '@components/imagery/Thumbnail'
import Heading from '@components/typography/Heading'
import Paragraph from '@components/typography/Paragraph'

import * as Styled from './styles/PodcastIntro.style'

import { PodcastIntroProps } from './PodcastIntro.types'

const PodcastIntro: FC<PodcastIntroProps> = ({
  text,
  host,
}: PodcastIntroProps): ReactElement => {
  return (
    <Styled.PodcastIntro>
      <Styled.Content>
        <Styled.Intro>
          <Title title='GJPodcasts' />
          <RawHtmlWrapper content={text} />
        </Styled.Intro>
        <Styled.Host>
          <Thumbnail type='circle' featuredImage={host.user.moreInfo.profileImage.sourceUrl} size={2} />
          <div>
            <Paragraph size={1} transform='uppercase' text='Your host' font='Cera' noMargin />
            <Heading text={host?.name} size={1} />
            <Paragraph size={1} transform='uppercase' text={host?.user.moreInfo.role} appearance='secondary' font='Cera' noMargin />
          </div>
        </Styled.Host>
      </Styled.Content>
    </Styled.PodcastIntro>
  )
}

export default PodcastIntro
