'use strict';

function even(array) {
  const new_array = [];
  for (let num of array) {
    if (num % 2 === 0)
    {
      new_array.push(num);
    }
  }
  return (new_array);
}

const first_array = [1, 2, 3, 4, 5, 5, 6, 7, 8, 11, 9, 41, 45, 79, 80];
const second_array = even(first_array);

console.log(first_array);
console.log(second_array);
