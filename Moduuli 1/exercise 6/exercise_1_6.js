const should = confirm('Should I calculate the square root?');
let number = 0;
let root = 0;
switch (should) {
  case true:
    number = prompt('Enter a number: ');
    if (number < 0) {
      document.getElementById(
          'root').textContent = 'The square root of a negative number is not defined';
    } else {
      root = Math.sqrt(number);
      document.getElementById(
          'root').textContent = root + ' is the square root of ' + number;
    }
    break;
  case false:
    document.getElementById(
        'root').textContent = 'The square root is not calculated.';
    break;

}