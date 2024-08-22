export class BadRequestError extends Error {
  constructor() {
    super('Dados inválidos')
    this.name = 'BadRequestError'
  }
}
