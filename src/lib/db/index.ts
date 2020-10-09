import mongoose from 'mongoose'

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env
const URL: string = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`

mongoose
	.connect(URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.catch((error) => {
		console.log(`Error to connect to MDB: ${error.message}`)
	})

let db = mongoose.connection

export default db
