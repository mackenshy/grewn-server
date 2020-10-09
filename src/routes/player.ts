import { Router } from 'express'
import * as PlayerController from './../controllers/player'

let router: Router = Router()
router.post(`/`, PlayerController.createPlayer)
router.get('/', PlayerController.listPlayers)

export default router
