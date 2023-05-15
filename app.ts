import express from 'express';
import cors from 'cors';
// const express = require('express')
// const mongoose = require('mongoose');
const app = express();
// const port = 5000;
//using cors
app.use(cors()); 
app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  export default app;