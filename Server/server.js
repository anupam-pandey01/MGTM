const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const mainRouter = require('./routes/main.router');
const cookieParser = require('cookie-parser')


require("dotenv").config();
const app = express();


// Connect to Database
// Name Your Database into ".env file"
connectDB();

// Middleware
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(cookieParser())
app.use(express.json());
app.use(mainRouter);


app.get('/', (req, res) => {
  res.send('API is running with CORS enabled...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));