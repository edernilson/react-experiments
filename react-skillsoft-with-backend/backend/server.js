require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const port = process.env.PORT || 8000;
const app = express();
const routes = require('./routes/routes');

// DB connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});