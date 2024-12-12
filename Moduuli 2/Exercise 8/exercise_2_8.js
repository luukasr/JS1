'use strict';

function concat(array) {
  let concatenated = '';
  for (name of array) {
    concatenated += name;
  }
  return (concatenated);
}

const names_combined = concat(
    ['Aleksi', 'Ola', 'Aleix', 'Sonia', 'J-J', 'Minttu']);

document.getElementById(
    'concat').textContent = names_combined;