import type { FC, ReactElement } from 'react'
import React from 'react'

import Button from '@components/Button'
import Heading from '@components/Heading'
import Paragraph from '@components/Paragraph'
import RawHtmlWrapper from '@components/RawHtmlWrapper'
import Title from '@components/Title'

import featuredImageUrl from '@helpers/featuredImageUrl'

import type { JobsListProps } from './JobsList.types'
import * as Styled from './styles/JobsList.style'

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
