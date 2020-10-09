import express, {Request, Response} from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import db from './lib/db'
import PlayerRouter from './routes/player'

const app = express()
const PORT: number = 5000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'DB connection error:'))

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Withchers')
})

app.use('/players', PlayerRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

