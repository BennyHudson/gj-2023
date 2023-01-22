import React, { ReactElement, FC } from 'react'
import Head from 'next/head'
import he from 'he'

import featuredImageUrl from '@helpers/featuredImageUrl'

import { HeadTagsProps } from './HeadTags.types'

const HeadTags: FC<HeadTagsProps> = ({
  seo,
}: HeadTagsProps): ReactElement => {
  return (
    <Head>
      <link rel='apple-touch-icon' sizes='180x180' href='https://cdn.thegentlemansjournal.com/wp-content/themes/lydia/assets/favicons/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='https://cdn.thegentlemansjournal.com/wp-content/themes/lydia/assets/favicons/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='https://cdn.thegentlemansjournal.com/wp-content/themes/lydia/assets/favicons/favicon-16x16.png' />
      <meta charSet='UTF-8' />
      <meta httpEquiv='x-ua-compatible' content='ie=edge,chrome=1' />
      <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=1' />
      <meta name='author' content={'The Gentleman\'s Journal'} />
      <meta name='web_author' content='wedo.digital | wedo.digital' />
      <meta name='format-detection' content='telephone=no' />
      <meta name='mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-wep-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='black' />
      <meta name='apple-mobile-web-app-status-barstyle' content='black-translucent' />
      <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
      <title>{he.decode(seo.title)}</title>
      <meta name='description' content={seo.metaDesc} />
      <link rel='canonical' href={seo.canonical}></link>
      <meta property='og:locale' content='en_GB' />
      <meta property='og:type' content={seo.opengraphType} />
      <meta property='og:title' content={seo.opengraphTitle} />
      <meta property='og:description' content={seo.opengraphDescription} />
      <meta property='og:url' content={seo.opengraphUrl} />
      <meta property='og:site_name' content={seo.opengraphSiteName} />
      <meta property='article:publisher' content={seo.opengraphPublisher} />
      {seo.opengraphImage && <meta property='og:image' content={featuredImageUrl(seo.opengraphImage.sourceUrl)} />}
      <meta property='og:image:width' content='2560' />
      <meta property='og:image:height' content='1076' />
      <meta property='og:image:type' content='image/jpeg' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@thegentsjournal' />
    </Head>
  )
}

export default HeadTags
