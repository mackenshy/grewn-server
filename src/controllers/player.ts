import { Request, Response } from 'express' 
import Player from './../models/Player'
import { IPlayer } from './../lib/db/schemas/Player'
import SuccessResponse from './responses/SuccessResponse'
import ErrorResponse from './responses/ErrorResponse'

const createPlayer = (req: Request, res: Response) => {
  const body: IPlayer = req.body

  if (!body) {
    return res.status(400).json(new ErrorResponse('You must provide a player', 'You must provide a player'))
  }

  Player.createPlayer(body)
    .then((player: Player) => res.status(201).json(new SuccessResponse(player.toJSON())))
		.catch((error) => res.status(400).json(new ErrorResponse('Error creating player', error)))
}

let listPlayers = async (req: Request, res: Response) => {
  await Player.listPlayers()
    .then(players => res.status(200).json(new SuccessResponse(players)))
    .catch(error => res.status(400).json(new ErrorResponse('Error loading players', error)))
}

export {
  createPlayer,
  listPlayers
}