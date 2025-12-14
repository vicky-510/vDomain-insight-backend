import { Response, Request, NextFunction } from "express";
// import { config } from '../config/env';


export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);

    res.status(500).json({
        success: false,
        message: err.message ||  'Internal Server Error'
    });
}