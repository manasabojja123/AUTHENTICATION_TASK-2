// // server.js

// // Load environment variables from .env file
// require('./config/db');

// require('dotenv').config();

// const app = require('express')();
// const port=3000;
// a
// const UserRouter=require('./api/User');
// const bodyParser=require('express').json;
// app.use(bodyParser());
// app.listen(port,()=>{
//     console.log(`server is running on ${port}`);
// })

require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Define routes
app.use('/api/User', require('./api/User'));

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

