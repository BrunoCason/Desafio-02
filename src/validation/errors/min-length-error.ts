export class MinLengthError extends Error {
  constructor(minLength: number) {
    super(`O campo deve ter pelo menos ${minLength} caracteres`)
    this.name = 'MinLengthError'
  }
}
