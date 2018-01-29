
# MongoDB In 30 Minutes
[https://youtu.be/pWbMrx5rVBE](https://youtu.be/pWbMrx5rVBE)



## Getting Started

Download MongoDB
See [Download MongoDB](#find-this-link)
```
$
```

Custom Installation
See [Custom Installation](#find-this-link)
```
$
```

Start Mongo Service
See [Custom Installation](#find-this-link)
```
$ mongod
```

Start Mongo Shell
See [Custom Installation](#find-this-link)
```
$ mongo
```









## Document Syntax
Very similar to a JSON doc.
---
Document with value pairs
```
{
  // Strings
  first_name: "John",
  last_name: "Doe",

  // Arrays
  memberships: ['General', 'Premium', 'Platinum'],

  // Objects
  address: {
    street: "100 E. Broad St.",
    city: "Atlanta"
  },

  // Array of objects
  contacts: [
    {
      name: "Brad",
      relationship: "Friend"
    }
  ]
}
```







## Saving Data
Saving data to a database.
---
Create User
See [Custom Installation](#find-this-link)
```
db.createUser(
  {
    user: "John",
    pwd: "1234",
    roles: [ "readWrite", "dbAdmin"]
  }
);
```
Create Collection
See [Custom Installation](#find-this-link)
```
db.createCollection('customers');
```
Show All Collections
See [Custom Installation](#find-this-link)
```
show collections
```

### Insert
Insert Doc In Collection
See [Custom Installation](#find-this-link)
```
db.customers.insert(
  {
    first_name: "John",
    last_name: "Doe"
  }
);
```
Insert Multiple Docs In Collection
See [Custom Installation](#find-this-link)
```
db.customers.insert([
  {
    first_name: "John",
    last_name: "Doe"
  },
  {
    first_name: "Jane",
    last_name: "Doe"
  },
  {
    first_name: "George",
    last_name: "Doe"
  }
]);
```

### Find
See documents in a collection.  
See [Custom Installation](#find-this-link)
```
db.customers.find();
```
See documents in a collection in a 'PRETTY' format.  
See [Custom Installation](#find-this-link)
```
db.customers.find().pretty();
```
Find With Parameters
See (24:29) [Custom Installation](#find-this-link)
```
db.customers.find(
  {
    first_name: "Timothy"
  }
).pretty();
```
```
db.customers.find(
  {
    "address.city": "Dover"
  }
).pretty();
```
Find Using 'OR' operator
See (24:41) [Custom Installation](#find-this-link)
```
db.customers.find(
  {
    $or: [
      {
        first_name: "Timothy"
      },
      {
        first_name: "Paul"
      }
    ]
  }
).pretty();
```

Find: Greater Than, Less Than.
See (26:24)    
'lt': Less Than  
'gt': Greater than  
'lte': Less than or equal to  
'gte': Greater than or equal to
```
db.customers.find({
  age:{
      $lt: 75
    }
}).pretty();
```

### Sorting
See (28:32)    
Command Structure  
Add the sort and the field
```
db.customers.find().sort();
```
By last name (Ascending)
```
db.customers.find().sort(
  {
    last_name: 1
  }
).pretty();
```
By last name (Descending)
```
db.customers.find().sort(
  {
    last_name: -1
  }
).pretty();
```

### Count
See (29:51)    
Command Structure  
Add the count
```
db.customers.find().count();
```
By A Parameter
```
db.customers.find(
  {
    memberships: "Bronze"
  }
).count();
```

### Limit
See (30:28)
Command Structure  
Add the limit and number
```
db.customers.find().limit();
```
First Five
```
db.customers.find().limit(5).pretty();
```
First Five Sorted
```
db.customers.find().limit(5).sort(
  {
    last_name: -1
  }
).pretty();
```

### Iterate With FOR EACH
See (30:53)  
Print all the first names of the customers.  
```
db.customers.find().forEach(function(doc)
  {
    print("Customer Name: " + doc.first_name)
  }
);
```


### Update
Update a document.  
See [Custom Installation](#find-this-link)
```
db.customers.update(
  {
    first_name: "Jane",
  },
  {
    first_name: "Jane",
    last_name: "Doe",
    type: "Employee"
    category: "Part Time"
  }
);
```

### Set
Update document in more detail.
See [Custom Installation](#find-this-link)
```
db.customers.update(
  {
    first_name: "Bobby",
  },
  {
    $set: {
      age: 34
    }
  }
);
```

### Inc
Increment numeric values.
See [Custom Installation](#find-this-link)
```
db.customers.update(
  {
    first_name: "Bobby",
  },
  {
    $inc: {
      age: 3
    }
  }
);
```

### UnSert
If it is not there.. add it.
See [Custom Installation](#find-this-link)
```
db.customers.update(
  {
    first_name: "Mary"
  },
  {
    first_name: "Mary",
    last_name: "Jane",
    type: "Employee",
    category: "Part Time"
  },
  {
    upsert: true
  }
);
```

### Rename
If it is not there.. add it.
See (21:05) [Custom Installation](#find-this-link)
```
db.customers.update(
  {
    first_name: "Mary"
  },
  {
    $rename: {
      "type": "tag"
    }
  }
);
```

### Remove Documents
If it is not there.. add it.
See (22:19)  [Custom Installation](#find-this-link)
```
db.customers.remove(
  {
    first_name: "George"
  }
);
```
Delete the first document that you find.
See (22:55) [Custom Installation](#find-this-link)
```
db.customers.remove(
  {
    first_name: "Mary"
  },
  {
    justOne: true
  }
);
```







## Mongo Commands
Commands in the mongo shell.
---
Clear
```
$ cls
```
Show list of databases
```
$ show dbs
```
Use/Switch To/Create A Database
```
$ use candles
```
Check what database you are in.
```
$ db
```
