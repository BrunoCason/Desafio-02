import axios from 'axios'
import {
  HttpPostClient,
  HttpPostClientParams,
  HttpResponse,
} from '../../../data/http'

export class AxiosHttpPostClient<T, R> implements HttpPostClient<T, R> {
  async post(params: HttpPostClientParams<T>): Promise<HttpResponse<R>> {
    const httpResponse = await axios.post(params.url, params.body)
    return {
      statusCode: httpResponse.status,
      body: httpResponse.data,
    }
  }
}
