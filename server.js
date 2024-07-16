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
app.use('/api/PostRoutes', require('./api/PostRoutes'));

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
