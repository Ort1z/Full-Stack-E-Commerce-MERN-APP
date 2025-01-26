import express, { json } from 'express';
import cors from 'cors';
import { connect } from 'mongoose';
const app = express();
const port = 8080;

require('dotenv').config();

app.use(cors());
app.use(json());

import userSignUpController from './controller/user/userSignUp';
import userDetailsController from './controller/user/userDetails';

// Connect to MongoDB
connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// User Signup Route
app.post('/api/signup', userSignUpController);

// User Details Route
app.get('/api/user-details', userDetailsController);

// Add to Cart Route
app.post('/api/countAddToCartProduct', (req, res) => {
  try {
    res.status(200).json({ count: 5 });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Handle 404 errors
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
