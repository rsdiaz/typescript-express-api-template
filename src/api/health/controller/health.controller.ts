import { Request, Response } from 'express'

export const health = (request: Request, response: Response) => {
	response.status(200).send('Express Typescript Template')
}
