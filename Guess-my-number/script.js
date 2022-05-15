'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = Number(document.querySelector('.score').textContent);
let highscore = Number(document.querySelector('.highscore').textContent);

const displeyMesage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    //NO INPUT
    displeyMesage('No number!');
  } else if (guess === secretNumber) {
    //WIN
    document.querySelector('.number').textContent = secretNumber;
    displeyMesage('Correct number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secretNumber || guess < secretNumber) {
    //if number is not wrong
    if (score > 1) {
      displeyMesage(guess > secretNumber ? 'To high.' : 'To low.');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displeyMesage('You lost a game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  displeyMesage('Start guessing!');
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
