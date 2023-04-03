import { Voucher } from '@typings/Voucher.types'

export interface CartItemProps {
  productId: number
  removeable: boolean
  voucher?: Voucher
}
