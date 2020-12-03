require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');


const app = express();

// Body-parser middleware
app.use(bodyParser.json());

// DB Config
// const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>  console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// anything that goes to /api/items should refer to the items variable
app.use('/api/items', items); 

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));