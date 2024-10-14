import express from 'express';
const app = express();
const port = process.env.PORT || 5000;

// Routes
app.use('/', (req, res) => {
    res.send('Hello World');
});

// Listen on port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});