// const MongoClient=require('mongodb').MongoClient;
const {MongoClient, ObjectID}=require('mongodb');

// var obj = new ObjectID();
// console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if(err){
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connection to mongoDB server");
db.collection('Users').insertOne({

  name:'Riya',
  age:20,
  location:'Bhopal'
}, (err, result)=>{
  if(err){
    return console.log("Unable to enter user",err);
  }
console.log(result.ops[0]._id.getTimestamp());
});


const MongoClient=require('mongodb').MongoClient;

  db.close();
});
