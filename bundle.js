"use strict";

var myArray = [1, 2, 4, 6, 7];
var myNewArray = myArray.map(function (item, index) {
  return item + index;
});
console.log(myNewArray);
var sum = myArray.reduce(function (total, next) {
  return total + next;
});
console.log(sum);
var filter = myArray.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter);
var find = myArray.find(function (item) {
  return item === 2;
});
console.log(find);
