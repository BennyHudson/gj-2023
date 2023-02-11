import React, { ReactElement, FC } from 'react'
import Image from 'next/image'

import featuredImageUrl from '@helpers/featuredImageUrl'

import * as Styled from './styles/MagazineGrid.style'

import { MagazineGridProps } from './MagazineGrid.types'
import Heading from '@components/Heading'
import Button from '@components/Button'
import EditButton from '@components/EditButton'
import { useBreakpoints } from '@hooks/useBreakpoints'
import Link from 'next/link'

const MagazineGrid: FC<MagazineGridProps> = ({ magazines }: MagazineGridProps): ReactElement => {
  const { mdAndAbove } = useBreakpoints()
  return (
    <Styled.MagazineGrid>
      {magazines.map((magazine, index) => {
        const { name, image, slug } = magazine.node
        return (
          <Styled.MagazineCard key={index}>
            <Link href={`/shop/magazine/${slug}`}><Image src={featuredImageUrl(image.sourceUrl)} width='240' height='280' alt={name} /></Link>
            <Heading size={mdAndAbove ? 2 : 1} font='ChronicleCondensed' text={name} noMargin />
            <Button text='Subscribe Now' href='/club' size={1} />
            <EditButton href={`/shop/magazine/${slug}`} text='Preview' />
          </Styled.MagazineCard>
        )
      })}
    </Styled.MagazineGrid>
  )
}

export default MagazineGrid
