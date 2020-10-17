import mongoose, { Schema } from 'mongoose'
import { Document } from 'mongoose'

export interface IKingdom extends Document {
	_id: string,
  name: string,
  picture: string
}

const Kingdom: Schema = new Schema(
	{
    name: { type: String, required: true },
    picture: { type: String, required: false }
	},
	{
		timestamps: true
	}
)

export default mongoose.model<IKingdom>('kingdom', Kingdom)
