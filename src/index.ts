// import express from 'express';
import mongoose from 'mongoose';
import app from '../app';
// import cors from 'cors';
// // const express = require('express')
// // const mongoose = require('mongoose');
// const app = express();
const port = 5000;
//using cors
// app.use(cors()); 


// getting-started.js

  
  
bootstrap().catch(err => console.log(err));

async function bootstrap() {
 try {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    console.log("mongoose connected");

    app.listen(port, () => {
        console.log(`server app listening on port ${port}`)
      })
    
 } catch (error) {
    console.log(`error find :  ${error}`)
    
 }
   
}
bootstrap();

