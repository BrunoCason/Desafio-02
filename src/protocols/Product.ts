export type Product = {
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

export type Products = {
  plants: Product[]
}
