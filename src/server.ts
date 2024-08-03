import express from 'express'
import app from './app'
import * as http from 'http'

export class Server {
	app: express.Express
	private server!: http.Server

	constructor() {
		this.app = express()
	}

	async start() {
		app(this.app)

		this.server = this.app.listen(this.app.get('port'), () => {
			console.log(
				`Express server is running at http://localhost:${this.app.get('port')}`,
			)
		})

		return this.server
	}

	async close() {
		this.server.close()
		console.log('Servidor parado')
	}
}

const server = new Server()

export default server

if (require.main === module) {
	server.start().catch(error => {
		console.error(error)
	})
}

process.on('unhandledRejection', (err: string) => {
	console.log(err)
	process.exit(1)
})
