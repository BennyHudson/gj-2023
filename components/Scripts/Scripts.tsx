/* eslint-disable @next/next/no-img-element, jsx-a11y/alt-text */
import React, { ReactElement, FC } from 'react'
import Script from 'next/script'
import { useTheme } from 'styled-components'

import { Theme } from '@themes/gjTheme/gjTheme.types'

import { googleAds } from './helpers/googleAds'

const Scripts: FC = (): ReactElement => {
  const { breakpoints } = useTheme() as Theme

  return (
    <>
      <Script id='facebook-pixel'>
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '467180983664563');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <img 
          height='1' 
          width='1' 
          style={{ display: 'none' }}
          src='https://www.facebook.com/tr?id=467180983664563&ev=PageView&noscript=1'
        />
      </noscript>
      <Script strategy='afterInteractive' src='https://www.googletagmanager.com/gtag/js?id=AW-10918806122' />
      <Script id='googlePixel'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-10918806122');
        `}
      </Script>
      <Script strategy='afterInteractive' src='https://www.googletagmanager.com/gtag/js?id=G-YVYM9T292G' />
      <Script id='googleAnalytics'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-YVYM9T292G');
        `}
      </Script>
      <Script async src='https://securepubads.g.doubleclick.net/tag/js/gpt.js'></Script>
      {googleAds.map((adBlock, index) => {
        return (
          <>
            <Script id={`gdp-${adBlock.parentId}-main`} key={index}>
              {`
                window.googletag = window.googletag || {cmd: []};
                googletag.cmd.push(function() {

                  ${
          adBlock.mappings &&
                    `
                    const sizeMappings = googletag.sizeMapping()
                      ${adBlock.mappings.lg ? `.addSize([${breakpoints.lg}, 0], ${adBlock.mappings.lg})` : ''}
                      ${adBlock.mappings.md ? `.addSize([${breakpoints.md}, 0], ${adBlock.mappings.md})` : ''}
                      .addSize([0, 0], ${adBlock.mappings.sm})
                      .build();
                  `
          }
                  
                  googletag.defineSlot('/113638206/${adBlock.parentId}', ${adBlock.sizes}, 'gdp-${adBlock.parentId}')
                    ${adBlock.mappings ? '.defineSizeMapping(sizeMappings)' : ''}
                    .addService(googletag.pubads());
                  
                  googletag.pubads().enableSingleRequest();
                  googletag.enableServices();
                });
              `}
            </Script>
            {adBlock.children &&
              adBlock.children.map((child, index) => {
                return (
                  <Script id={`gdp-${adBlock.parentId}-${child}-main`} key={`${child}-${index}`}>
                    {`
                    window.googletag = window.googletag || {cmd: []};
                    googletag.cmd.push(function() {

                      ${
                  adBlock.mappings &&
                        `
                        const childMappings = googletag.sizeMapping()
                          ${adBlock.mappings.lg ? `.addSize([${breakpoints.lg}, 0], ${adBlock.mappings.lg})` : ''}
                          ${adBlock.mappings.md ? `.addSize([${breakpoints.md}, 0], ${adBlock.mappings.md})` : ''}
                          .addSize([0, 0], ${adBlock.mappings.sm})
                          .build();
                      `
                  }
                      
                      googletag.defineSlot('/113638206/${adBlock.parentId}/${child}', ${adBlock.sizes}, 'gdp-${adBlock.parentId}-${child}')
                        ${adBlock.mappings ? '.defineSizeMapping(childMappings)' : ''}
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
