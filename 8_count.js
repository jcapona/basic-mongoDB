/*
 COUNT
 Exercise 8 of 9

Here we will learn how to count the number of documents that
meet certain criteria.

Use the parrots collection to count all documents where age
is greater than the first argument passed to your script.

Using console.log, print the number to stdout.

*/


var mongo = require('mongodb').MongoClient;

mongo.connect("mongodb://localhost:27017/learnyoumongo", function(err, db) {
  if(err)
    return console.dir(err);

  var coll = db.collection("parrots"); 
  coll.count({age: {$gt: +process.argv[2]}},function(err,count){
    if(err)
        return console.dir(err);
    console.log(count);
    db.close();
    });
});

