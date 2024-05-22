


/**let array = [1, 2, 3, 4, 5, 6,]

let p = e => e < 2;

let resp = _.takeWhile(array, p); 
 */

// Requiring the module 
const collect = require('collect.js');

// Sample array 
let arr = [1, 2, 3, 4, 5, 6, 8, 9];

// Creating collection 
const collection = collect(arr);

// Function call 
const result = collection
  .takeWhile(item => item < 8);

// Printing the result object 
let newObject = result.all();
console.log(newObject);
