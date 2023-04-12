import Image from 'next/image'
import Link from 'next/link'
import type { FC, ReactElement } from 'react'
import React from 'react'

import Button from '@components/Button'
import EditButton from '@components/EditButton'
import Heading from '@components/Heading'

import featuredImageUrl from '@helpers/featuredImageUrl'

import { useBreakpoints } from '@hooks/useBreakpoints'

import type { MagazineGridProps } from './MagazineGrid.types'
import * as Styled from './styles/MagazineGrid.style'

const MagazineGrid: FC<MagazineGridProps> = ({ magazines }: MagazineGridProps): ReactElement => {
  const { mdAndAbove } = useBreakpoints()
  return (
    <Styled.MagazineGrid>
      {magazines.map((magazine, index) => {
        const { name, image, slug } = magazine.node
        return (
          <Styled.MagazineCard key={index}>
            <Link href={`/shop/magazine/${slug}`}>
              <Image src={featuredImageUrl(image.sourceUrl)} width='240' height='280' alt={name} />
            </Link>
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
