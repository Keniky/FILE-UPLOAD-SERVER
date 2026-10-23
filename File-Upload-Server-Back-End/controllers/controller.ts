import type { RequestParams } from "../routers/api/route.js";
import type {Request, Response} from "express";

export const saveFile = (req: Request, res: Response) =>{
    if (!req.file){
        return res.status(400).json({ message: 'no file uploaded'});
    }

    res.json({
        name: req.file.originalname
    })
}