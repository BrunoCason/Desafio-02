import { FieldValidationMock } from '../../test'
import { ValidationComposite } from './validation-composite'

type SutTypes = {
  sut: ValidationComposite
  fieldValidationMocks: FieldValidationMock[]
}

const makeSut = (fieldName: string): SutTypes => {
  const fieldValidationMocks = [
    new FieldValidationMock(fieldName),
    new FieldValidationMock(fieldName),
  ]
  const sut = ValidationComposite.build(fieldValidationMocks)
  return { sut, fieldValidationMocks }
}

describe('ValidationComposite', () => {
  test('should return error if any Validation fails', () => {
    const fieldName = 'any_field'
    const value = 'any_value'
    const { sut, fieldValidationMocks } = makeSut(fieldName)
    const errorMessage = 'any_error_message'
    fieldValidationMocks[0].error = new Error(errorMessage)
    fieldValidationMocks[1].error = new Error('another_error_message')
    const error = sut.validate(fieldName, value)
    expect(error).toBe(errorMessage)
  })
  test('should return falsy if Validation succeeds', () => {
    const fieldName = 'any_field'
    const value = 'any_value'
    const { sut } = makeSut(fieldName)
    const error = sut.validate(fieldName, value)
    expect(error).toBeFalsy()
  })
})
