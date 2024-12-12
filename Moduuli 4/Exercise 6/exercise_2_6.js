'use strict';

function roll_dice() {
  return Math.floor(Math.random() * 6) + 1;
}

let current_roll;
const all_rolls = [];
do {
  current_roll = Number(roll_dice());
  all_rolls.push(current_roll);
} while (current_roll !== 6);

const ul = document.createElement('ul');
// Add each name as a list item
for (let roll of all_rolls) {
  const li = document.createElement('li'); // Creates a new list item
  li.textContent = roll;                   // Sets the text of the list item to the roll
  ul.appendChild(li);                       // Adds the list item to the unordered list
}

// Append the unordered list to the div with id="participant-list" in the HTML
document.getElementById('rolls-list').appendChild(ul);