'use strict';

const roll_amount = Number(prompt('How many times do I roll the die?'));
let roll_result = 0;
let sum = 0;
for (let i = 1; i <= roll_amount; i++) {
  roll_result = Math.floor(Math.random() * 6) + 1;
  sum += roll_result;
}
console.log(sum);