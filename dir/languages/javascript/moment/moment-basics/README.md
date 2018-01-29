# MomentJS

## Getting Started
```
$ touch project
```
```
$ cd project
```
```
$ npm install --save moment
```
## FORMAT
```
let moment = require('moment');

let date = '2015-04-03';
let  format = 'LLLL';
let result = moment(date).format(format);

console.log(result);
```
### Day Of The Week
```
let moment = require('moment');

let date = '2017-01-25 23:22';
let  format = 'dddd';

let result = moment(date).format(format);

console.log(result);
```






## ADD
Add 1 Day to an existing day and format it.
```
let moment = require('moment');

let date = '2015-04-03';
let  format = 'LLLL';

let result = moment(date).add(1, 'day').format(format);

console.log(result);
```
Add 6 Months to an existing day and format it.
```
let moment = require('moment');

let date = '2015-04-03';
let  format = 'LLLL';

let result = moment(date).add(1, 'day').format(format);

console.log(result);
```
Using an object  
```
let moment = require('moment');

let date = '2015-04-03';
let  format = 'LLLL';

let result = moment(date).add(
  {
    day: 1,
    months: 6
  }).format(format);

console.log(result);
```





## SESSION
Sydney ( 5pm - 2am || 17 - 23:59:59 )  
Tokyo (7pm - 1am || )  
London (3am - 12am)  
New York (8am - 5pm)   

===========================

Sydney ( 17 - 19 )
Sydney-Tokyo ( 19 - 23 || 0 - 1 )
Sydney-London-Gap ( 2 - 3 )
London ( 3 - 8 )
London-New-York ( 8 - 17 )

```
let moment = require('moment');

let date = '2015-04-03';
let  format = 'LLLL';
let result = moment(date).format(format);

console.log(result);
```
