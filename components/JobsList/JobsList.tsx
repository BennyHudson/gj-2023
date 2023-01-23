import React, { ReactElement, FC } from 'react'

import featuredImageUrl from '@helpers/featuredImageUrl'

import RawHtmlWrapper from '@components/RawHtmlWrapper'
import Heading from '@components/Heading'
import Paragraph from '@components/Paragraph'
import Button from '@components/Button'
import Title from '@components/Title'

import * as Styled from './styles/JobsList.style'

import { JobsListProps } from './JobsList.types'

const JobsList: FC<JobsListProps> = ({ content, jobs }: JobsListProps): ReactElement => {
  return (
    <Styled.JobsList>
      <Styled.Content>
        <RawHtmlWrapper content={content} />
      </Styled.Content>
      {jobs.length && (
        <Styled.JobContent>
          <Title title='Available roles' subtitle={`${jobs.length} open position${jobs.length > 1 ? 's' : ''}`} />
          <Styled.Jobs>
            {jobs.map((job, index) => {
              return (
                <Styled.Job key={index}>
                  <Heading size={2} font='ChronicleCondensed' text={job.position} />
                  {job.shortDescription && <Paragraph size={2}>{job.shortDescription}</Paragraph>}
                  <Button href={featuredImageUrl(job.jobSpec.mediaItemUrl)} text='View Job Spec' size={1} />
                </Styled.Job>
              )
            })}
          </Styled.Jobs>
        </Styled.JobContent>
      )}
    </Styled.JobsList>
  )
}

export default JobsList
