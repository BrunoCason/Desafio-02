import { RequiredFieldError } from '../../errors'
import { RequiredFieldValidation } from './required-field-validation'

const makeSut = (): RequiredFieldValidation => {
  return new RequiredFieldValidation('any_field')
}

describe('RequiredFieldValidation', () => {
  test('should return error if field is empty', () => {
    const sut = makeSut()
    const error = sut.validate('')
    expect(error).toEqual(new RequiredFieldError())
  })
  test('should return falsy if field is not empty', () => {
    const sut = makeSut()
    const error = sut.validate('any_value')
    expect(error).toBeFalsy()
  })
})
