import React, { ReactElement, FC } from 'react'
import Script from 'next/script'
import { useTheme } from 'styled-components'

import { Theme } from '@themes/gjTheme/gjTheme.types'

import { googleAds } from './helpers/googleAds'

const Scripts: FC = (): ReactElement => {
  const { breakpoints } = useTheme() as Theme

  return (
    <>
      <Script src='https://www.googletagmanager.com/gtag/js?id=UA-416440-57' strategy='afterInteractive' />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-416440-57');
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
