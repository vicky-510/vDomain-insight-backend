import { Response, Request, NextFunction } from "express";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);

    res.status(500).json({
        success: false,
        message: err.message ||  'Internal Server Error'
    });
}