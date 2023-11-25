// db.js
//process.env.
const mongoose = require('mongoose');

const connectToCosmosDB = async () => {
  try {
    await mongoose.connect("mongodb://campusconnect:DiYW9aGslPgw6pzL28OkGEmKzudtaoQV27BfEdT03IKYrm2OEdhJNDbxjgfjTnF4nSeC0vfnPZ6HACDb2cp1SQ==@campusconnect.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@campusconnect@", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to Azure Cosmos DB');
  } catch (error) {
    console.error('Error connecting to Azure Cosmos DB:', error.message);
  }
};

module.exports = connectToCosmosDB;

