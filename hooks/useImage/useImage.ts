import { useEffect, RefObject } from 'react'
import { useRouter } from 'next/router'
import featuredImageUrl from '@helpers/featuredImageUrl'

export default function useImage(ref: RefObject<HTMLDivElement>) {
  const router = useRouter()

  useEffect(() => {
    if (ref.current) {
      ref.current.querySelectorAll('img').forEach((img: HTMLImageElement) => {
        img.src = featuredImageUrl(img.src)
      })
    }
  }, [ref, router])
}
