import Schema from './../lib/db/schemas/Player'
import { IPlayer } from './../lib/db/schemas/Player'

export default class Player {
	private _player: IPlayer

	constructor(player: IPlayer) {
		this._player = player
  }

  toJSON() {
    return {
      id: this._player._id,
      username: this._player.username
    }
  }

  static createPlayer(player: IPlayer): Promise<Player> {
    const schema = new Schema(player)
    if (!schema) {
			throw 'Invalid player'
		}
    return schema.save()
      .then((player: IPlayer) => new Player(player))
  }

  static listPlayers() {
    return Schema.find({})
      .then((players: IPlayer[]) => players.map((player: IPlayer) => new Player(player)))
  }
}