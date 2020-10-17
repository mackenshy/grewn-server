import Schema from './../lib/db/schemas/Kingdom'
import { IKingdom } from './../lib/db/schemas/Kingdom'

export default class Kingdom {
  private _kingdom: IKingdom

	constructor(kingdom: IKingdom) {
		this._kingdom = kingdom
  }

  get id(): string {
    return this._kingdom._id
  }

  get name(): string {
    return this._kingdom.name
  }

  get picture(): string {
    return this._kingdom.picture
  }

  toJSON() {
    return {
      id: this.id,
      username: this.name,
      picture: this.picture
    }
  }

  static listKingdoms() {
    return Schema.find({})
      .then((kingdoms: IKingdom[]) => kingdoms.map((kingdom: IKingdom) => new Kingdom(kingdom)))
  }
}