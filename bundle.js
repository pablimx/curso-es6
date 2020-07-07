"use strict";

var array = [1, 3, 4, 5, 6]; // //Default
// const newArray = array.map(function (item) {
//   return item * 2;
// });
//Arrow Function Examples

var newArray = array.map(function (item) {
  return item * 2;
});
console.log(newArray);

var teste = function teste() {
  return "teste";
}; //Arrow Function with Array


var teste2 = function teste2() {
  return [1, 2, 3];
}; //Arrow Function with String


var teste3 = function teste3() {
  return "Teste 3";
}; //Arrow Function with Object


var teste4 = function teste4() {
  return {
    name: "Teste 4"
  };
};

console.log(teste());
console.log(teste2());
console.log(teste3());
console.log(teste4());
