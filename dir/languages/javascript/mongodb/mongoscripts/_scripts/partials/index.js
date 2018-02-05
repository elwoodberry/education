// Create The Collection Of 'Score'.
db.createCollection('score');

// Manual Insert
var types = ['exam', 'homework', 'quiz'];

for(generate_id = 0; generate_id > 100; generate_id++){
  db.score.insert(
    {
      student_id: generate_id,
      type: types[1],
      score: Math.random() * 100
    }
  )
};

db.january.find().forEach( function(doc) {
  print( "date: " + doc.date );
});




// forEach (v1)
db.january.find().forEach(function(doc){
  let propDate = doc.date;
  let propOpen = doc.Open;
  let propClose = doc.Close;
  let propHigh = doc.High;
  let propLow = doc.Low;

  print( "Date: " + doc.date + "\nOpen: " + doc.Open+ "\nClose: " + doc.Close + "\nHigh: " + doc.High + "\nLow: " + doc.Low);
});

// forEach (v2)
db.january.find().forEach(function(doc){
  let propDate = doc.date;
  let propDateArray = propDate.split(';');

  let collectionCount = db.january.find().count();

  db.january.update(
    {
      _id: doc._id
    },
    {
      $set: {
        Open: propDateArray[1],
        High: propDateArray[2],
        Low: propDateArray[3],
        Close: propDateArray[4]
      }
    }
  );

  print("done");
});






// Update Many
try {
   db.january.updateMany(
      {},
      {
        $set: {
            "Open" : 0,
            "Close": 0,
            "High": 0,
            "Low": 0
        }
      }
   );
} catch (e) {
   print(e);
}








// Sample From YouTube Video
var types = ['exam', 'homework', 'quiz'];
for(student_id = 0; student_id > 100; student_id++){
  for(type = 0; type < 3; type++){
    var r = {
      student_id: student_id,
      type: types[type],
      score: Math.random() * 100
    };

    db.score.insert(r);
  }
}

//
var size = db.january.find().count();

size > 0;



// Remove Documents
db.score.remove(
  {
    student_id: 0
  }
);
