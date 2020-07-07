const array = [1, 3, 4, 5, 6];

// //Default
// const newArray = array.map(function (item) {
//   return item * 2;
// });

//Arrow Function Examples
const newArray = array.map((item) => item * 2);
console.log(newArray);

const teste = () => {
  return "teste";
};
//Arrow Function with Array
const teste2 = () => [1, 2, 3];

//Arrow Function with String
const teste3 = () => "Teste 3";

//Arrow Function with Object
const teste4 = () => ({ name: "Teste 4" });

console.log(teste());
console.log(teste2());
console.log(teste3());
console.log(teste4());
