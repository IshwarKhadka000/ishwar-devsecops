import { NextFunction, Request, Response } from 'express';
import logger from '../utils/logger';
export const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
    logger.info({
        method: req.method,
        url: req.url,
        query: req.query,
        body: req.body,
        headers: req.headers
    });
    next();
};