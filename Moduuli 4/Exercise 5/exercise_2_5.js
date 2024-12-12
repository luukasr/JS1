'use strict';
const numbers = [];
let number = Number(prompt('Give a number:'));
do {
  numbers.push(number);
  number = Number(prompt('Give a number:'));
}
while (numbers.includes(number) === false);
console.log(number + ' has already been given, stopping operation.');
numbers.sort((a, b) => a - b);
for (number of numbers) {
  console.log(number);
}