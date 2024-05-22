// Defining underscore contrib variable
const _ = require('underscore-contrib');
// Array
let array = [11, 21, 43, 34, 12, -1];

let calback = e => e > -8;

let res = _.dropwhile(array, calback);