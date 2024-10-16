import express from 'express';
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRoutes from './src/books/book.route.js';

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5000'],
    credentials: true,
}));

// Routes
app.use('/api/books', bookRoutes);

async function main() {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.DB_URL);
        console.log("MongoDB connected successfully");

        // Routes
        app.use('/', (req, res) => {
            res.send('Hello World');
        });

    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit process with failure
    }
}

// Initialize the connection to MongoDB
main();

// Listen on port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
