'use strict';
const election = [];

const number_of_candidates = Number(prompt('How many candidates?'));

for (let i = 1; i <= number_of_candidates; i++) {
  const candidate_name = prompt('Name for candidate number:' + i);
  const candidate = {name: candidate_name, votes: 0};
  election.push(candidate);

}

const number_of_voters = Number(prompt('How many voters?'));

for (let i = 1; i <= number_of_voters; i++) {
  const vote_for_who = prompt('vote for which candidate');
  const candidate = election.find(c => c.name === vote_for_who);
  if (candidate) {
    candidate.votes += 1;
  } else {
    console.log('candidate not found ' + vote_for_who);
  }
}

let winner = election[0];  // Start by assuming the first candidate is the winner

for (let i = 1; i < election.length; i++) {
  if (election[i].votes > winner.votes) {
    winner = election[i];  // Update winner if the current candidate has more votes
  }
}

console.log(`The winner is ${winner.name} with ${winner.votes} votes.`);
console.log(election);
