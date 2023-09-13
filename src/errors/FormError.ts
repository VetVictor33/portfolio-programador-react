export default class FormError extends Error {
  constructor(message: string) {
    super(message)
  }
}