import {Router} from 'express'
import * as userCtrl from '../controllers/user.controller'
import { authJWT } from '../middlewares'

const router = Router()
router.post('/',[ authJWT.verifyToken,authJWT.isModerator],userCtrl.createUser)
export default router;