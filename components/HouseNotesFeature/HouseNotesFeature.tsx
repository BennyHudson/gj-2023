import React, { ReactElement, FC } from 'react'

import Heading from '@components/Heading'
import HouseNoteExcerpt from '@components/HouseNoteExcerpt'
import Section from '@components/Section'
import Link from '@components/Link'
import TitleAndIntro from '@components/TitleAndIntro'

import * as Styled from './styles/HouseNotesFeature.style'

import { HouseNotesFeatureProps } from './HouseNotesFeature.types'

const HouseNotesFeature: FC<HouseNotesFeatureProps> = ({
  introText,
  columns,
}: HouseNotesFeatureProps): ReactElement => {
  return (
    <Section appearance='tertiary'>
      <TitleAndIntro title='House Notes' intro={introText} />
      <Styled.HouseNotesFeature>
        {columns.read && (
          <Styled.FeatureColumn>
            <Styled.FeatureTitle><span>Read</span></Styled.FeatureTitle>
            <HouseNoteExcerpt priority {...columns.read[0]} />
          </Styled.FeatureColumn>
        )}
        {columns.scroll && (
          <Styled.FeatureColumn>
            <Styled.FeatureTitle><span>Scroll</span></Styled.FeatureTitle>
            <HouseNoteExcerpt priority {...columns.scroll[0]} />
          </Styled.FeatureColumn>
        )}
        {columns.listen && (
          <Styled.FeatureColumn>
            <Styled.FeatureTitle><span>Listen</span></Styled.FeatureTitle>
            <HouseNoteExcerpt priority {...columns.listen} />
          </Styled.FeatureColumn>
        )}
        {columns.quote && (
          <Styled.FeatureColumn>
            <Styled.FeatureTitle><span>Quote</span></Styled.FeatureTitle>
            <Styled.Quote>
              <Heading size={4} font='ChronicleCondensed' text={columns.quote.articleType.articleTypeLandingPageExcerpt} />
              <Heading size={2} font='ChronicleCondensed' text={`Seen in: ${columns.quote.title}`} />
              <Link to={columns.quote.uri} size={1} weight={3} font='Cera' transform='uppercase' showIcon>Read More</Link>
            </Styled.Quote>
          </Styled.FeatureColumn>
        )}
        {columns.overheard && (
          <Styled.FeatureColumn>
            <Styled.FeatureTitle><span>Overheard</span></Styled.FeatureTitle>
            <HouseNoteExcerpt {...columns.overheard} />
          </Styled.FeatureColumn>
        )}
        {columns.read && (
          <Styled.FeatureColumn>
            <Styled.FeatureTitle><span>Read</span></Styled.FeatureTitle>
            <HouseNoteExcerpt {...columns.read[1]} />
          </Styled.FeatureColumn>
        )}
        {columns.watch && (
          <Styled.FeatureColumn>
            <Styled.FeatureTitle><span>Watch</span></Styled.FeatureTitle>
            <HouseNoteExcerpt {...columns.watch} />
          </Styled.FeatureColumn>
        )}
        {!columns.watch && columns.scroll && (
          <Styled.FeatureColumn>
            <Styled.FeatureTitle><span>Scroll</span></Styled.FeatureTitle>
            <HouseNoteExcerpt {...columns.scroll[1]} />
          </Styled.FeatureColumn>
        )}
      </Styled.HouseNotesFeature>
    </Section>
  )
}

export default HouseNotesFeature
