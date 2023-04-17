export interface Subscription {
  id: number
  meta_data: {
    [P: string]: string | number
  }[]
  line_items: {
    name: string
  }[]
  status: string
  billing_interval: number
  billing_period: string
  total: string
  next_payment_date_gmt: string
}
