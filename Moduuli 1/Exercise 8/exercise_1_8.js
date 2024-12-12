const start_year = Number(prompt('Give a starting year'));
const end_year = Number(prompt('Give a ending year'));
const ul = document.createElement('ul');
for (let year = start_year; year <= end_year; year++) {
  let leap_year = false; // initializes leap year as false
  if (year % 100 !== 0 && year % 4 === 0) {
    leap_year = true;
    console.log(year);
  } else if (year % 100 === 0 && year % 400 === 0) {
    leap_year = true;
    console.log(year);
  }
  if (leap_year) {
    const li = document.createElement('li');  // Create a new <li> element
    li.textContent = year;                                          // Set the text to the current year
    ul.appendChild(li);                                             // Append the <li> to the <ul>
  }
}
// Append the <ul> to the body of the document
document.body.appendChild(ul);