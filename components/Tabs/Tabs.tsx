import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown, faAngleUp } from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { FC, ReactElement} from 'react'
import React, { Fragment, useState } from 'react'
import AnimateHeight from 'react-animate-height'

import { useBreakpoints } from '@hooks/useBreakpoints'

import * as Styled from './styles/Tabs.style'
import type { TabsProps, TabsState } from './Tabs.types'

const Tabs: FC<TabsProps> = ({ tabs }: TabsProps): ReactElement => {
  const [activeTab, setActiveTab] = useState<TabsState['activeTab'] | null>(0)

  const { sm } = useBreakpoints()

  if (sm) {
    return (
      <>
        {tabs.map((tab, index) => {
          const isActive = activeTab === index
          return (
            <Styled.Accordion key={index}>
              <Styled.AccordionTitle onClick={() => setActiveTab(isActive ? null : index)}>
                {tab.title}
                <FontAwesomeIcon icon={isActive ? (faAngleUp as IconProp) : (faAngleDown as IconProp)} />
              </Styled.AccordionTitle>
              <AnimateHeight duration={500} height={isActive ? 'auto' : 0}>
                {tab.content}
              </AnimateHeight>
            </Styled.Accordion>
          )
        })}
      </>
    )
  }

  return (
    <>
      <Styled.Tabs tabCount={tabs.length}>
        {tabs.map((tab, index) => {
          return (
            <Styled.Tab key={index} $active={index === activeTab} onClick={() => setActiveTab(index)}>
              {tab.title}
            </Styled.Tab>
          )
        })}
      </Styled.Tabs>
      {tabs.map((tab, index) => {
        if (index !== activeTab) return
        return <Fragment key={index}>{tab.content}</Fragment>
      })}
    </>
  )
}

export default Tabs
