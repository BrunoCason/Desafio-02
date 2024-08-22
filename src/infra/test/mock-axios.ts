import axios from 'axios'
import { mockProductModel } from '../../domain/test'

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  const mockedAxiosResult = {
    data: mockProductModel(),
    status: 200,
  }
  mockedAxios.post.mockResolvedValue(mockedAxiosResult)
  return mockedAxios
}
