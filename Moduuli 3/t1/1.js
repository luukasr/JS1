'use strict';

// Select the target element
const targetElement = document.getElementById('target');

// Add the HTML content using innerHTML
targetElement.innerHTML = `
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
`;

// Add the class "my-list" to the element
targetElement.classList.add('my-list');