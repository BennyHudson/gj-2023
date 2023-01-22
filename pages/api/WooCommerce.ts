import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'

export const WooCommerce = new WooCommerceRestApi({
  url: process.env.API_URL!,
  consumerKey: process.env.WOOCOMMERCE_CK!,
  consumerSecret: process.env.WOOCOMMERCE_CS!,
  version: 'wc/v3',
  queryStringAuth: true,
})