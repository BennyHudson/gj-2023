import React, { ReactElement, FC } from 'react'
import Script from 'next/script'

const Scripts: FC = (): ReactElement => {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-416440-57"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-416440-57');
        `}
      </Script>
      <Script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></Script>
    </>
  )
}

export default Scripts
