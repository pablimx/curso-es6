"use strict";

//Destructuring
var person = {
  name: "João Silva",
  age: "22",
  address: {
    city: "São Paulo",
    state: "SP"
  }
}; // console.log(person);
// const name = person.name;
// const age = person.age;
// const city = person.address.city;
// console.log(name);
// console.log(age);
// console.log(city);
//IN ES6
// function showPerson(person) {
//   console.log(person.name);
// }

function showPerson(_ref) {
  var name = _ref.name,
      age = _ref.age;
  console.log(name, age);
}

showPerson(person);
var name = person.name,
    age = person.age,
    city = person.address.city;
console.log(name);
console.log(age);
console.log(city);
