import { AffiliateButtonBlock, affiliateButtonBlock } from './contentBuilder/affiliateButtonBlock'
import { AffiliateProductBlock, affiliateProductBlock } from './contentBuilder/affiliateProductBlock'
import { BlockQuoteBlock, blockQuoteBlock } from './contentBuilder/blockquoteBlock'
import { ButtonInfoBlock, buttonInfoBlock } from './contentBuilder/buttonInfoBlock'
import { CodeSnippetBlock, codeSnippetBlock } from './contentBuilder/codeSnippetBlock'
import { CompetitionFormBlock, competitionFormBlock } from './contentBuilder/competitionFormBlock'
import { HeadingBlock, headingBlock } from './contentBuilder/headingBlock'
import { ImageBlock, imageBlock } from './contentBuilder/imageBlock'
import { ImageGalleryBlock, imageGalleryBlock } from './contentBuilder/imageGalleryBlock'
import { ImageSliderBlock, imageSliderBlock } from './contentBuilder/imageSliderBlock'
import { ListBlock, listBlock } from './contentBuilder/listBlock'
import { MasonryGalleryBlock, masonryGalleryBlock } from './contentBuilder/masonryGalleryBlock'
import { MediaAndTextBlock, mediaAndTextBlock } from './contentBuilder/mediaAndTextBlock'
import { ParagraphBlock, paragraphBlock } from './contentBuilder/paragraphBlock'
import { PodcastPlayerBlock, podcastPlayerBlock } from './contentBuilder/podcastPlayerBlock'
import { RecommendedProductsBlock, recommendedProductsBlock } from './contentBuilder/recommendedProductsBlock'
import { SingleAffiliatBlock, singleAffiliateBlock } from './contentBuilder/singleAffiliateBlock'
import { VideoBlock, videoBlock } from './contentBuilder/videoBlock'

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
