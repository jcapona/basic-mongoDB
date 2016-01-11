/*
 REMOVE
 Exercise 7 of 9

This lesson involves removing a document with the given _id.

The database name will be accessible via process.argv[2].

The collection name will be passed as the second argument to your script.

The _id will be passed as the third argument to your script.

*/


var mongo = require('mongodb').MongoClient;

mongo.connect("mongodb://localhost:27017/"+process.argv[2], function(err, db) {
  if(err)
    return console.dir(err);

  var coll = db.collection(process.argv[3]); 
  coll.remove({_id:process.argv[4]},function(err){
    if(err)
        return console.dir(err);    
    db.close();
    });
});

