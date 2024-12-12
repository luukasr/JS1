'use strict';

const numbers = [];
let number = Number(prompt('Give a number:'));
while (number !== 0) {
  numbers.push(number);
  number = Number(prompt('Give a number:'));
}
numbers.sort((a, b) => b - a);
for (number of numbers) {
  console.log(number);
}