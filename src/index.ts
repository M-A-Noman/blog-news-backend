import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

const app=express();

dotenv.config({ path: '.env.local' });

app.use(cors({
    credentials:true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server=http.createServer(app);

server.listen(process.env.PORT||4000,()=>{
    console.log(`Server is running on port http://localhost:${process.env.PORT||4000}`);
})

mongoose.Promise=Promise;

mongoose.connect(process.env.MONGO_URL??"")

mongoose.connection.on('error',(error:Error)=>{console.log(error)});