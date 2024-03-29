import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import type { FC, ReactElement } from 'react'
import React, { useEffect, useState } from 'react'

import Paragraph from '@components/Paragraph'

import * as Styled from './styles/Time.style'
import type { TimeProps } from './Time.types'

const Time: FC<TimeProps> = ({ inverse = false }: TimeProps): ReactElement => {
  dayjs.extend(advancedFormat)
  const [time, setTime] = useState<string>()

  useEffect(() => {
    setTime(dayjs().format('dddd Do MMMM YYYY HH:mm:ss'))
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setTime(dayjs().format('dddd Do MMMM YYYY HH:mm:ss'))
    }, 1000)
  })

  return (
    <Styled.Time>
      {time && (
        <Paragraph inverse={inverse} size={1} weight={2} font='Cera'>
          {time}
        </Paragraph>
      )}
    </Styled.Time>
  )
}

export default Time
