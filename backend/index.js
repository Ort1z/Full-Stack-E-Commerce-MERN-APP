const express = require('express');
const cors = require('cors');

const app = express();

// CORS configuration
const corsOptions = {
    origin: 'http://localhost:3000', // Allow your frontend's origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
    credentials: true, // Allow credentials (if needed, e.g., cookies)
};

app.use(cors(corsOptions)); // Apply CORS middleware

// Body parser middleware
app.use(express.json());

// Example signup endpoint
app.post('/api/signup', (req, res) => {
    // Your signup logic here
    res.json({ message: 'Signup successful!' });
});

// Start the server
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);

    app.options('/api/signup', (req, res) => {
        res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.header('Access-Control-Allow-Methods', 'POST');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        res.sendStatus(200); // Respond to preflight
    });
    
});

