const myArray = [1, 2, 4, 6, 7];

const myNewArray = myArray.map(function (item, index) {
  return item + index;
});
console.log(myNewArray);

const sum = myArray.reduce(function (total, next) {
  return total + next;
});
console.log(sum);

const filter = myArray.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter);

const find = myArray.find(function (item) {
  return item === 2;
});
console.log(find);
