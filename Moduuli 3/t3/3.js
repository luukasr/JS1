'use strict';
const target = document.getElementById('target');
const names = ['John', 'Paul', 'Jones'];

let listItems = '';
for (name of names) {
listItems += `<li>${name}</li>`;
}

  target.innerHTML = listItems;