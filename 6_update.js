/*
 UPDATE
 Exercise 6 of 9

Here we are going to update a document in the users collection.

The database name will be accessible via process.argv[2].

Say we have a user defined like:

    {
      "name": "Tina",
      "age": 30,
      "username": "tinatime"
    }

We want to change Tina's age from 30 to 40.

For the purpose of this lesson, assume that the username property is unique.

*/


var mongo = require('mongodb').MongoClient;

mongo.connect("mongodb://localhost:27017/"+process.argv[2], function(err, db) {
  if(err)
    return console.dir(err);

  var coll = db.collection('users'); 
  coll.update({"name":"Tina"},{$set:{"age":Number(40)}},function(err){
    if(err)
        return console.dir(err);    
    db.close();
    });
});

