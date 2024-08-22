import { MinLengthValidation } from '../min-length-validation/min-length-validation'
import { RequiredFieldValidation } from '../required-field-validation/required-field-validation'
import { ValidationBuilder as sut } from './validation-builder'

describe('ValidationBuilder', () => {
  test('should return RequiredFieldValidation', () => {
    const field = 'any_field'
    const validations = sut.field(field).required().build()
    expect(validations).toEqual([new RequiredFieldValidation(field)])
  })
  test('should return MinLengthValidation', () => {
    const field = 'any_field'
    const length = 5
    const validations = sut.field(field).minLength(length).build()
    expect(validations).toEqual([new MinLengthValidation(field, length)])
  })
  test('should return a list of validations', () => {
    const field = 'any_field'
    const length = 5
    const validations = sut.field(field).required().minLength(5).build()
    expect(validations).toEqual([
      new RequiredFieldValidation(field),
      new MinLengthValidation(field, length),
    ])
  })
})
