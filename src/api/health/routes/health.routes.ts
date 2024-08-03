import { Router } from 'express'
import * as healthController from '../controller/health.controller'

const healthRouter = Router()

healthRouter.get('/', healthController.health)

export default healthRouter
