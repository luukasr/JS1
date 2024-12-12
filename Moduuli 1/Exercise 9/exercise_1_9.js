const number = Number(prompt('Give a number: '));
let is_prime = true;
const number_root = Math.sqrt(number);
if (number <= 1) {
  is_prime = false;
  document.getElementById(
      'prime').textContent = number + ' is not a prime number';
} else {
  for (let i = 2; i <= number_root; i++) {
    if (number % i === 0) {
      is_prime = false;
      console.log(i)
      break;
    }
  }
  if (is_prime) {
    document.getElementById(
        'prime').textContent = number + ' is a prime number';
  } else {
    document.getElementById(
        'prime').textContent = number + ' is not a prime number';
  }
}