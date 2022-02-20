import { AppError } from "@shared/errors/AppError";
import { NextFunction, Request, Response } from "express";

const ensureError = (err: Error, req: Request, res: Response, next: NextFunction) => {
	if (err instanceof AppError) {
		return res.status(err.statusCode).json({
			message: err.message
		});
	};
	console.log(err.message);
	return res.status(500).json({
		status: 'error',
		message: `Internal server erro - ${err.message}`
	});
};

export { ensureError };