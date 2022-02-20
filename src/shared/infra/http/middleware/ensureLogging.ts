import { redisClient } from "@shared/infra/redis";
import { NextFunction, Request, Response } from "express";

const ensureLogging = (err: Error, req: Request, res: Response, next: NextFunction) => {
	const id = req.id;

	const start = new Date().getTime();

	res.on('finish', () => {
		const { method, originalUrl, query, params, body } = req;
		const { statusCode, statusMessage } = res;

		const elapsed = new Date().getTime() - start;

		const data = {
			id: id ? id : null,
			method, 
			originalUrl, 
			query, 
			params, 
			body,
			statusCode, 
			statusMessage,
			elapsed,
			api: 'lactea'
		}

		redisClient.rpush('queue', JSON.stringify(data));

		console.info(`${id} ${req.method} ${req.originalUrl} ${res.statusCode} ${elapsed}ms`);
	});

	next();
};

export { ensureLogging };