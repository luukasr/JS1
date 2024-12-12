'use strict';
const hoverOn = document.getElementById('trigger');
hoverOn.addEventListener('mouseover', () => {
  document.getElementById('target').src = 'img/picB.jpg';
});
const hoverOff = document.getElementById('trigger');
hoverOff.addEventListener('mouseout', () => {
  document.getElementById('target').src = 'img/picA.jpg';
});
