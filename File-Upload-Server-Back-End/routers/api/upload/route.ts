import Express from 'express';
import {upload} from '../../../middleware/middleware.js'
import { saveFile } from '../../../controllers/controller.js';

export const router = Express.Router();


router.post('/', upload.single('file'), saveFile)
