import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './server/database/connection.js';

import authRoute from './server/routes/authRoute.js'

// Initialize Dotenv in you server
dotenv.config();
const PORT = process.env.PORT || 8000;

// Creating the server
const app = express(); 

// Connecting to database
connectDB();

// Setting middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(morgan("dev"));

app.get("*", (req, res) => {
   res.status(401)
      .send("Page not found");
});

// Route Middlewares
app.use('/api/auth', authRoute);
// app.use('/api/user', require('./server/routes/userRoute'));
// app.use('/api/project', require('./server/routes/projectRoute'));

// Running server
app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}...`);
});