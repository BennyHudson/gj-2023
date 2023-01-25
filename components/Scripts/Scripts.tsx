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
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-10918806122"
        strategy="afterInteractive"
      />
      <Script id='google-tag-manager' strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-10918806122');
        `}
      </Script>
    </>
  )
}

export default Scripts
