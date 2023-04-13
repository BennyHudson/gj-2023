import he from 'he'
import Head from 'next/head'
import type { FC, ReactElement } from 'react'
import React from 'react'

import featuredImageUrl from '@helpers/featuredImageUrl'

import type { HeadTagsProps } from './HeadTags.types'

const HeadTags: FC<HeadTagsProps> = ({ seo, siteOptions }: HeadTagsProps): ReactElement => {
  const { favicons } = siteOptions.gjOptions.faviconImages
  return (
    <Head>
      <link rel='apple-touch-icon' sizes='180x180' href={featuredImageUrl(favicons.faviconLarge.fullSize)} />
      <link rel='icon' type='image/png' sizes='32x32' href={featuredImageUrl(favicons.faviconMedium.fullSize)} />
      <link rel='icon' type='image/png' sizes='16x16' href={featuredImageUrl(favicons.faviconSmall.fullSize)} />
      <meta charSet='UTF-8' />
      <meta httpEquiv='x-ua-compatible' content='ie=edge,chrome=1' />
      <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=1' />
      <meta name='author' content={'The Gentleman\'s Journal'} />
      <meta name='web_author' content='wedo.digital | wedo.digital' />
      <meta name='format-detection' content='telephone=no' />
      <meta name='mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-wep-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='black' />
      <meta name='apple-mobile-web-app-status-barstyle' content='black-translucent' />
      <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
      <title>{he.decode(seo.title)}</title>
      {seo.metaDesc && <meta name='description' content={he.decode(seo.metaDesc)} />}
      {seo.canonical && <link rel='canonical' href={seo.canonical.replace('cms.', '')}></link>}
      <meta property='og:locale' content='en_GB' />
      {seo.opengraphType && <meta property='og:type' content={seo.opengraphType} />}
      {seo.opengraphTitle && <meta property='og:title' content={he.decode(seo.opengraphTitle)} />}
      {seo.opengraphDescription && <meta property='og:description' content={he.decode(seo.opengraphDescription)} />}
      {seo.opengraphUrl && <meta property='og:url' content={seo.opengraphUrl.replace('cms.', '')} />}
      {seo.opengraphSiteName && <meta property='og:site_name' content={he.decode(seo.opengraphSiteName)} />}
      {seo.opengraphPublisher && <meta property='article:publisher' content={he.decode(seo.opengraphPublisher)} />}
      {seo.opengraphImage && <meta property='og:image' content={featuredImageUrl(seo.opengraphImage.fullSize)} />}
      <meta property='og:image:width' content='2560' />
      <meta property='og:image:height' content='1076' />
      <meta property='og:image:type' content='image/jpeg' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@thegentsjournal' />
    </Head>
  )
}

export default HeadTags
