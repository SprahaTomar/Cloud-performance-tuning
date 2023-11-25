// app.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const authRoutes = require('./authRoutes'); // Adjust the path based on your project structure
const blogRoutes = require('./blogRoutes'); // Adjust the path based on your project structure


const app = express();
const PORT = process.env.PORT || 3000;

// Use bodyParser middleware to parse JSON requests
app.use(bodyParser.json());

// Set up Azure Cosmos DB connection
const connectToCosmosDB = async () => {
  try {
    // Replace the connection string with your actual Cosmos DB connection string
    await mongoose.connect(
      'mongodb://campusconnect1:3tvfA7YpRiSMXLrtJKvmODrhJG4GefWhpUadVPkho719gpzIg15VQ4tv1BYf5TH7suDS3sCYXAWFACDbpAUwaA==@campusconnect1.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@campusconnect1@',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('Connected to Azure Cosmos DB');
  } catch (error) {
    console.error('Error connecting to Azure Cosmos DB:', error.message);
  }
};

// Invoke the Cosmos DB connection function
connectToCosmosDB();

// Routes for authentication, blog post creation, etc.
app.use('/auth', authRoutes);
app.use('/blog', blogRoutes);

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
