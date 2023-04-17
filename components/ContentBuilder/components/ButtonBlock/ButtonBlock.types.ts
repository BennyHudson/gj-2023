import type { AffiliateProduct } from '@queries/fragments/contentBuilder/affiliateProductBlock'
import type { ButtonInfoBlock } from '@queries/fragments/contentBuilder/buttonInfoBlock'

export interface ButtonBlockProps {
  title: ButtonInfoBlock['title']
  callToAction?: ButtonInfoBlock['callToAction']
  link: ButtonInfoBlock['link']
  price?: AffiliateProduct['price']
  image?: ButtonInfoBlock['image']
}
