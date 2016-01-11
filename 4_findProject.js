/*
 FIND PROJECT
 Exercise 4 of 9

Here we will learn how to search for documents but only fetch the fields
we need. Also known as projection in MongoDB

Use the parrots collection to find all documents where age
is greater than the first argument passed to your script.

The difference from the last lesson will be that we only want the
name and age properties

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
  },{
      name: 1
    , age: 1
    , _id: 0
    }).toArray(function(err, documents) {
    if(err)
      return console.dir(err);
    console.log(documents);
    db.close();
  })


});

