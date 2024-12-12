'use strict';

const participants = [];
const how_many = prompt('How many participants?');
for (let i = 1; i <= how_many; i++) {
  participants.push(prompt('Give the ' + i + '.  participant: '));
}
participants.sort();

const ol = document.createElement('ol');

// Add each name as a list item
for (let name of participants) {
  const li = document.createElement('li'); // Creates a new list item
  li.textContent = name;                   // Sets the text of the list item to the participant's name
  ol.appendChild(li);                       // Adds the list item to the ordered list
}

// Append the ordered list to the div with id="participant-list" in the HTML
document.getElementById('participant-list').appendChild(ol);