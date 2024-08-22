import { createContext } from 'react'
import { Validation } from '../../protocols'
import { NewProduct } from '../../pages'

type NewProductState = {
  newProduct: NewProduct
  setNewProduct: React.Dispatch<React.SetStateAction<NewProduct>>
  validation: Validation
}

export default createContext<NewProductState>({} as NewProductState)
