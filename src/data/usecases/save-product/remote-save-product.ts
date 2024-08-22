import {
  BadRequestError,
  NotFoundError,
  UnexpectedError,
} from '../../../domain/errors'
import { ProductModel } from '../../../domain/usecases/models/product-model'
import {
  ProductParams,
  SaveProduct,
} from '../../../domain/usecases/saveProduct'
import { HttpPostClient, HttpStatusCode } from '../../http'

export class RemoteSaveProduct implements SaveProduct {
  constructor(
    private readonly url: string,
    private readonly HttpPostClient: HttpPostClient<ProductParams, ProductModel>
  ) {}

  async save(params: ProductParams): Promise<ProductModel> {
    const httpResponse = await this.HttpPostClient.post({
      url: this.url,
      body: params,
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.created:
        return httpResponse
      case HttpStatusCode.badRequest:
        throw new BadRequestError()
      case HttpStatusCode.notFound:
        throw new NotFoundError()
      default:
        throw new UnexpectedError()
    }
  }
}
