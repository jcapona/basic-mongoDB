/*
 FIND
 Exercise 3 of 9

Here we will learn how to search for documents.

For all of the exercises, the database is learnyoumongo.
So, the url would be something like: mongodb://localhost:27017/learnyoumongo

Use the parrots collection to find all documents where age
is greater than the first argument passed to your script.

Using console.log, print the documents to stdout.
*/


var mongo = require('mongodb').MongoClient;
var age = process.argv[2];

mongo.connect("mongodb://localhost:27017/learnyoumongo", function(err, db) {
  if(err)
    return console.dir(err);
    
  var coll = db.collection('parrots');
  coll.find({
    age: {$gt: +age}
  }).toArray(function(err, documents) {
    if(err)
      return console.dir(err);
    console.log(documents);
    db.close();
  })


});

