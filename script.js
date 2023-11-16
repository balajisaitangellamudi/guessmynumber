'use strict';
let score = 20;
let highscore = 0;

//creating functions for display (message,score,number)
const displaymessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displaynumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const displayscore = function (score) {
  document.querySelector('.score').textContent = score;
};

// For random Number (1-20).......
let secretNumber = Math.trunc(Math.random() * 20) + 1;
displaynumber('?');

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When No Input....

  if (!guess) {
    //When there is no input, Displaying No Number.....
    displaymessage('No number!');
  } else if (guess === secretNumber) {
    displaymessage('Correct Number');
    //Displaying secret number, When guess number is correct......and also Displaying CSS properties......
    displaynumber(secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '40rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When Guess is too High.....
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displaymessage(
        guess > secretNumber ? 'Number is Too high' : 'Number is Too Low'
      );
      score--;
      displayscore(score);
    } else {
      displaymessage('You lost the game!');
      displayscore(0);
    }
  }
});

//Restarting of game by using again button....................

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displaymessage('Start guessing...');
  displayscore(score);
  displaynumber('?');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
