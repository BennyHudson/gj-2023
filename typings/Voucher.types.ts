export interface Voucher {
  discount_type: 'percent' | 'amount'
  amount: number
  code: string
  product_ids?: number[]
}
