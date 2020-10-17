import { Request, Response } from 'express' 
import Kingdom from './../models/Kingdom'
import SuccessResponse from './responses/SuccessResponse'
import ErrorResponse from './responses/ErrorResponse'

let listKingdoms = async (req: Request, res: Response) => {
  await Kingdom.listKingdoms()
    .then(kingdoms => res.status(200).json(new SuccessResponse(kingdoms)))
    .catch(error => res.status(400).json(new ErrorResponse('Error loading kingdoms', error)))
}

export {
  listKingdoms
}