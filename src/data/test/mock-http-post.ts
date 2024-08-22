import { mockProduct } from '../../domain/test'
import { ProductParams } from '../../domain/usecases/saveProduct'
import { HttpPostClientParams } from '../http'

export const mockPostRequest = (): HttpPostClientParams<ProductParams> => ({
  url: 'any_url',
  body: mockProduct(),
})
