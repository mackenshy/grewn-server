export default class BaseResponse {
  #success: boolean

  constructor(success: boolean) {
    this.#success = success
  }

  get success(): boolean {
    return this.#success
  }

  toJSON(): object {
    return {
      success: this.success
    }
  }
}