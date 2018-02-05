# How to load JavaScript and use Mongo Scripts
[Original YouTube Video](https://youtu.be/DjtjZqEBPZw)

## Table Of Contents
1. [Update Many](#)
1. [forEach](#)
---

## forEach
See [cursor.forEach](https://docs.mongodb.com/manual/reference/method/cursor.forEach/#cursor.forEach)  
```
db.users.find().forEach( function(myDoc) { print( "user: " + myDoc.name ); } );
```

## Update Many
See [db.collection.updateMany](https://docs.mongodb.com/manual/reference/method/db.collection.updateMany/#db-collection-updatemany)  

Sample data inserted into the 'restaurant' collection.  
```
db.restaurant.insert([
  {
    name: "Central Perk Cafe",
    violations: 3
  },
  {
    name: "Rock A Feller Bar and Grill",
    violations: 2
  },
  {
    name: "Empire State Sub",
    violations: 5
  },
  {
    name: "Pizza Rat's Pizzaria",
    violations: 8
  }  
]);
```
Verify inserted data.
```
db.restaurant.find().pretty();
```
Update all documents
```
try {
   db.restaurant.updateMany(
      { violations: { $gt: 4 } },
      { $set: { "Review" : true } }
   );
} catch (e) {
   print(e);
}
```




Running JavaScript in the Mongo Shell.
```
var types = ['exam', 'homework', 'quiz'];
for(student_id = 0; student_id > 100; student_id++){
  for(type = 0; type < 3; type++){
    var r = {
      'student_id': student_id,
      'type': types[type],
      'score': Math.random() * 100
    };

    db.scores.insert(r);
  }
}
```
