import { affiliateButtonBlock, AffiliateButtonBlock } from './contentBuilder/affiliateButtonBlock'
import { affiliateProductBlock, AffiliateProductBlock } from './contentBuilder/affiliateProductBlock'
import { blockQuoteBlock, BlockQuoteBlock } from './contentBuilder/blockquoteBlock'
import { buttonInfoBlock, ButtonInfoBlock } from './contentBuilder/buttonInfoBlock'
import { codeSnippetBlock, CodeSnippetBlock } from './contentBuilder/codeSnippetBlock'
import { competitionFormBlock, CompetitionFormBlock } from './contentBuilder/competitionFormBlock'
import { headingBlock, HeadingBlock } from './contentBuilder/headingBlock'
import { imageBlock, ImageBlock } from './contentBuilder/imageBlock'
import { imageGalleryBlock, ImageGalleryBlock } from './contentBuilder/imageGalleryBlock'
import { imageSliderBlock, ImageSliderBlock } from './contentBuilder/imageSliderBlock'
import { listBlock, ListBlock } from './contentBuilder/listBlock'
import { masonryGalleryBlock, MasonryGalleryBlock } from './contentBuilder/masonryGalleryBlock'
import { mediaAndTextBlock, MediaAndTextBlock } from './contentBuilder/mediaAndTextBlock'
import { paragraphBlock, ParagraphBlock } from './contentBuilder/paragraphBlock'
import { podcastPlayerBlock, PodcastPlayerBlock } from './contentBuilder/podcastPlayerBlock'
import { recommendedProductsBlock, RecommendedProductsBlock } from './contentBuilder/recommendedProductsBlock'
import { singleAffiliateBlock, SingleAffiliatBlock } from './contentBuilder/singleAffiliateBlock'
import { videoBlock, VideoBlock } from './contentBuilder/videoBlock'

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
  SingleAffiliatBlock &
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
