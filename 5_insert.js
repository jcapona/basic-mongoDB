/*
 INSERT
 Exercise 5 of 9

Connect to MongoDB on port 27017.
You should connect to the database named learnyoumongo and insert
a document into the docs collection.

The document should be a json document with the following properties:

  * `firstName`
  * `lastName`

firstName will be passed as the first argument to the lesson.

lastName will be passed as the second argument to the lesson.

Use console.log to print out the object used to create the document.

Make sure you use JSON.stringify convert it to JSON.

*/


var mongo = require('mongodb').MongoClient;
var firstname = process.argv[2];
var lastname = process.argv[3];

mongo.connect("mongodb://localhost:27017/learnyoumongo", function(err, db) {
var doc = JSON.stringify({"firstName":firstname,"lastName":lastname}); 
  var coll = db.collection('docs'); 
  coll.insert(doc, function(err, result) {
        if(err)
            return console.dir(err);
        console.log(doc);
        db.close();
  });
});

