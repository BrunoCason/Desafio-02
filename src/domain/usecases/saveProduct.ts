import { ProductModel } from './models/product-model'

export type ProductParams = {
  id: string
  name: string
  subtitle: string
  label: string[]
  price: string
  quantity: number
  isInSale: boolean
  discountPercentage: number
  features: string
  description: string
  imgUrl: string
}

export interface SaveProduct {
  save: (params: ProductParams) => Promise<ProductModel>
}
