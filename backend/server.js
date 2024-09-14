import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import taskRoutes from './routes/taskRoutes.js';
import errorHandler from './middleware/errorMiddleware.js';

dotenv.config();  // Load environment variables from .env file

connectDB();  // Connect to the MongoDB database

const app = express();
app.use(express.json());  // Parse JSON bodies

// Routes
app.use('/api/tasks', taskRoutes);  // Task routes

// Error handling middleware
app.use(errorHandler);

// Add a log to verify server startup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);
