import express from "express";
import path from "path";
import { logger } from './middleware/middleware.js'
import { router as apiRouter} from './routers/api/route.js'
import cors from 'cors'

const app = express();
const PORT = process.env.PORT || 3000;
const staticFilesPath = "static";

app.use(express.json());// middle ware
app.use(express.static(staticFilesPath));
app.use(logger);//logger between evrey single request
app.use(cors())

app.use('/api', apiRouter);
app.get('/', (req, res) => {
    console.log(path.join(staticFilesPath, "index.html"))
    res.sendFile(path.join(staticFilesPath, "index.html"));
})

app.listen(PORT)