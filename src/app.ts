import express, { Express } from 'express'
import routes from './routes/index.routes'

// Create Express server
export default (app: Express): void => {
	app.set('port', process.env.PORT ?? 3000)

	app.disable('x-powered-by')
	app.use(express.json())
	app.use(express.urlencoded({ extended: true }))

	app.use(routes)
}
