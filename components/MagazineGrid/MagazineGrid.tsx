import React, { ReactElement, FC } from 'react'
import Image from 'next/image'

import featuredImageUrl from '@helpers/featuredImageUrl'

import * as Styled from './styles/MagazineGrid.style'

import { MagazineGridProps } from './MagazineGrid.types'
import Heading from '@components/Heading'
import Button from '@components/Button'
import EditButton from '@components/EditButton'

const MagazineGrid: FC<MagazineGridProps> = ({ magazines }: MagazineGridProps): ReactElement => {
  return (
    <Styled.MagazineGrid>
      {magazines.map((magazine, index) => {
        const { name, image } = magazine.node
        return (
          <Styled.MagazineCard key={index}>
            <Image src={featuredImageUrl(image.sourceUrl)} width='240' height='480' alt={name} />
            <Heading size={2} font='ChronicleCondensed' text={name} noMargin />
            <Button text='Subscribe Now' href='/club' size={1} />
            <EditButton href='#' text='Preview' />
          </Styled.MagazineCard>
        )
      })}
    </Styled.MagazineGrid>
  )
}

export default MagazineGrid
