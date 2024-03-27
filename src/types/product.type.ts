import { Order, Sortby } from 'src/constants/product'

export interface ProductInterface {
  _id: string
  images: string[]
  price: number
  rating: number
  price_before_discount: number
  quantity: number
  sold: number
  view: number
  name: string
  description: string
  category: string
  image: string
  createdAt: string
  updatedAt: string
}

export interface ProductListInterface {
  products: ProductInterface[]
  pagination: {
    page: number
    limit: number
    page_size: number
  }
}

export interface ProductConfigInterface {
  page?: number
  limit?: number
  order?: Order.asc | Order.desc
  sort_by?: Sortby.createdAt | Sortby.price | Sortby.sold | Sortby.view
  exclude?: string
  rating_filter?: number
  price_max?: number
  price_min?: number
  name?: string
}
