import {
  BadRequestError,
  NotFoundError,
  UnexpectedError,
} from '../../../domain/errors'
import { mockProduct, mockProductModel } from '../../../domain/test'
import { ProductModel } from '../../../domain/usecases/models/product-model'
import { ProductParams } from '../../../domain/usecases/saveProduct'
import { HttpStatusCode } from '../../http'
import { HttpPostClientMock } from '../../test'
import { RemoteSaveProduct } from './remote-save-product'

type SutTypes = {
  sut: RemoteSaveProduct
  httpPostClientMock: HttpPostClientMock<ProductParams, ProductModel>
}

const makeSut = (url: string = 'any_url'): SutTypes => {
  const httpPostClientMock = new HttpPostClientMock<
    ProductParams,
    ProductModel
  >()
  const sut = new RemoteSaveProduct(url, httpPostClientMock)
  return { sut, httpPostClientMock }
}

describe('RemoteAuthentication', () => {
  test('should call HttpPostClient with correct url', async () => {
    const url = 'another_url'
    const { sut, httpPostClientMock } = makeSut(url)
    await sut.save(mockProduct())
    expect(httpPostClientMock.url).toBe(url)
  })
  test('should call HttpPostClient with correct body', async () => {
    const { sut, httpPostClientMock } = makeSut()
    const productParams = mockProduct()
    await sut.save(productParams)
    expect(httpPostClientMock.body).toEqual(productParams)
  })
  test('should throw BadRequestError if HttpPostClient returns 400', async () => {
    const { sut, httpPostClientMock } = makeSut()
    httpPostClientMock.response = {
      statusCode: HttpStatusCode.badRequest,
    }
    const promise = sut.save(mockProduct())
    await expect(promise).rejects.toThrow(new BadRequestError())
  })
  test('should throw NotFoundError if HttpPostClient returns 404', async () => {
    const { sut, httpPostClientMock } = makeSut()
    httpPostClientMock.response = {
      statusCode: HttpStatusCode.notFound,
    }
    const promise = sut.save(mockProduct())
    await expect(promise).rejects.toThrow(new NotFoundError())
  })
  test('should throw UnexpectedError if HttpPostClient returns 500', async () => {
    const { sut, httpPostClientMock } = makeSut()
    httpPostClientMock.response = {
      statusCode: HttpStatusCode.serverError,
    }
    const promise = sut.save(mockProduct())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })
  test('should return an ProductModel if HttpPostClient returns 201', async () => {
    const { sut, httpPostClientMock } = makeSut()
    const body = mockProductModel()
    httpPostClientMock.response = {
      statusCode: HttpStatusCode.created,
      body: body,
    }
    const productResponse = await sut.save(mockProduct())
    expect(productResponse).toEqual({
      statusCode: HttpStatusCode.created,
      body: body,
    })
  })
})
