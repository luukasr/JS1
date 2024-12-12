const year = Number(prompt('Give the year: ')); // asks for a year
let leap_year = false; // initializes leap year as false
if (year % 100 !== 0 && year % 4 === 0) {
  leap_year = true;
} else if (year % 100 === 0 && year % 400 === 0) {
  leap_year = true;
}
if (leap_year === true) {
  document.getElementById(
      'leap').textContent = year + ' is a leap year';
} else {
  document.getElementById(
      'leap').textContent = year + ' is not a leap year';
}