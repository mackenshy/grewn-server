import { Router } from 'express'
import * as KingdomController from './../controllers/kingdom'

let router: Router = Router()
router.get('/', KingdomController.listKingdoms)

export default router
