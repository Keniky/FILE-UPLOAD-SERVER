import Express from 'express';
import type {Request, Response, NextFunction } from "express";
import {router as uploadRouter} from './upload/route.js'
import type { ExecException } from 'child_process';

export interface RequestParams{
    req: Request;
    res: Response;
    next?: NextFunction;
}

export const router = Express.Router();

const respondeFunction = (req: Request, res: Response, next:NextFunction) => {
    res.status(200)
}

router.get('/',respondeFunction)

router.use('/upload/', (req: Request, res: Response, next:NextFunction) => {
    try{

        uploadRouter(req,res,next!)

    }catch(error){
       console.log(error);
        res.status(400).json({ message: 'failed to save the file'});
    }
});