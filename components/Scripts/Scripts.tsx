import React, { ReactElement, FC } from 'react'
import Script from 'next/script'

import { googleAds } from './helpers/googleAds'

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
      {googleAds.map((adBlock, index) => {
        return (
          <>
            <Script id={`gdp-${adBlock.parentId}-main`} key={index}>
              {`
                window.googletag = window.googletag || {cmd: []};
                googletag.cmd.push(function() {
                  
                  googletag.defineSlot('/113638206/${adBlock.parentId}', ${adBlock.sizes}, 'gdp-${adBlock.parentId}')
                    .addService(googletag.pubads());
                  
                  googletag.pubads().enableSingleRequest();
                  googletag.enableServices();
                });
              `}
            </Script>
            {adBlock.children && adBlock.children.map((child, index) => {
              return (
                <Script id={`gdp-${adBlock.parentId}-${child}-main`} key={`${child}-${index}`}>
                  {`
                    window.googletag = window.googletag || {cmd: []};
                    googletag.cmd.push(function() {
                      
                      googletag.defineSlot('/113638206/${adBlock.parentId}/${child}', ${adBlock.sizes}, 'gdp-${adBlock.parentId}-${child}')
                        .addService(googletag.pubads());
                      
                      googletag.pubads().enableSingleRequest();
                      googletag.enableServices();
                    });
                  `}
                </Script>
              )
            })}
          </>
        )
      })}
    </>
  )
}

export default Scripts
