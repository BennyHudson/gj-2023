import { useRouter } from 'next/router'
import { RefObject, useEffect } from 'react'

export default function useNextLink(ref: RefObject<HTMLDivElement>) {
  const router = useRouter()

  useEffect(() => {
    const host = new RegExp('^https?://www.thegentlemansjournal.com')

    if (ref.current) {
      ref.current.querySelectorAll('a').forEach((a: HTMLAnchorElement) => {
        const href = a.href
        if (href.match(host)) {
          a.addEventListener('click', (e) => {
            e.preventDefault()
            router.push(href.replace(host, ''))
          })
        }
      })
    }
  }, [ref, router])
}
