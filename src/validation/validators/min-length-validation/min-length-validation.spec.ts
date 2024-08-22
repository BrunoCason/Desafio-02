import { MinLengthError } from '../../errors'
import { MinLengthValidation } from './min-length-validation'
const MIN_LENGTH = 5

const makeSut = (): MinLengthValidation => {
  return new MinLengthValidation('any_field', MIN_LENGTH)
}

describe('MinLengthValidation', () => {
  test('should return error if value is invalid', () => {
    const sut = makeSut()
    const error = sut.validate('1234')
    expect(error).toEqual(new MinLengthError(MIN_LENGTH))
  })
  test('should return falsy if value is valid', () => {
    const sut = makeSut()
    const error = sut.validate('12345')
    expect(error).toBeFalsy()
  })
})
