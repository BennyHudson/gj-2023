import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import updateLocale from 'dayjs/plugin/updateLocale'
import type { FC, ReactElement } from 'react'
import React from 'react'

import type { MetaProps } from './Meta.types'
import * as Styled from './styles/Meta.style'

const Meta: FC<MetaProps> = ({ categories, date, inverse = false }: MetaProps): ReactElement => {
  dayjs.extend(relativeTime)
  dayjs.extend(updateLocale)

  dayjs.updateLocale('en', {
    relativeTime: {
      future: 'in %s',
      past: '%s ago',
      s: 'a few seconds',
      m: '1 minute',
      mm: '%d minutes',
      h: '1 hour',
      hh: '%d hours',
      d: '1 day',
      dd: '%d days',
      M: '1 month',
      MM: '%d months',
      y: '1 year',
      yy: '%d years',
    },
  })

  return (
    <Styled.Meta inverse={inverse}>
      {categories?.nodes.length ? (
        <>
          {categories.nodes[0].name}
          {date && <Styled.Date inverse={inverse}> -- {dayjs(date).fromNow()}</Styled.Date>}
        </>
      ) : (
        <>{date && <Styled.Date inverse={inverse}>{dayjs(date).format('D MMMM YYYY')}</Styled.Date>}</>
      )}
    </Styled.Meta>
  )
}

export default Meta
