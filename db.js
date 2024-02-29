const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://admin:123@cluster0.m5xynsk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const db = {
  connect:async()=>{
    try{
      await mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }).then(() => {
        console.log('Connected to MongoDB Atlas');
      })
    }catch(err){
      console.error('Error connecting to MongoDB Atlas:', err.message);

    }
  },
  connection:mongoose.connection
}
module.exports = db;
