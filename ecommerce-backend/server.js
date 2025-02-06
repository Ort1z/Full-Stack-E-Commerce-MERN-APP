const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const User = require('./models/userModel'); // Add this line

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend URL
    credentials: true,
}));
app.use(express.json());

// Routes
app.use('/api', authRoutes);

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    // Logic to verify user credentials
    // Example:
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: "User not found" });
    }
    /**
     * Compares the provided password with the user's stored password.
     * 
     * @constant {boolean} isMatch - Indicates whether the provided password matches the stored password.
     * @async
     * @function
     * @param {string} password - The password to compare.
     * @returns {Promise<boolean>} - A promise that resolves to a boolean indicating if the passwords match.
     */
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: "Invalid credentials" });
    }
    res.status(200).json({ success: true, message: "Login successful", data: user });
  });

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

mongoose.connection.on('connected', () => {
    console.log('MongoDB connected successfully');
});

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));