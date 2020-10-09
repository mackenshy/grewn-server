import BaseResponse from "./BaseResponse";

export default class ErrorResponse extends BaseResponse {
  
  #message: string

  constructor(message: string, error: object | string) {
    super(false)
    this.#message = message
    console.error(error)
  }

  get message(): string  {
    return this.#message
  }

  toJSON(): object {
		let parent = super.toJSON()
		return Object.assign(parent, {
			message: this.message
		})
	}
}