'use strict';

const dogs = [];
for (let i = 1; i <= 6; i++) {
  dogs.push(prompt('Give the name of ' + i + '.  dog: '));
}
dogs.sort().reverse();

const ul = document.createElement('ul');

// Add each name as a list item
for (let name of dogs) {
  const li = document.createElement('li'); // Creates a new list item
  li.textContent = name;                   // Sets the text of the list item to the participant's name
  ul.appendChild(li);                       // Adds the list item to the unordered list
}

// Append the ordered list to the div with id="participant-list" in the HTML
document.getElementById('dogs-list').appendChild(ul);