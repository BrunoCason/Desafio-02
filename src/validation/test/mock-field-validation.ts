import { FieldValidation } from '../protocols'

export class FieldValidationMock implements FieldValidation {
  error: Error | null = null
  constructor(readonly field: string) {}
  validate(value: string): Error | null {
    return this.error
  }
}
