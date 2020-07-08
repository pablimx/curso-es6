//REST

const user = {
  name: "Osvair",
  age: "50",
  company: "Cia & Teste",
};

const { name, ...others } = user;

console.log(name);
console.log(others);

const array = [1, 2, 3, 4];

const [a, b, ...c] = array;

console.log(a);
console.log(b);
console.log(c);

function sum(...params) {
  return params.reduce((total, next) => total + next);
}

console.log(sum(1, 2, 3, 4));

//SPREAD

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [...array1, ...array2];

console.log(array3);

const user1 = {
  name: "Osvair",
  age: "50",
  company: "Cia & Teste",
};

const user2 = { ...user1, name: "Osvaldo" };

console.log(user2);
