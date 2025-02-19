import {
  HttpPostClient,
  HttpResponse,
  HttpStatusCode,
  HttpPostClientParams,
} from '../http'

export class HttpPostClientMock<T, R> implements HttpPostClient<T, R> {
  url?: string
  body?: T
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok,
  }
  async post(params: HttpPostClientParams<T>): Promise<HttpResponse<R>> {
    this.url = params.url
    this.body = params.body
    return Promise.resolve(this.response)
  }
}
