import mongoose, { Schema } from 'mongoose'
import { Document } from 'mongoose'

export interface IPlayer extends Document {
	_id: string
	username: string
}

const Player: Schema = new Schema(
	{
		username: { type: String, required: true },
	},
	{
		timestamps: true,
	}
)

export default mongoose.model<IPlayer>('player', Player)
