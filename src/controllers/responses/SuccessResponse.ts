import BaseResponse from './BaseResponse'

export default class SuccessResponse extends BaseResponse {
	#data: Array<object> | object

	constructor(data: Array<object> | object) {
		super(true)
		this.#data = data
	}

  get data() {
    return this.#data
	}

	toJSON(): object {
		let parent = super.toJSON()
		return Object.assign(parent, {
			data: this.data
		})
	}
}