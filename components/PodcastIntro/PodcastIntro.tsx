import type { FC, ReactElement } from 'react'
import React from 'react'

import Heading from '@components/Heading'
import Paragraph from '@components/Paragraph'
import RawHtmlWrapper from '@components/RawHtmlWrapper'
import Thumbnail from '@components/Thumbnail'
import Title from '@components/Title'

import type { PodcastIntroProps } from './PodcastIntro.types'
import * as Styled from './styles/PodcastIntro.style'

const PodcastIntro: FC<PodcastIntroProps> = ({ text, host }: PodcastIntroProps): ReactElement => {
  return (
    <Styled.PodcastIntro>
      <Styled.Content>
        <Styled.Intro>
          <Title title='GJPodcasts' />
          <RawHtmlWrapper content={text} />
        </Styled.Intro>
        <Styled.Host>
          <Thumbnail type='circle' featuredImage={host.user.moreInfo.profileImage.squareThumb} size={2} />
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
