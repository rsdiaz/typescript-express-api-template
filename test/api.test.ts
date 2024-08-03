import request from 'supertest'
import { afterAll, beforeAll, describe, test } from '@jest/globals'
import { Server } from '../src/server'

describe('GET /api/health', () => {
	let server: Server

	beforeAll(async () => {
		server = new Server()
		await server.start()
	})

	afterAll(async () => {
		await server.close()
	})

	test('should return 200 OK', done => {
		request(server.app).get('/api/health').expect(200, done)
	})
})
