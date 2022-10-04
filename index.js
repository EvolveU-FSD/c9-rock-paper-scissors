import rl from 'readline-sync';

function compare(player1Choice, player2Choice) {
  if (player1Choice === 'rock') {
    if (player2Choice === 'rock') {
      return 'draw';
    } else if (player2Choice === 'paper') {
      return 'player2';
    } else {
      return 'player1';
    }
  } else if (player1Choice === 'paper') {
    if (player2Choice === 'rock') {
      return 'player1';
    } else if (player2Choice === 'paper') {
      return 'draw';
    } else {
      return 'player2';
    }
  } else {
    if (player2Choice === 'rock') {
      return 'player2';
    } else if (player2Choice === 'paper') {
      return 'player1';
    } else {
      return 'draw';
    }
  }
}

console.log('Welcome to Rock, Paper, Scissors!');
console.log('Please enter your names.');

const player1Name = rl.question("What is player 1's name? ");
const player2Name = rl.question("What is player 2's name? ");

let player1Score = 0;
let player2Score = 0;

while (true) {
  const player1Choice = rl.question("What is player 1's choice? ");
  const player2Choice = rl.question("What is player 2's choice? ");

  const winner = compare(player1Choice, player2Choice);
  let winnerName;

  if (winner === 'player1') {
    player1Score = player1Score + 1;
    winnerName = player1Name;
  } else if (winner === 'player2') {
    player2Score = player2Score + 1;
    winnerName = player2Name;
  } else {
    console.log('Draw, please play again!');
    continue;
  }

  console.log(`The winner is ${winnerName}`);
  console.log(`${player1Name}'s score: ${player1Score}`);
  console.log(`${player2Name}'s score: ${player2Score}`);
}
