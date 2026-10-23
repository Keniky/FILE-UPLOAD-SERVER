import type {Request, Response, NextFunction } from "express";
import type { RequestParams } from "../routers/api/route.js";
import multer from 'multer';

export const logger = (req: Request, res: Response, next:NextFunction) =>{
    console.log(`${req.method} ${req.url}`)
    next!();
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null , file.originalname);
    }
})

export const upload = multer({storage});