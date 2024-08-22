export type ItemProps = {
  id: number
  name: string
  price: string
  discountPercentage: number
  imgUrl: string
  label: string[]
  isInSale: boolean
}

export type ProductProps = ItemProps & {
  subtitle: string
  features: string
  description: string
  sales: number
}

export type DataProps = {
  plants: ProductProps[]
}
