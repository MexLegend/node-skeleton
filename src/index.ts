import 'module-alias/register';
import 'colors';
import dotenv from 'dotenv';
import express, { json } from 'express';
import { dbConnect } from '@database/mongo';
import router from '@routers/index.router';
import { errorController } from '@controllers/error/index.controller';

if (process.env.NODE_ENV?.includes('development')) dotenv.config();

const api = express();

api.use(json())
api.use("/api", router);
api.use(errorController);

const PORT = process.env.PORT || 3000;

dbConnect();
api.listen(PORT, () => {
    console.log(`API running on ${'http://localhost:'.concat(PORT.toString()).green}`);
})