import type { AffiliateButtonBlock } from './contentBuilder/affiliateButtonBlock'
import { affiliateButtonBlock } from './contentBuilder/affiliateButtonBlock'
import type { AffiliateProductBlock } from './contentBuilder/affiliateProductBlock'
import { affiliateProductBlock } from './contentBuilder/affiliateProductBlock'
import type { BlockQuoteBlock } from './contentBuilder/blockquoteBlock'
import { blockQuoteBlock } from './contentBuilder/blockquoteBlock'
import type { ButtonInfoBlock } from './contentBuilder/buttonInfoBlock'
import { buttonInfoBlock } from './contentBuilder/buttonInfoBlock'
import type { CodeSnippetBlock } from './contentBuilder/codeSnippetBlock'
import { codeSnippetBlock } from './contentBuilder/codeSnippetBlock'
import type { CompetitionFormBlock } from './contentBuilder/competitionFormBlock'
import { competitionFormBlock } from './contentBuilder/competitionFormBlock'
import type { HeadingBlock } from './contentBuilder/headingBlock'
import { headingBlock } from './contentBuilder/headingBlock'
import type { ImageBlock } from './contentBuilder/imageBlock'
import { imageBlock } from './contentBuilder/imageBlock'
import type { ImageGalleryBlock } from './contentBuilder/imageGalleryBlock'
import { imageGalleryBlock } from './contentBuilder/imageGalleryBlock'
import type { ImageSliderBlock } from './contentBuilder/imageSliderBlock'
import { imageSliderBlock } from './contentBuilder/imageSliderBlock'
import type { ListBlock } from './contentBuilder/listBlock'
import { listBlock } from './contentBuilder/listBlock'
import type { MasonryGalleryBlock } from './contentBuilder/masonryGalleryBlock'
import { masonryGalleryBlock } from './contentBuilder/masonryGalleryBlock'
import type { MediaAndTextBlock } from './contentBuilder/mediaAndTextBlock'
import { mediaAndTextBlock } from './contentBuilder/mediaAndTextBlock'
import type { ParagraphBlock } from './contentBuilder/paragraphBlock'
import { paragraphBlock } from './contentBuilder/paragraphBlock'
import type { PodcastPlayerBlock } from './contentBuilder/podcastPlayerBlock'
import { podcastPlayerBlock } from './contentBuilder/podcastPlayerBlock'
import type { RecommendedProductsBlock } from './contentBuilder/recommendedProductsBlock'
import { recommendedProductsBlock } from './contentBuilder/recommendedProductsBlock'
import type { SingleAffiliateBlock } from './contentBuilder/singleAffiliateBlock'
import { singleAffiliateBlock } from './contentBuilder/singleAffiliateBlock'
import type { VideoBlock } from './contentBuilder/videoBlock'
import { videoBlock } from './contentBuilder/videoBlock'

export type ContentBuilder = AffiliateButtonBlock &
  AffiliateProductBlock &
  BlockQuoteBlock &
  ButtonInfoBlock &
  CodeSnippetBlock &
  CompetitionFormBlock &
  HeadingBlock &
  ImageBlock &
  ImageGalleryBlock &
  ImageSliderBlock &
  ListBlock &
  MasonryGalleryBlock &
  MediaAndTextBlock &
  ParagraphBlock &
  PodcastPlayerBlock &
  RecommendedProductsBlock &
  SingleAffiliateBlock &
  VideoBlock

export const contentBuilder = (postType: string) => {
  return `contentBuilder {
    ${affiliateButtonBlock(postType)}
    ${affiliateProductBlock(postType)}    
    ${blockQuoteBlock(postType)}
    ${buttonInfoBlock(postType)}
    ${codeSnippetBlock(postType)}
    ${competitionFormBlock(postType)}
    ${headingBlock(postType)}
    ${imageBlock(postType)}
    ${imageGalleryBlock(postType)}
    ${imageSliderBlock(postType)}
    ${listBlock(postType)}
    ${masonryGalleryBlock(postType)}
    ${mediaAndTextBlock(postType)}
    ${paragraphBlock(postType)}
    ${podcastPlayerBlock(postType)}
    ${recommendedProductsBlock(postType)}
    ${singleAffiliateBlock(postType)}
    ${videoBlock(postType)}
  }`
}
