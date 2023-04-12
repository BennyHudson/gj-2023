import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faTimes } from '@fortawesome/pro-thin-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { FC, ReactElement} from 'react'
import React, { useState } from 'react'

import Button from '@components/Button'
import EditButton from '@components/EditButton'
import Heading from '@components/Heading'
import Paragraph from '@components/Paragraph'
import Thumbnail from '@components/Thumbnail'

import type { PartnerCardProps } from './PartnerCard.types'
import * as Styled from './styles/PartnerCard.style'

const PartnerCard: FC<PartnerCardProps> = ({ featuredImage, title, clubhousePartners }: PartnerCardProps): ReactElement => {
  const { website, offer, redeem, termsOfUse } = clubhousePartners.partnerInformation

  const [showDetails, setShowDetails] = useState(false)
  return (
    <Styled.PartnerCard>
      {showDetails && (
        <Styled.DetailsPanel>
          <Styled.CloseButton
            onClick={() => {
              setShowDetails(false)
            }}
          >
            <FontAwesomeIcon icon={faTimes as IconProp} />
          </Styled.CloseButton>
          <Heading size={2} inverse text='How to redeem this offer:' />
          <Paragraph text={redeem} inverse font='Cera' size={2} />
          {termsOfUse && <Paragraph text={`T&Cs: ${termsOfUse}`} inverse size={1} font='Cera' />}
        </Styled.DetailsPanel>
      )}

      <Thumbnail featuredImage={featuredImage.node.sourceUrl} />
      <Heading font='ChronicleCondensed' size={2} text={title} noMargin />
      <Paragraph font='Cera' size={2}>
        {offer}
      </Paragraph>
      <Button text='Redeem Offer' size={1} onClick={() => setShowDetails(true)} />
      {website && <EditButton href={website} text='Visit Website' />}
    </Styled.PartnerCard>
  )
}

export default PartnerCard
