import { AxiosHttpPostClient } from './axios-http-post-client'
import { mockAxios } from '../../test'
import { mockPostRequest } from '../../../data/test'
import axios from 'axios'
import { ProductParams } from '../../../domain/usecases/saveProduct'
import { ProductModel } from '../../../domain/usecases/models/product-model'

jest.mock('axios')

type SutTypes = {
  sut: AxiosHttpPostClient<ProductParams, ProductModel>
  mockedAxios: jest.Mocked<typeof axios>
}

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpPostClient<ProductParams, ProductModel>()
  const mockedAxios = mockAxios()
  return { sut, mockedAxios }
}

describe('AxiosHttpClient', () => {
  test('should call axios with correct values', async () => {
    const request = mockPostRequest()
    const { sut, mockedAxios } = makeSut()
    await sut.post(request)
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })
  test('should return the correct status code and body', async () => {
    const { sut, mockedAxios } = makeSut()
    const promise = sut.post(mockPostRequest())
    const promiseResponse = mockedAxios.post.mock.results[0].value
    expect(promise).toEqual(promiseResponse)
  })
})
