//Destructuring

const person = {
  name: "João Silva",
  age: "22",
  address: {
    city: "São Paulo",
    state: "SP",
  },
};

// console.log(person);

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

function showPerson({ name, age }) {
  console.log(name, age);
}

showPerson(person);

const {
  name,
  age,
  address: { city },
} = person;

console.log(name);
console.log(age);
console.log(city);
