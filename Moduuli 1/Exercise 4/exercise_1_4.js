'use strict';
const name = prompt('What is your name:');
let result = Math.floor(Math.random() * 4) + 1;
let house = 'poopypants';
switch (result) {
  case 1:
    house = 'Hufflepuff';
    break;
  case 2:
    house = 'Gryffindor';
    break;
  case 3:
    house = 'Ravenclaw';
    break;
  case 4:
    house = 'Slytherin';
    break;
}
document.getElementById(
    'house').textContent = name + ', Your house is: ' + house;