'use strict';
const integer1 = Number(prompt('Give the first number: '));
const integer2 = Number(prompt('Give the second number: '));
const integer3 = Number(prompt('Give the third number: '));
const average = (integer3 + integer2 + integer1) / 3;
document.getElementById(
    'average').textContent = 'The average of the numbers is: ' + average;