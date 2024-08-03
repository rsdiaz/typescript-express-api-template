import { Router } from 'express'
import healthRouter from '../api/health/routes/health.routes'

const routes = Router()

routes.use('/api/health', healthRouter)

export default routes
