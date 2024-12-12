'use strict';
const numbers = [];
for (let i = 1; i <= 5; i++) {
  numbers.push(Number(prompt('Give the ' + i + '.  number: ')));
}
for (let j = numbers.length - 1; j >= 0; j--) {
  console.log(numbers[j]);
}