const number_of_dice = Number(prompt('How many dice do you want to roll?'));
const target_sum = Number(prompt('What is the target sum?'));
let reached_target = 0;
for (let i = 1; i <= 10000000; i++) {
  let sum = 0;
  for (let j = 1; j <= number_of_dice; j++) {
    roll_result = 0;
    roll_result = Math.floor(Math.random() * 6) + 1;
    sum += roll_result;
  }
  if (sum === target_sum) {
    reached_target += 1;
    console.log(reached_target);
  }
}
const probability = (reached_target / 10000000) * 100;
document.getElementById(
    'probability').textContent = 'Probability to get sum ' + target_sum +
    ' with ' + number_of_dice + ' is ' + probability.toFixed(4) + '%';